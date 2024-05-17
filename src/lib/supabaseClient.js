import { createClient } from '@supabase/supabase-js'


const PROJECT_URL = "https://uqrkkoukzlcvevfauazp.supabase.co"
const PROJECT_KEYS = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxcmtrb3VremxjdmV2ZmF1YXpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU3NzY1NjIsImV4cCI6MjAzMTM1MjU2Mn0.1T6NdxOFLKfVm5Zd0ftAIUoenoPXr3JWnFo12hKPvX0"

export const supabase = createClient(PROJECT_URL, PROJECT_KEYS)