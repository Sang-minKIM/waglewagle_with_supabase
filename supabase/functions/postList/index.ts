// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { supabase } from "../shared/client.ts";

// Setup type definitions for built-in Supabase Runtime APIs
/// <reference types="https://esm.sh/@supabase/functions-js/src/edge-runtime.d.ts" />

async function handleRequest(request: Request) {
  const url = new URL(request.url);
  const stationId = url.searchParams.get("stationId");
  const pageSize = Number(url.searchParams.get("pageSize") || "1");
  // 페이지 1부터 시작
  const pageNumber = Number(url.searchParams.get("pageNumber") || "1") - 1;
  const tagId = url.searchParams.get("tagId");

  if (!stationId) {
    return new Response(
      JSON.stringify({
        success: false,
        code: 400,
        message: "station_id is required",
        data: {},
      }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      },
    );
  }

  let query = supabase
    .from("post")
    .select(
      `
    id: post_id,
    createdTime: created_datetime,
    imageUrl: image!left(
      image_url
    ),
    tagId: tag_id,
    like,
    content,
    tag!inner(
      nickname
    )
    `,
      { count: "exact" },
    )
    .eq("station_id", stationId)
    .range(pageNumber * pageSize, (pageNumber + 1) * pageSize - 1)
    .order("created_datetime", { ascending: false });

  if (tagId && tagId !== "0") {
    query = query.eq("tag_id", tagId);
  }

  const { data: posts, error, count } = await query;

  if (error) {
    console.error(error);
    return new Response(
      JSON.stringify({
        success: false,
        code: 500,
        message: "서버 오류",
        data: {},
        error,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }

  const pageInfoDto = {
    page: pageNumber + 1,
    size: pageSize,
    totalElements: count || 0,
    totalPages: Math.ceil(count || 0 / pageSize),
  };

  return new Response(
    JSON.stringify({
      success: true,
      code: 200,
      message: "Ok",
      data: { posts },
      pageInfoDto: pageInfoDto,
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    },
  );
}

Deno.serve(handleRequest);
