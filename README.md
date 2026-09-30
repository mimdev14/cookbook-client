<<<<<<< HEAD
# 🍳 CookBook — Recipe Sharing Platform

CookBook is a full-stack recipe-sharing platform where food enthusiasts can discover, share, save, purchase, and manage recipes.
=======
# RecipeHub — Recipe Sharing Platform

Live site: https://recipehub-client-gilt.vercel.app
>>>>>>> 7f1033a9899561e8b6c0f0e176bac4c8b5df6d18

Server repository: https://github.com/mimdev14/recipehub_server.git

RecipeHub is a full-stack platform where food enthusiasts can create, share, discover, and manage recipes — with community features like likes, favorites, and reporting.

- 🔐 Secure authentication with Better Auth (email/password + Google OAuth), backed by a custom JWT stored in an HTTP-only cookie for API access
- 🍳 Full recipe management — create, edit, and delete your own recipes, with a 2-recipe limit for free accounts
- 🔎 Browse and filter recipes by category with server-side pagination
- ❤️ Like, favorite, and report recipes, with a personal dashboard tracking your stats
- 🛡️ Admin dashboard for managing users, moderating recipes, and reviewing reports
- 🌟 Dynamic home page with Featured and Popular recipe sections and Framer Motion animation
- 📱 Fully responsive design across mobile, tablet, and desktop

<<<<<<< HEAD
**Live Site:** [LIVE_CLIENT_URL](https://cookbook-client-gilt.vercel.app)

**Server API:** [LIVE_SERVER_URL](https://cookbook-server-eight.vercel.app)

---

## 📌 Features

### 👤 User Features

- User registration and login
- Google authentication
- Browse all recipes
- Search recipes
- Filter recipes by category
- View recipe details
- Like recipes
- Save recipes to favorites
- Report recipes
- Purchase recipes through Stripe
- View purchased recipes
- Create and manage personal recipes
- Update personal profile
- Premium membership
- Premium profile badge
- Unlimited recipe creation for premium users

### 👑 Admin Features

- Admin dashboard
- View platform statistics
- Manage users
- Block/unblock users
- Manage all recipes
- Edit recipes
- Delete recipes
- Feature recipes
- Review recipe reports
- Remove reported recipes
- Dismiss reports
- View transactions

---

## 🖥️ Pages

### Public Pages

- Home
- Browse Recipes
- Recipe Details
- Login
- Register

### User Dashboard

- Overview
- My Recipes
- Add Recipe
- My Favorites
- Purchased Recipes
- Profile

### Admin Dashboard

- Overview
- Manage Users
- Manage Recipes
- Reports
- Transactions

---

## 🛠️ Technologies Used

### Frontend

- Next.js
- React
- JavaScript
- Tailwind CSS
- Framer Motion
- Better Auth
- Sonner
- Lucide React / React Icons

### Backend

- Node.js
- Express.js
- MongoDB
- Stripe
- Better Auth

### Services

- MongoDB Atlas
- Google OAuth
- Stripe
- ImgBB
- Vercel

---

## 📂 Project Structure

```text
cookbook-client/
│
├── app/
│   ├── page.jsx
│   ├── recipes/
│   ├── auth/
│   ├── dashboard/
│   └── admin/
│
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── RecipeCard.jsx
│   └── ...
│
├── data/
│
├── lib/
│   ├── auth-client.js
│   └── ...
│
├── public/
│
├── .env.local
├── package.json
└── README.md
=======
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
>>>>>>> 7f1033a9899561e8b6c0f0e176bac4c8b5df6d18
