"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { apiFetch } from "@/lib/api";
import RecipeCard from "@/components/RecipeCard";
import ConfirmModal from "@/components/ConfirmModal";

export default function MyRecipesPage() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [deleting, setDeleting] = useState(false);

  const load = () => {
    apiFetch("/api/recipes/mine/list")
      .then((data) => setRecipes(data.recipes))
      .catch(() => setRecipes([]))
      .finally(() => setLoading(false));
  };

  useEffect(() => { load(); }, []);

  const handleDelete = async () => {
    setDeleting(true);
    try {
      await apiFetch(`/api/recipes/${deleteTarget}`, { method: "DELETE" });
      toast.success("Recipe deleted");
      setRecipes((prev) => prev.filter((r) => r._id !== deleteTarget));
      setDeleteTarget(null);
    } catch (err) {
      toast.error(err.message || "Failed to delete");
    } finally {
      setDeleting(false);
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
              <div className="absolute right-3 top-3 flex gap-2">
                <Link
                  href={`/dashboard/my-recipes/${r._id}/edit`}
                  className="rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-gray-900 shadow hover:bg-gray-50"
                >
                  Edit
                </Link>
                <button
                  onClick={() => setDeleteTarget(r._id)}
                  className="rounded-lg bg-red-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <ConfirmModal
        open={!!deleteTarget}
        title="Delete this recipe?"
        message="This action cannot be undone."
        onCancel={() => setDeleteTarget(null)}
        onConfirm={handleDelete}
        loading={deleting}
      />
    </div>
  );
}