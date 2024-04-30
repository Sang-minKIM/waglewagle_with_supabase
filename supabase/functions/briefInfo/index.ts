// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

// Setup type definitions for built-in Supabase Runtime APIs
/// <reference types="https://esm.sh/@supabase/functions-js/src/edge-runtime.d.ts" />

import { supabase } from "../shared/client.ts";
import { Station } from "./briefInfo.type.ts";

Deno.serve(async () => {
  const { data, error } = await supabase
    .from("station")
    .select(`
    station_id,
    station_name,
    post!left(
      tag_id
    )
  `)
    .order("station_id", { ascending: true });

  if (error) {
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

  const stations = data.map((station: Station) => {
    // 가장 많이 사용된 tagId 찾기
    const tagCounts = station.post.reduce(
      (acc: { [key: number]: number }, post) => {
        acc[post.tag_id] = (acc[post.tag_id] || 0) + 1;
        return acc;
      },
      {},
    );
    const maxTagId = Object.keys(tagCounts).reduce(
      (a, b) => tagCounts[parseInt(a)] > tagCounts[parseInt(b)] ? a : b,
      "0",
    );

    return {
      stationId: station.station_id,
      stationName: station.station_name,
      tagId: maxTagId ? parseInt(maxTagId) : 0,
      contentCount: station.post.length,
    };
  });

  return new Response(
    JSON.stringify({
      success: true,
      code: 200,
      message: "성공",
      data: { stations },
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    },
  );
});
