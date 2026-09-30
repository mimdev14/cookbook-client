"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { toast } from "sonner";
import { useSession } from "@/lib/auth-client";
import { apiFetch } from "@/lib/api";
import ReportModal from "@/components/ReportModal";

export default function RecipeDetailsPage() {
  const { id } = useParams();
  const { data: session } = useSession();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [liking, setLiking] = useState(false);
  const [favorited, setFavorited] = useState(false);
  const [showReport, setShowReport] = useState(false);

  useEffect(() => {
    apiFetch(`/api/recipes/${id}`)
      .then((data) => setRecipe(data.recipe))
      .catch(() => setRecipe(null))
      .finally(() => setLoading(false));
  }, [id]);

  useEffect(() => {
    if (recipe) document.title = `CookBook – ${recipe.recipeName}`;
  }, [recipe]);

  const handleLike = async () => {
    if (!session?.user) return toast.error("Login to like this recipe");
    setLiking(true);
    try {
      const data = await apiFetch(`/api/recipes/${id}/like`, { method: "POST" });
      setRecipe((r) => ({ ...r, likesCount: data.likesCount }));
    } catch (err) {
      toast.error(err.message || "Failed to like");
    } finally {
      setLiking(false);
    }
  };

  const handleFavorite = async () => {
    if (!session?.user) return toast.error("Login to save favorites");
    try {
      const data = await apiFetch(`/api/recipes/${id}/favorite`, { method: "POST" });
      setFavorited(data.favorited);
      toast.success(data.favorited ? "Added to favorites" : "Removed from favorites");
    } catch (err) {
      toast.error(err.message || "Failed to update favorite");
    }
  };

  if (loading) return <p className="py-24 text-center text-gray-500">Loading...</p>;
  if (!recipe) return <p className="py-24 text-center text-gray-500">Recipe not found.</p>;

  return (
    <div className="mx-auto max-w-4xl px-6 py-14">
      <img src={recipe.recipeImage} alt={recipe.recipeName} className="h-80 w-full rounded-2xl object-cover" />

      <div className="mt-8 flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-black">{recipe.recipeName}</h1>
          <p className="mt-2 text-sm text-gray-500">
            {recipe.category} · {recipe.cuisineType} · {recipe.difficultyLevel} · {recipe.preparationTime} min
          </p>
          <p className="mt-1 text-sm text-gray-500">By {recipe.authorName}</p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button onClick={handleLike} disabled={liking}
          className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-semibold hover:bg-gray-50">
          ❤ Like ({recipe.likesCount || 0})
        </button>
        <button onClick={handleFavorite}
          className={`rounded-lg border px-4 py-2.5 text-sm font-semibold ${favorited ? "border-black bg-black text-white" : "border-gray-300 hover:bg-gray-50"}`}>
          {favorited ? "★ Favorited" : "☆ Add to Favorites"}
        </button>
        <button onClick={() => setShowReport(true)}
          className="rounded-lg border border-red-200 px-4 py-2.5 text-sm font-semibold text-red-600 hover:bg-red-50">
          Report
        </button>
      </div>

      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        <div>
          <h2 className="text-lg font-semibold text-black">Ingredients</h2>
          <p className="mt-3 whitespace-pre-line text-sm leading-7 text-gray-600">{recipe.ingredients}</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-black">Instructions</h2>
          <p className="mt-3 whitespace-pre-line text-sm leading-7 text-gray-600">{recipe.instructions}</p>
        </div>
      </div>

      {showReport && <ReportModal recipeId={id} onClose={() => setShowReport(false)} />}
    </div>
  );
}