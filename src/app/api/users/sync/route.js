import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function POST() {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session) {
      return Response.json(
        {
          success: false,
          message: "Unauthorized",
        },
        { status: 401 }
      );
    }

    const user = session.user;

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/users/sync`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          authUserId: user.id,
          name: user.name,
          email: user.email,
          image: user.image || "",
        }),
      }
    );

    const data = await response.json();

    return Response.json(data, {
      status: response.status,
    });
  } catch (error) {
    console.error("User sync failed:", error);

    return Response.json(
      {
        success: false,
        message: "Failed to synchronize user",
      },
      { status: 500 }
    );
  }
}