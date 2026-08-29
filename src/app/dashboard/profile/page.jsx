"use client";

import { useState } from "react";
import { toast } from "sonner";
import { useSession } from "@/lib/auth-client";
import { apiFetch } from "@/lib/api";

export default function ProfilePage() {
  const { data: session } = useSession();
  const [name, setName] = useState(session?.user?.name || "");
  const [image, setImage] = useState(session?.user?.image || "");
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await apiFetch("/api/users/me", { method: "PATCH", body: JSON.stringify({ name, image }) });
      toast.success("Profile updated");
    } catch (err) {
      toast.error(err.message || "Failed to update profile");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="mx-auto max-w-lg">
      <h1 className="text-3xl font-bold text-black">Profile</h1>

      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
        <div>
          <label className="mb-2 block text-sm font-medium text-black">Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-black focus:outline-none" />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-black">Image URL</label>
          <input value={image} onChange={(e) => setImage(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-black focus:outline-none" />
        </div>

        <button type="submit" disabled={saving}
          className="rounded-lg bg-black px-4 py-3 text-sm font-semibold text-white hover:bg-gray-900 disabled:opacity-50">
          {saving ? "Saving..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
}
