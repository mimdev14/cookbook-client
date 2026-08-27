"use client";

import { useSession } from "@/lib/auth-client";

export default function DashboardPage() {
  const { data: session, isPending } = useSession();

  if (isPending) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-orange-500" />
      </div>
    );
  }

  if (!session?.user) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-sm text-gray-500">
          Please login to access your dashboard.
        </p>
      </div>
    );
  }

  return (
    <section className="py-8">
      <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-medium text-orange-500">
          Welcome back
        </p>

        <h1 className="mt-2 text-3xl font-bold text-gray-900">
          {session.user.name || "User"}
        </h1>

        <p className="mt-2 text-gray-500">
          This is your RecipeHub dashboard.
        </p>
      </div>
    </section>
  );
}