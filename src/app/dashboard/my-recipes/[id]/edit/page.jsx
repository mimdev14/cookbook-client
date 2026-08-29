"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { toast } from "sonner";
import { apiFetch } from "@/lib/api";
import { CATEGORIES, CUISINES, DIFFICULTY_LEVELS } from "@/lib/constants";

export default function EditRecipePage() {
  const { id } = useParams();
  const router = useRouter();
  const [form, setForm] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    apiFetch(`/api/recipes/${id}`)
      .then((data) => setForm(data.recipe))
      .catch(() => toast.error("Failed to load recipe"))
      .finally(() => setLoading(false));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await apiFetch(`/api/recipes/${id}`, { method: "PUT", body: JSON.stringify(form) });
      toast.success("Recipe updated successfully");
      router.push("/dashboard/my-recipes");
    } catch (err) {
      toast.error(err.message || "Failed to update recipe");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (!form) return <p className="text-center text-gray-500">Recipe not found.</p>;

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="text-3xl font-bold text-black">Edit Recipe</h1>

      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
        <input required placeholder="Recipe name" value={form.recipeName}
          onChange={(e) => setForm({ ...form, recipeName: e.target.value })}
          className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-black focus:outline-none" />

        <input required placeholder="Image URL" value={form.recipeImage}
          onChange={(e) => setForm({ ...form, recipeImage: e.target.value })}
          className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-black focus:outline-none" />

        <div className="grid grid-cols-3 gap-4">
          <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}
            className="rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-black focus:outline-none">
            {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          <select value={form.cuisineType} onChange={(e) => setForm({ ...form, cuisineType: e.target.value })}
            className="rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-black focus:outline-none">
            {CUISINES.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          <select value={form.difficultyLevel} onChange={(e) => setForm({ ...form, difficultyLevel: e.target.value })}
            className="rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-black focus:outline-none">
            {DIFFICULTY_LEVELS.map((d) => <option key={d} value={d}>{d}</option>)}
          </select>
        </div>

        <input required type="number" min="1" placeholder="Preparation time (minutes)" value={form.preparationTime}
          onChange={(e) => setForm({ ...form, preparationTime: e.target.value })}
          className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-black focus:outline-none" />

        <textarea required rows={4} placeholder="Ingredients" value={form.ingredients}
          onChange={(e) => setForm({ ...form, ingredients: e.target.value })}
          className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-black focus:outline-none" />

        <textarea required rows={5} placeholder="Instructions" value={form.instructions}
          onChange={(e) => setForm({ ...form, instructions: e.target.value })}
          className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-black focus:outline-none" />

        <button type="submit" disabled={submitting}
          className="rounded-lg bg-black px-4 py-3 text-sm font-semibold text-white hover:bg-gray-900 disabled:opacity-50">
          {submitting ? "Saving..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
}