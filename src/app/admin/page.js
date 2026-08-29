"use client";

import { useEffect, useState } from "react";
import { apiFetch } from "@/lib/api";

export default function AdminOverviewPage() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    apiFetch("/api/users/admin/stats").then((data) => setStats(data.stats)).catch(() => setStats(null));
  }, []);

  const cards = [
    { label: "Total Users", value: stats?.totalUsers, icon: "👥" },
    { label: "Total Recipes", value: stats?.totalRecipes, icon: "🍳" },
    { label: "Premium Members", value: stats?.totalPremium, icon: "⭐" },
    { label: "Pending Reports", value: stats?.totalReports, icon: "🚩" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-black">Admin Overview</h1>
      <p className="mt-2 text-sm text-gray-500">A snapshot of what's happening on RecipeHub.</p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c) => (
          <div key={c.label} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-lg">
              {c.icon}
            </div>
            <p className="mt-4 text-sm text-gray-500">{c.label}</p>
            <p className="mt-1 text-3xl font-bold text-black">{c.value ?? "-"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}