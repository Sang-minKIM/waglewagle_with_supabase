// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

// Setup type definitions for built-in Supabase Runtime APIs
/// <reference types="https://esm.sh/@supabase/functions-js/src/edge-runtime.d.ts" />


import {createClient} from 'npm:@supabase/supabase-js@2.39.3';


console.log("Hello from Functions!")

const supabase = createClient(Deno.env.get("SUPABASE_URL"),Deno.env.get("SUPABASE_ANON_KEY"))

Deno.serve(async (req) => {
const {data:stations, error} = await supabase.from('station').select('station_name');
if(error) console.log(error);
  const data = {
    message: `Hello, here are the stations: ${stations.map(station => station.station_name).join(", ")}`,
  }

  return new Response(
    JSON.stringify(data),
    { headers: { "Content-Type": "application/json" } },
  )
})


