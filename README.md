# RecipeHub — Recipe Sharing Platform

Live site: https://recipehub-client-gilt.vercel.app

Server repository: https://github.com/mimdev14/recipehub_server.git

RecipeHub is a full-stack platform where food enthusiasts can create, share, discover, and manage recipes — with community features like likes, favorites, and reporting.

- 🔐 Secure authentication with Better Auth (email/password + Google OAuth), backed by a custom JWT stored in an HTTP-only cookie for API access
- 🍳 Full recipe management — create, edit, and delete your own recipes, with a 2-recipe limit for free accounts
- 🔎 Browse and filter recipes by category with server-side pagination
- ❤️ Like, favorite, and report recipes, with a personal dashboard tracking your stats
- 🛡️ Admin dashboard for managing users, moderating recipes, and reviewing reports
- 🌟 Dynamic home page with Featured and Popular recipe sections and Framer Motion animation
- 📱 Fully responsive design across mobile, tablet, and desktop

## Tech Stack
- **Frontend:** Next.js, React, Tailwind CSS, Framer Motion
- **Auth:** Better Auth (email/password + Google OAuth)
- **Backend:** Node.js, Express, JWT (see [server repo](https://github.com/mimdev14/recipehub_server.git))
- **Database:** MongoDB

## Getting Started
```bash
npm install
npm run dev
```
Create a `.env` file based on `.env.example` before running.
