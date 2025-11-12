# Ridino

**Ridino** is a modern car listing web app built with Next.js and Supabase. Users can browse, search, and view car listings with images, technical details, and contact options. This project is fully open-source and designed to showcase professional full-stack development skills.

![Ridino Logo](./public/logo.svg)

---

## Features

- Full-stack Next.js (frontend + API routes)
- Authentication via Supabase
- Car listings with images, technical details, and contact info
- Save/favorite cars functionality
- Responsive UI with TailwindCSS
- TypeScript throughout
- Modern React patterns & hooks

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/AmirRhDev/ridino.git
cd ridino
```

### 2. Configure Environment Variables

Copy .env.example to .env.local and fill in your Supabase credentials:

```bash
cp .env.example .env.local
```

### 3. Supabase Setup

This project uses Supabase for authentication, database, and storage.

#### 1. Create Supabase Project

Go to https://app.supabase.com → Create new project.

#### 2. Set Environment Variables

Copy `.env.example` to `.env.local` and fill with your keys:

#### 3. Apply Database Schema

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

#### 4. Create Storage Buckets

Go to:
**Storage → Create Bucket**

Create _both_ buckets:

| Bucket Name   | Access | Used For           |
| ------------- | ------ | ------------------ |
| `avatars`     | Public | Profile pictures   |
| `cars-images` | Public | Car listing images |

After creating each bucket → open it → **Manage Policies** → enable **Public Read**.

## 4. Run the Project

```bash
pnpm install
pnpm run dev
```

App runs at → http://localhost:3000

---

## Project Structure

```
└── 📁ridino
    └── 📁public/
    └── 📁src
        └── 📁app                           # App directory (routes, pages)
            ├── layout.tsx
            ├── not-found.tsx
            ├── page.tsx
            ├── ...
        └── 📁assets/                       # CSS (styles, fonts, ...)
        └── 📁components                    # UI & common components
            └── 📁common/
            └── 📁features/
            └── 📁icons/
            └── 📁layout/
            └── 📁providers/
            └── 📁shadcnUi/
        └── 📁config/                       # App config (site.ts)
        └── 📁constants/
        └── 📁hooks/
        └── 📁lib/                          # Utilities (supabase setup, utils.ts, ...)
            ├── 0001_create_schema.sql      # Database table schemas
        └── 📁repositories/                 # Database queries
        └── 📁schemas/                      # Forms schema
        └── 📁services/                     # Backend Logic (auth, cars, profile)
        └── 📁types/                        # Next.js middleware
        ├── middleware.ts
    ├── .env.example
    ├── .env.local
    ├── .prettierrc.json
    ├── components.json                     # UI components config
    ├── eslint.config.mjs
    ├── next.config.ts                      # Next.js config
    ├── package.json                        # Project manifest
    ├── postcss.config.mjs                  # PostCSS config
    ├── README.md
    └── tsconfig.json                       # TypeScript config
```

## Screenshots

## License

MIT © [Amir Rahimnezhad](https://github.com/AmirRhDev)
