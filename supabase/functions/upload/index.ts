// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { supabase } from "../_shared/client.ts";

// Setup type definitions for built-in Supabase Runtime APIs
/// <reference types="https://esm.sh/@supabase/functions-js/src/edge-runtime.d.ts" />

const upload = async (req: Request): Promise<Response> => {
  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({
        success: false,
        code: 405,
        message: "Method Not Allowed",
      }),
      {
        status: 405,
        headers: { "Content-Type": "application/json" },
      },
    );
  }

  try {
    const body = await req.json();
    const { stationId, tagId, content, imageId } = body;

    if (!stationId || (!content && !imageId)) {
      return new Response(
        JSON.stringify({
          success: false,
          code: 400,
          message: "Missing required fields",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    const { data, error } = await supabase
      .from("post")
      .insert([
        {
          station_id: stationId,
          tag_id: tagId || null,
          content: content || null,
          image_id: imageId || null,
        },
      ]);

    if (error) {
      throw error;
    }

    return new Response(
      JSON.stringify({
        success: true,
        code: 0,
        message: "Ok",
        data: data,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        code: 500,
        message: "Internal Server Error",
        error: error,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
};

Deno.serve(upload);
