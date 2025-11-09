## 🛠 Supabase Setup

This project uses Supabase for authentication, database, and storage.

### 1. Create Supabase Project

Go to https://app.supabase.com → Create new project.

### 2. Set Environment Variables

Copy `.env.example` to `.env.local` and fill with your keys:

### 3. Apply Database Schema

Open your Supabase dashboard:
→ SQL Editor → New Query  
Copy the contents of: migrations/0001_create_schema.sql
Then click **Run** ✅

This will create the following tables:

| Table        | Purpose                                                    |
| ------------ | ---------------------------------------------------------- |
| `profiles`   | Stores user profile info (linked to Supabase `auth.users`) |
| `cars`       | Car listings posted by users                               |
| `car_images` | Image URLs associated with car listings                    |
| `saved_cars` | Cars saved/favorited by users                              |

---

### 4. Create Storage Buckets

Go to:
**Storage → Create Bucket**

Create _both_ buckets:

| Bucket Name   | Access | Used For           |
| ------------- | ------ | ------------------ |
| `avatars`     | Public | Profile pictures   |
| `cars-images` | Public | Car listing images |

After creating each bucket → open it → **Manage Policies** → enable **Public Read**.

---

### 5. Run the Project

```bash
npm install
npm run dev
```

App runs at → http://localhost:3000
