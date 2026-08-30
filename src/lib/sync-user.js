const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const syncUser = async (user) => {
  try {
    const response = await fetch(`${API_URL}/api/users/sync`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        authUserId: user.id,
        name: user.name,
        email: user.email,
        image: user.image || "",
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "User synchronization failed");
    }

    return data;
  } catch (error) {
    console.error("User synchronization error:", error);
    return null;
  }
};