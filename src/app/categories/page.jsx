import Link from "next/link";
import { CATEGORIES } from "@/lib/constants";

export default function CategoriesPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="text-3xl font-bold text-black sm:text-4xl">Browse by Category</h1>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CATEGORIES.map((c) => (
          <Link
            key={c}
            href={`/recipes?category=${encodeURIComponent(c)}`}
            className="rounded-2xl border border-gray-200 p-6 text-center font-semibold text-black transition-all hover:-translate-y-1 hover:shadow-md"
          >
            {c}
          </Link>
        ))}
      </div>
    </div>
  );
}