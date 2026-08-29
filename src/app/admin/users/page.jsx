"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { apiFetch } from "@/lib/api";

export default function ManageUsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = () => {
    apiFetch("/api/users").then((data) => setUsers(data.users)).catch(() => setUsers([])).finally(() => setLoading(false));
  };

  useEffect(() => { load(); }, []);

  const toggleBlock = async (user) => {
    try {
      await apiFetch(`/api/users/${user._id}/${user.isBlocked ? "unblock" : "block"}`, { method: "PATCH" });
      toast.success(user.isBlocked ? "User unblocked" : "User blocked");
      setUsers((prev) => prev.map((u) => (u._id === user._id ? { ...u, isBlocked: !u.isBlocked } : u)));
    } catch (err) {
      toast.error(err.message || "Failed to update user");
    }
  };

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold text-black">Manage Users</h1>
            <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="bg-orange-50 text-gray-700">
            <tr>
              <th className="px-5 py-3.5 font-semibold">Name</th>
              <th className="px-5 py-3.5 font-semibold">Email</th>
              <th className="px-5 py-3.5 font-semibold">Role</th>
              <th className="px-5 py-3.5 font-semibold">Status</th>
              <th className="px-5 py-3.5 font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u._id} className="border-t border-gray-100 hover:bg-gray-50">
                <td className="px-5 py-3.5">{u.name}</td>
                <td className="px-5 py-3.5 text-gray-500">{u.email}</td>
                <td className="px-5 py-3.5">
                  <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium capitalize text-gray-600">{u.role}</span>
                </td>
                <td className="px-5 py-3.5">
                  <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${u.isBlocked ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`}>
                    {u.isBlocked ? "Blocked" : "Active"}
                  </span>
                </td>
                <td className="px-5 py-3.5">
                  {u.role !== "admin" && (
                    <button onClick={() => toggleBlock(u)} className="rounded-lg border border-gray-300 px-3 py-1.5 text-xs font-semibold hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600">
                      {u.isBlocked ? "Unblock" : "Block"}
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}