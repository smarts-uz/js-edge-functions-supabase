// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient} from "@supabase/supabase-js";
// import { Database } from './database.types'

console.log("Hello from Functions!")

// serve(async (req) => {
//   const { name } = await req.json()
//   const data = {
//     message: `Hello ${name}!`,
//   }
//
//   return new Response(
//     JSON.stringify(data),
//     { headers: { "Content-Type": "application/json" } },
//   )
// })

serve( async () => {
  const options = {
    db: {
      schema: 'posts',
    },
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true
    },
    global: {
      headers: { 'x-my-custom-header': 'my-app-name', Authorization: `BearerOQs+xtVTTfGAdzN9SQtrGggFcXSpYRXt87qHjKrFr4M7YcQvto1TI+EourVUcgylkCYx9i+Ya2D+LnNGjsDZzw==` },
    },
  }

  const supabase = createClient('https://trcosyjdikazobtueqby.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRyY29zeWpkaWthem9idHVlcWJ5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MzQ5MDkxMiwiZXhwIjoyMDA5MDY2OTEyfQ.uwObMMYFFM0NWIrTxN1YE1_HCcpT5JpaHCCgW2gqjqA', options

  )
  const { data, error } = await supabase
      .from('posts')
      .select('*')

  console.log({ data })
})

// To invoke:
// curl -i --location --request POST 'http://localhost:54321/functions/v1/' \
//   --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
//   --header 'Content-Type: application/json' \
//   --data '{"name":"Functions"}'
