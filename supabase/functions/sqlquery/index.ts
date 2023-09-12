import { Pool } from "https://deno.land/x/postgres@v0.17.0/mod.ts";
import {serve} from "https://deno.land/std@0.177.0/http/server.ts";
const databaseUrl = Deno.env.get("//postgres:[YOUR_PASSWORD]@db.[PROJECT_NAME].supabase.co:5432/postgres")!;

const pool = new Pool(databaseUrl, 3, true);

serve(async (_req)=>{
    try {
        const connection = await pool.connect()
        try {
            const result = await connection.queryObject('SELECT * FROM posts')
            const posts = result.rows
            console.log(posts)
            const body = JSON.stringify(posts, null, 2)

            return new Response(body, {
                status: 200,
                headers: {
                    "Content-type" : "application/json; charset=utf-8",
                    // "Authorization": "Bearerey JhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndyZ2xrc296aW90Ymx5eWpxeGR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ0MDg0NDEsImV4cCI6MjAwOTk4NDQ0MX0.JRsVHtm1jn2gyLo1PV1SseeOkrwbLVkeRnRt0bw06Tc",

                }
            })
        } finally {
            connection.release()
        }
    }catch (e) {
        console.log(e)
    }

})

