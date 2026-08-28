"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "@/lib/auth-client";


export default function LoginPage() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);



  // Email + Password Login
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    setError("");

    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    if (!password) {
      setError("Please enter your password.");
      return;
    }

    try {
      setIsLoading(true);

      const { error } = await signIn.email({
        email,
        password,
      });

      if (error) {
        setError("Invalid email or password.");
        return;
      }

      window.location.href = "/";
    } catch (error) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Google Login
  const handleGoogleLogin = async () => {
    setError("");

    try {
      setIsLoading(true);

      await signIn.social({
        provider: "google",
        callbackURL: `${window.location.origin}/`,
      });
    } catch (error) {
      setError("Unable to continue with Google. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-orange-50/40 px-4 py-8 sm:px-6">
      <div className="mx-auto grid max-w-5xl overflow-hidden rounded-3xl bg-white shadow-xl lg:grid-cols-2">
        
        {/* Left - Food Image */}
        <div className="relative hidden min-h-[520px] lg:block">
          <img
            src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1000&q=80"
            alt="Fresh healthy food"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/35" />

          {/* Content */}
          <div className="relative flex h-full flex-col justify-between p-8 text-white">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight"
            >
              Recipe<span className="text-orange-400">Hub</span>
            </Link>

            <div className="max-w-sm">
              <div className="mb-4 inline-flex rounded-full bg-white/15 px-3 py-1.5 text-xs font-medium backdrop-blur-md">
                🍳 Cook • Share • Discover
              </div>

              <h2 className="text-3xl font-bold leading-tight xl:text-4xl">
                Good food brings people together.
              </h2>

              <p className="mt-4 text-sm leading-6 text-white/85">
                Discover inspiring recipes, share your favorite dishes,
                and connect with food lovers from around the world.
              </p>
            </div>

            <p className="text-xs text-white/70">
              Your kitchen. Your recipes. Your community.
            </p>
          </div>
        </div>

        {/* Right - Login */}
        <div className="flex items-center px-6 py-10 sm:px-10 lg:px-12">
          <div className="w-full max-w-md">
            
            {/* Mobile Logo */}
            <div className="mb-7 lg:hidden">
              <Link
                href="/"
                className="text-2xl font-bold tracking-tight text-gray-900"
              >
                Recipe<span className="text-orange-500">Hub</span>
              </Link>
            </div>

            {/* Header */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-orange-500">
                Welcome Back
              </span>

              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
                Sign in to RecipeHub
              </h1>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Continue discovering delicious recipes and sharing your
                culinary creations.
              </p>
            </div>

            {/* Login Form */}
            <div className="mt-7">
              <form
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                {/* Error */}
                {error && (
                  <div
                    role="alert"
                    className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                  >
                    {error}
                  </div>
                )}

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-semibold text-gray-800"
                  >
                    Email address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    disabled={isLoading}
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-500/10 disabled:cursor-not-allowed disabled:opacity-60"
                  />
                </div>

                {/* Password */}
                <div>
                  <div className="mb-1.5 flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="text-sm font-semibold text-gray-800"
                    >
                      Password
                    </label>

                    <button
                      type="button"
                      className="text-xs font-medium text-orange-500 hover:text-orange-600"
                    >
                      Forgot password?
                    </button>
                  </div>

                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    disabled={isLoading}
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-500/10 disabled:cursor-not-allowed disabled:opacity-60"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full rounded-xl bg-orange-500 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isLoading ? "Signing in..." : "Sign In"}
                </button>
              </form>

              {/* Divider */}
              <div className="my-5 flex items-center gap-4">
                <div className="h-px flex-1 bg-gray-200" />

                <span className="text-xs font-medium text-gray-400">
                  OR
                </span>

                <div className="h-px flex-1 bg-gray-200" />
              </div>

              {/* Google */}
              <button
                type="button"
                onClick={handleGoogleLogin}
                disabled={isLoading}
                className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-800 transition-all duration-200 hover:-translate-y-0.5 hover:border-gray-300 hover:bg-gray-50 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-200 text-xs font-bold">
                  G
                </span>

                {isLoading
                  ? "Please wait..."
                  : "Continue with Google"}
              </button>

              {/* Register */}
              <p className="mt-5 text-center text-sm text-gray-500">
                Don't have an account?{" "}
                <Link
                  href="/auth/register"
                  className="font-semibold text-orange-500 transition-colors hover:text-orange-600"
                >
                  Create an account
                </Link>
              </p>
            </div>

            {/* Bottom note */}
            <p className="mt-6 text-center text-xs leading-5 text-gray-400">
              By continuing, you agree to RecipeHub's terms and privacy
              policy.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}