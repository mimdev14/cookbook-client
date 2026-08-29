# 🍳 RecipeHub — Recipe Sharing Platform

RecipeHub is a full-stack recipe-sharing platform where food enthusiasts can discover, share, save, purchase, and manage recipes.

The platform supports regular users, premium members, and administrators with role-based access and dedicated dashboards.

---

## 🌐 Live Project

**Live Site:** [YOUR_LIVE_CLIENT_URL](https://recipehub-client-gilt.vercel.app)

**Server API:** [YOUR_LIVE_SERVER_URL](https://recipehub-server-eight.vercel.app)

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
recipehub-client/
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
