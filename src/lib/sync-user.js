export const syncUser = async () => {
  try {
    const response = await fetch("/api/users/sync", {
      method: "POST",
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