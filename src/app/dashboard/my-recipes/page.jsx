"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { apiFetch } from "@/lib/api";
import RecipeCard from "@/components/RecipeCard";

export default function MyRecipesPage() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = () => {
    apiFetch("/api/recipes/mine/list")
      .then((data) => setRecipes(data.recipes))
      .catch(() => setRecipes([]))
      .finally(() => setLoading(false));
  };

  useEffect(() => { load(); }, []);

  const handleDelete = async (id) => {
    if (!confirm("Delete this recipe?")) return;
    try {
      await apiFetch(`/api/recipes/${id}`, { method: "DELETE" });
      toast.success("Recipe deleted");
      setRecipes((prev) => prev.filter((r) => r._id !== id));
    } catch (err) {
      toast.error(err.message || "Failed to delete");
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-black">My Recipes</h1>
        <Link href="/dashboard/add-recipe" className="rounded-lg bg-black px-4 py-2.5 text-sm font-semibold text-white hover:bg-gray-900">
          + Add Recipe
        </Link>
      </div>

      {loading ? (
        <p className="mt-10 text-center text-gray-500">Loading...</p>
      ) : recipes.length === 0 ? (
        <p className="mt-10 text-center text-gray-500">You haven't added any recipes yet.</p>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recipes.map((r) => (
            <div key={r._id} className="relative">
              <RecipeCard recipe={r} />
              <button
                onClick={() => handleDelete(r._id)}
                className="absolute right-3 top-3 rounded-lg bg-red-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}