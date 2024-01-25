import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
const supabaseUrl = 'https://tzjikybnymfhmvezapqo.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR6amlreWJueW1maG12ZXphcHFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI5ODEzMTAsImV4cCI6MTk5ODU1NzMxMH0.AgXDqvn56ZqrDbC9XK3GAbBmwIqFA8YzvZaY7RjFqiY';
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };