"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { apiFetch } from "@/lib/api";
import RecipeCard from "@/components/RecipeCard";
import ConfirmModal from "@/components/ConfirmModal";

export default function MyFavoritesPage() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [removeTarget, setRemoveTarget] = useState(null);
  const [removing, setRemoving] = useState(false);

  const load = () => {
    apiFetch("/api/recipes/favorites/mine")
      .then((data) => setRecipes(data.recipes))
      .catch(() => setRecipes([]))
      .finally(() => setLoading(false));
  };

  useEffect(() => { load(); }, []);

  const handleRemove = async () => {
    setRemoving(true);
    try {
      await apiFetch(`/api/recipes/${removeTarget}/favorite`, { method: "POST" });
      toast.success("Removed from favorites");
      setRecipes((prev) => prev.filter((r) => r._id !== removeTarget));
      setRemoveTarget(null);
    } catch (err) {
      toast.error(err.message || "Failed to remove");
    } finally {
      setRemoving(false);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-black">My Favorites</h1>

      {loading ? (
        <p className="mt-10 text-center text-gray-500">Loading...</p>
      ) : recipes.length === 0 ? (
        <p className="mt-10 text-center text-gray-500">No favorites yet.</p>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recipes.map((r) => (
            <div key={r._id} className="relative">
              <RecipeCard recipe={r} />
              <button
                onClick={() => setRemoveTarget(r._id)}
                className="absolute right-3 top-3 rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-red-600 shadow hover:bg-red-50"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      <ConfirmModal
        open={!!removeTarget}
        title="Remove from favorites?"
        onCancel={() => setRemoveTarget(null)}
        onConfirm={handleRemove}
        loading={removing}
      />
    </div>
  );
}