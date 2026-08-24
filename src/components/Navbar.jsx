"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { useSession, signOut } from "@/lib/auth-client";

export default function Navbar() {
  const { data: session, isPending } = useSession();

  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [imageError, setImageError] = useState(false);

  const user = session?.user;

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);

      await signOut();

      window.location.href = "/";
    } catch (error) {
      console.error("Logout failed:", error);
      setIsLoggingOut(false);
    }
  };

  const userInitial =
    user?.name?.charAt(0)?.toUpperCase() ||
    user?.email?.charAt(0)?.toUpperCase() ||
    "U";

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-md"
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-gray-900"
        >
          Recipe<span className="text-orange-500">Hub</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-orange-500"
          >
            Home
          </Link>

          <Link
            href="/recipes"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-orange-500"
          >
            Browse Recipes
          </Link>

          <Link
            href="/categories"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-orange-500"
          >
            Categories
          </Link>

          <Link
            href="/about"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-orange-500"
          >
            About
          </Link>
        </div>

        {/* Authentication */}
        <div className="hidden items-center gap-3 md:flex">
          {/* Loading State */}
          {isPending ? (
            <div className="h-9 w-24 animate-pulse rounded-lg bg-gray-100" />
          ) : user ? (
            <>
              {/* Dashboard */}
              <Link
                href="/dashboard"
                className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-orange-500"
              >
                Dashboard
              </Link>

              {/* User Profile */}
              <div className="flex items-center gap-3 border-l border-gray-200 pl-3">
                <div className="flex items-center gap-2">
                  {/* Avatar */}
                  {!imageError && user.image ? (
                    <img
                      src={user.image}
                      alt={user.name || "User profile"}
                      onError={() => setImageError(true)}
                      className="h-9 w-9 rounded-full object-cover ring-2 ring-orange-100"
                    />
                  ) : (
                    <div
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-100 text-sm font-semibold text-orange-600 ring-2 ring-orange-50"
                      title={user.name || user.email || "User"}
                    >
                      {userInitial}
                    </div>
                  )}

                  {/* User Name */}
                  <span className="hidden max-w-28 truncate text-sm font-medium text-gray-800 lg:block">
                    {user.name || "User"}
                  </span>
                </div>

                {/* Logout */}
                <button
                  type="button"
                  onClick={handleLogout}
                  disabled={isLoggingOut}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-gray-500 transition-colors hover:bg-red-50 hover:text-red-500 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isLoggingOut ? "..." : "Logout"}
                </button>
              </div>
            </>
          ) : (
            <>
              {/* Sign In */}
              <Link
                href="/auth/login"
                className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-orange-500"
              >
                Sign In
              </Link>

              {/* Get Started */}
              <Link
                href="/auth/register"
                className="rounded-lg bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-orange-600 hover:shadow-md"
              >
                Get Started
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Open menu"
          className="rounded-lg p-2 text-gray-700 transition-colors hover:bg-gray-100 md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>
    </motion.header>
  );
}