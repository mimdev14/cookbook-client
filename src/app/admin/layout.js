"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useSession } from "@/lib/auth-client";
import { apiFetch } from "@/lib/api";


const LINKS = [
  { href: "/admin", label: "Overview" },
  { href: "/admin/users", label: "Manage Users" },
  { href: "/admin/recipes", label: "Manage Recipes" },
  { href: "/admin/reports", label: "Reports" },
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
    apiFetch("/api/users/me/stats")
      .then(() => {
        // stats endpoint works for any logged-in user; separately confirm admin via a protected admin call
        apiFetch("/api/users/admin/stats")
          .then(() => setIsAdmin(true))
          .catch(() => setIsAdmin(false))
          .finally(() => setChecked(true));
      })
      .catch(() => setChecked(true));
  }, [isPending, session]);

  if (isPending || !checked) return <p className="py-24 text-center text-gray-500">Loading...</p>;
  if (!isAdmin) return <p className="py-24 text-center text-gray-500">Access denied — admin only.</p>;

  return (
    <div className="mx-auto flex max-w-7xl gap-8 px-6 py-10">
      <aside className="w-56 shrink-0">
        <nav className="flex flex-col gap-1">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`rounded-lg px-4 py-2.5 text-sm font-medium ${
                pathname === l.href ? "bg-black text-white" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="flex-1">{children}</main>
    </div>
  );
}