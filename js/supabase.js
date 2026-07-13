// Conexion a Supabase — Vercelli
const SUPABASE_URL = 'https://oasusarhjochiiunefbd.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9hc3VzYXJoam9jaGlpdW5lZmJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkxNjY1NzAsImV4cCI6MjA5NDc0MjU3MH0.5nbsj38T1aIriNi3ugnIWGI3o6_RskhuKKddefexBVM'

const { createClient } = supabase
const db = createClient(SUPABASE_URL, SUPABASE_KEY)
