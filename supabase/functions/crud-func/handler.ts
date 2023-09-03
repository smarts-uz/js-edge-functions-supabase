
import  { createClient } from '@supabase/supabase-js'
import {Database} from './database.types'

export default async function handler(req) {
const options = {
    db: {
        schema: 'posts'
    },
    auth: {
        autoRefreshToken: true,
        persistSession: false,
        detectSessionInUrl: true
    },
}

// Create a single supabase client for interacting with your database
    const supabase = createClient('https://trcosyjdikazobtueqby.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRyY29zeWpkaWthem9idHVlcWJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM0OTA5MTIsImV4cCI6MjAwOTA2NjkxMn0.IFei-S8FMbCjfF45QzOLoYnK21hziDd_88EuM0mvezY', options)

    let { data, error } = await supabase.from('posts').select('name')
    console.log({data})


    // const { name } = await req.json()
    // const mes = {
    //     message: `Hello supa ${name}!`,
    // }

    return new Response(
        // JSON.stringify({data}),
        {data},
        { headers: { "Content-Type": "application/json" } },
    )

    // return new Response({data})



}
