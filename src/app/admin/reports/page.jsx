"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { apiFetch } from "@/lib/api";

export default function ReportsPage() {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = () => {
    apiFetch("/api/recipes/admin/reports").then((data) => setReports(data.reports)).catch(() => setReports([])).finally(() => setLoading(false));
  };

  useEffect(() => { load(); }, []);

  const dismiss = async (id) => {
    await apiFetch(`/api/recipes/admin/reports/${id}/dismiss`, { method: "PATCH" });
    toast.success("Report dismissed");
    setReports((prev) => prev.filter((r) => r._id !== id));
  };

  const removeRecipe = async (id) => {
    if (!confirm("Remove the reported recipe?")) return;
    await apiFetch(`/api/recipes/admin/reports/${id}/remove-recipe`, { method: "PATCH" });
    toast.success("Recipe removed");
    setReports((prev) => prev.filter((r) => r._id !== id));
  };

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold text-black">Reports</h1>
      {reports.length === 0 ? (
        <p className="mt-10 text-center text-gray-500">No pending reports.</p>
      ) : (
        <div className="mt-8 flex flex-col gap-4">
          {reports.map((r) => (
            <div key={r._id} className="flex items-center justify-between rounded-2xl border border-gray-200 p-5">
              <div>
                <p className="text-sm font-semibold text-black">{r.reason}</p>
                <p className="mt-1 text-xs text-gray-500">Reported by {r.reporterEmail}</p>
              </div>
              <div className="flex gap-3">
                <button onClick={() => dismiss(r._id)} className="rounded-lg border border-gray-300 px-3 py-1.5 text-xs font-semibold hover:bg-gray-50">
                  Dismiss
                </button>
                <button onClick={() => removeRecipe(r._id)} className="rounded-lg border border-red-200 px-3 py-1.5 text-xs font-semibold text-red-600 hover:bg-red-50">
                  Remove Recipe
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}