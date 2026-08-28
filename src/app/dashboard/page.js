"use client";

import { useEffect, useState } from "react";
import { apiFetch } from "@/lib/api";

export default function DashboardOverviewPage() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    apiFetch("/api/users/me/stats").then((data) => setStats(data.stats)).catch(() => setStats(null));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold text-black">Dashboard Overview</h1>

      {stats?.isPremium && (
        <span className="mt-3 inline-block rounded-full bg-black px-4 py-1.5 text-xs font-semibold text-white">
          ⭐ Premium Member
        </span>
      )}

      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        <div className="rounded-2xl border border-gray-200 p-6">
          <p className="text-sm text-gray-500">Total Recipes</p>
          <p className="mt-2 text-3xl font-bold text-black">{stats?.totalRecipes ?? "-"}</p>
        </div>
        <div className="rounded-2xl border border-gray-200 p-6">
          <p className="text-sm text-gray-500">Total Favorites</p>
          <p className="mt-2 text-3xl font-bold text-black">{stats?.totalFavorites ?? "-"}</p>
        </div>
        <div className="rounded-2xl border border-gray-200 p-6">
          <p className="text-sm text-gray-500">Likes Received</p>
          <p className="mt-2 text-3xl font-bold text-black">{stats?.totalLikesReceived ?? "-"}</p>
        </div>
      </div>
    </div>
  );
}