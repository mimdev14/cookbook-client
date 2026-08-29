"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { apiFetch } from "@/lib/api";

const LINKS = [
  { href: "/dashboard", label: "Overview" },
  { href: "/dashboard/my-recipes", label: "My Recipes" },
  { href: "/dashboard/add-recipe", label: "Add Recipe" },
  { href: "/dashboard/my-favorites", label: "My Favorites" },
  { href: "/dashboard/profile", label: "Profile" },
];

const ADMIN_LINKS = [
  { href: "/admin", label: "Admin Overview" },
  { href: "/admin/users", label: "Manage Users" },
  { href: "/admin/recipes", label: "Manage Recipes" },
  { href: "/admin/reports", label: "Reports" },
];

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    apiFetch("/api/users/me").then((data) => setIsAdmin(data.user.role === "admin")).catch(() => setIsAdmin(false));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto flex max-w-7xl gap-8 px-6 py-10">
        <aside className="w-56 shrink-0">
          <nav className="flex flex-col gap-1">
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href}
                className={`rounded-lg px-4 py-2.5 text-sm font-medium ${pathname === l.href ? "bg-black text-white" : "text-gray-700 hover:bg-gray-100"}`}>
                {l.label}
              </Link>
            ))}

            {isAdmin && (
              <>
                <p className="mt-6 px-4 text-xs font-semibold uppercase tracking-wide text-gray-400">Admin</p>
                {ADMIN_LINKS.map((l) => (
                  <Link key={l.href} href={l.href}
                    className={`rounded-lg px-4 py-2.5 text-sm font-medium ${pathname === l.href ? "bg-black text-white" : "text-gray-700 hover:bg-gray-100"}`}>
                    {l.label}
                  </Link>
                ))}
              </>
            )}
          </nav>
        </aside>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}