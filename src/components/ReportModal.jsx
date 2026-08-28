"use client";

import { useState } from "react";
import { toast } from "sonner";
import { apiFetch } from "@/lib/api";

const REASONS = ["Spam", "Offensive Content", "Copyright Issue"];

export default function ReportModal({ recipeId, onClose }) {
  const [reason, setReason] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!reason) return toast.error("Select a reason");
    setSubmitting(true);
    try {
      await apiFetch(`/api/recipes/${recipeId}/report`, { method: "POST", body: JSON.stringify({ reason }) });
      toast.success("Report submitted");
      onClose();
    } catch (err) {
      toast.error(err.message || "Failed to report");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-6">
      <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl">
        <h3 className="text-lg font-semibold text-black">Report this recipe</h3>
        <div className="mt-4 flex flex-col gap-2">
          {REASONS.map((r) => (
            <label key={r} className="flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2 text-sm">
              <input type="radio" name="reason" checked={reason === r} onChange={() => setReason(r)} />
              {r}
            </label>
          ))}
        </div>
        <div className="mt-6 flex gap-3">
          <button onClick={onClose} className="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-semibold hover:bg-gray-50">
            Cancel
          </button>
          <button onClick={handleSubmit} disabled={submitting}
            className="flex-1 rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-red-700 disabled:opacity-60">
            {submitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
}