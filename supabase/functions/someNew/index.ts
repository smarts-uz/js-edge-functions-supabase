// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
// import { createClient } from '@supabase/supabase-js'

console.log("Hello from my-Functions!")

serve(async (req) => {
  const { name } = await req.json()
  const data = {
    message: `Hello ${name}!`,
  }
  const supabase = createClient(
      'http://localhost:54321',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndyZ2xrc296aW90Ymx5eWpxeGR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ0MDg0NDEsImV4cCI6MjAwOTk4NDQ0MX0.JRsVHtm1jn2gyLo1PV1SseeOkrwbLVkeRnRt0bw06Tc'
  )

  const { data1, error } = await supabase.functions.invoke('function-name', {
    body: { name: 'Functions' },
  })

  return new Response(
    JSON.stringify(data),
    { headers: { "Content-Type": "application/json" } },
  )
})

// To invoke:
// curl -i --location --request POST 'http://localhost:54321/functions/v1/' \
//   --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndyZ2xrc296aW90Ymx5eWpxeGR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ0MDg0NDEsImV4cCI6MjAwOTk4NDQ0MX0.JRsVHtm1jn2gyLo1PV1SseeOkrwbLVkeRnRt0bw06Tc' \
//   --header 'Content-Type: application/json' \
//   --data '{"name":"Functions"}'
