import { createClient } from '@supabase/supabase-js'


const PROJECT_URL =  import.meta.env.VITE_SUPAURL
const PROJECT_KEYS =  import.meta.env.VITE_SUPAKEYS

export const supabase = createClient(PROJECT_URL, PROJECT_KEYS)