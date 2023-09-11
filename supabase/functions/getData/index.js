// import { createClient } from '@supabase/supabase-js'
import { createClient} from '@supabase/supabase-js'


const supabase = createClient('https://ovohkyyjixawowhltbls.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im92b2hreXlqaXhhd293aGx0YmxzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMzNzk4ODEsImV4cCI6MjAwODk1NTg4MX0.bwvl838SPJ5LHAQJD-qkFvAuHL5n58oSVbmt0EpksxQ')

console.log(supabase.from('posts').select('name'))
