# Tier-Based Event Showcase

A full-stack web application to display events to users based on their subscription tier (Free, Silver, Gold, Platinum).

## 🌐 Tech Stack
- **Frontend**: Next.js 14 with App Router
- **Authentication**: Clerk.dev
- **Database**: Supabase (PostgreSQL)
- **Styling**: Tailwind CSS

## 🚀 Features
- User login/signup using Clerk
- Tier-based event filtering
- Responsive event cards with tier badges
- Supabase integration with events table
- Protected event page with client-side authentication

## 🛠️ Setup Instructions
```bash
npm install
cp .env.example .env.local # then fill in your keys
npm run dev
```

## 📦 Environment Variables
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_FRONTEND_API=
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

## 📚 Folder Structure
- `app/` – Next.js App Router pages
- `components/` – UI components
- `lib/` – Utility files for auth and supabase
- `public/` – Placeholder image
- `styles/` – Global Tailwind styles

## 🧪 Seed Demo Users (in Clerk)
Create users manually and set metadata in Clerk dashboard:
```json
{
  "tier": "gold"
}
```

## 🖥️ Deploy
Deploy the app easily on [Vercel](https://vercel.com/).