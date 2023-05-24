import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wkgihnvtfyrgansbrgsd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndrZ2lobnZ0ZnlyZ2Fuc2JyZ3NkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM1MDY5OTksImV4cCI6MTk5OTA4Mjk5OX0.TJgvqCGuuxSTl7D7RgwROomP-RpLoozDnkShNA62LoE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
