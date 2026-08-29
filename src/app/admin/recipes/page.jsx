"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { apiFetch } from "@/lib/api";
import ConfirmModal from "@/components/ConfirmModal";

export default function ManageRecipesPage() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [deleting, setDeleting] = useState(false);

  const load = () => {
    apiFetch("/api/recipes/admin/all").then((data) => setRecipes(data.recipes)).catch(() => setRecipes([])).finally(() => setLoading(false));
  };

  useEffect(() => { load(); }, []);

  const toggleFeature = async (id) => {
    try {
      await apiFetch(`/api/recipes/admin/${id}/feature`, { method: "PATCH" });
      toast.success("Updated");
      load();
    } catch (err) {
      toast.error(err.message || "Failed to update");
    }
  };

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

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold text-black">Manage Recipes</h1>
            <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="bg-orange-50 text-gray-700">
            <tr>
              <th className="px-5 py-3.5 font-semibold">Name</th>
              <th className="px-5 py-3.5 font-semibold">Author</th>
              <th className="px-5 py-3.5 font-semibold">Category</th>
              <th className="px-5 py-3.5 font-semibold">Featured</th>
              <th className="px-5 py-3.5 font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {recipes.map((r) => (
              <tr key={r._id} className="border-t border-gray-100 hover:bg-gray-50">
                <td className="px-5 py-3.5">{r.recipeName}</td>
                <td className="px-5 py-3.5 text-gray-500">{r.authorName}</td>
                <td className="px-5 py-3.5">
                  <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">{r.category}</span>
                </td>
                <td className="px-5 py-3.5">
                  <button onClick={() => toggleFeature(r._id)}
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${r.isFeatured ? "bg-orange-500 text-white" : "bg-gray-100 text-gray-600 hover:bg-orange-100"}`}>
                    {r.isFeatured ? "★ Featured" : "Feature"}
                  </button>
                </td>
                <td className="px-5 py-3.5">
                  <button onClick={() => setDeleteTarget(r._id)} className="rounded-lg border border-red-200 px-3 py-1.5 text-xs font-semibold text-red-600 hover:bg-red-50">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

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