# Step-by-Step Supabase Database Integration Guide for Saima Kosser Portfolio

This guide explains how to connect your Next.js portfolio website to a live **Supabase PostgreSQL database** to store contact form submissions.

---

## Step 1: Create a Free Supabase Project
1. Go to [supabase.com](https://supabase.com) and click **Start your project** or sign in with GitHub.
2. Click **New Project**.
3. Set your Project Name (e.g., `saima-portfolio`).
4. Enter a strong Database Password and select your Region (e.g., `South Asia (Mumbai)`).
5. Click **Create new project** and wait ~1-2 minutes for initialization.

---

## Step 2: Copy API Credentials
1. In your Supabase Dashboard, go to **Project Settings** (⚙️ Gear Icon in left sidebar).
2. Click on **API** in the settings menu.
3. Copy the following two credentials:
   - **Project URL**: (e.g., `https://your-project-id.supabase.co`)
   - **Project API Keys (`anon` `public`)**: (e.g., `eyJhbGciOiJIUzI1...`)

---

## Step 3: Create `.env.local` File in Project Root
Create a file named `.env.local` in your root project folder (`d:\portfolio\.env.local`) and add your copied keys:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-public-key-here
```

---

## Step 4: Create Database Table in Supabase
1. In Supabase Dashboard, click **SQL Editor** (icon `>_` on left sidebar).
2. Click **New Query**.
3. Copy and paste the following SQL script and click **Run**:

```sql
-- 1. Create contact_messages table
create table public.contact_messages (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text not null,
  subject text,
  message text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. Enable Row Level Security (RLS)
alter table public.contact_messages enable row level security;

-- 3. Allow anonymous form submissions from portfolio website
create policy "Enable insert for website contact form"
on public.contact_messages
for insert
with check (true);

-- 4. Allow reading messages in admin dashboard
create policy "Enable read access for authenticated users"
on public.contact_messages
for select
using (true);
```

---

## Step 5: Test Submission
1. Start your local dev server: `npm run dev`
2. Open [http://localhost:3000/#contact](http://localhost:3000/#contact)
3. Fill out the contact form and click **Send Message**.
4. Check Supabase Dashboard -> **Table Editor** -> **`contact_messages`** to see your live message!
