"use client";

import { useEffect, useState } from "react";
import RecipeCard from "@/components/RecipeCard";
import { apiFetch } from "@/lib/api";

export default function PopularPage() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiFetch("/api/recipes?popular=true&limit=12")
      .then((data) => setRecipes(data.recipes))
      .catch(() => setRecipes([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <h1 className="text-3xl font-bold text-black sm:text-4xl">Popular Recipes</h1>
      {loading ? (
        <p className="mt-10 text-center text-gray-500">Loading...</p>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recipes.map((r) => <RecipeCard key={r._id} recipe={r} />)}
        </div>
      )}
    </div>
  );
}