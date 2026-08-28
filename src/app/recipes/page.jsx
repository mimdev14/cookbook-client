"use client";

import { useEffect, useState } from "react";
import RecipeCard from "@/components/RecipeCard";
import { apiFetch } from "@/lib/api";
import { CATEGORIES } from "@/lib/constants";

export default function BrowseRecipesPage() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  const toggleCategory = (c) => {
    setPage(1);
    setCategories((prev) => (prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]));
  };

  useEffect(() => {
    const params = new URLSearchParams();
    if (search) params.set("search", search);
    if (categories.length) params.set("category", categories.join(","));
    params.set("page", page);
    params.set("limit", 9);

    setLoading(true);
    apiFetch(`/api/recipes?${params}`)
      .then((data) => {
        setRecipes(data.recipes);
        setTotalPages(data.totalPages || 1);
      })
      .catch(() => setRecipes([]))
      .finally(() => setLoading(false));
  }, [search, categories, page]);

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-3xl font-bold text-black sm:text-4xl">Browse Recipes</h1>

      <input
        type="text"
        placeholder="Search recipes..."
        value={search}
        onChange={(e) => { setPage(1); setSearch(e.target.value); }}
        className="mt-6 w-full max-w-md rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-black focus:outline-none"
      />

      <div className="mt-4 flex flex-wrap gap-3">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => toggleCategory(c)}
            className={`rounded-lg border px-3 py-2 text-sm ${
              categories.includes(c) ? "border-black bg-black text-white" : "border-gray-300 text-black"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-10">
        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : recipes.length === 0 ? (
          <p className="text-center text-gray-500">No recipes found</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recipes.map((r) => <RecipeCard key={r._id} recipe={r} />)}
          </div>
        )}
      </div>

      {totalPages > 1 && (
        <div className="mt-10 flex items-center justify-center gap-2">
          <button disabled={page <= 1} onClick={() => setPage((p) => p - 1)}
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm disabled:opacity-40">
            Prev
          </button>
          <span className="text-sm text-gray-600">Page {page} of {totalPages}</span>
          <button disabled={page >= totalPages} onClick={() => setPage((p) => p + 1)}
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm disabled:opacity-40">
            Next
          </button>
        </div>
      )}
    </div>
  );
}