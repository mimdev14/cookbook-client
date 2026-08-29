"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useSession } from "@/lib/auth-client";
import { apiFetch } from "@/lib/api";

const LINKS = [
  { href: "/admin", label: "Overview", icon: "📊" },
  { href: "/admin/users", label: "Manage Users", icon: "👥" },
  { href: "/admin/recipes", label: "Manage Recipes", icon: "🍳" },
  { href: "/admin/reports", label: "Reports", icon: "🚩" },
];

export default function AdminLayout({ children }) {
  const { data: session, isPending } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const [checked, setChecked] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (isPending) return;
    if (!session?.user) {
      router.push("/auth/login");
      return;
    }
    apiFetch("/api/users/admin/stats")
      .then(() => setIsAdmin(true))
      .catch(() => setIsAdmin(false))
      .finally(() => setChecked(true));
  }, [isPending, session]);

  if (isPending || !checked) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-orange-100 border-t-orange-500" />
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="mx-auto max-w-xl px-6 py-24 text-center">
        <p className="text-lg font-medium text-gray-600">Access denied — admin only.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto flex max-w-7xl gap-8 px-6 py-10">
        <aside className="w-64 shrink-0">
          <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
            <p className="mb-3 px-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
              Admin Panel
            </p>
            <nav className="flex flex-col gap-1">
              {LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                    pathname === l.href
                      ? "bg-orange-500 text-white shadow-sm"
                      : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                  }`}
                >
                  <span>{l.icon}</span>
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        </aside>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}