import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function GET() {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session) {
      return Response.json({
        authenticated: false,
        message: "No active session",
      });
    }

    return Response.json({
      authenticated: true,
      user: session.user,
    });
  } catch (error) {
    console.error("Session check failed:", error);

    return Response.json(
      {
        authenticated: false,
        message: "Failed to check session",
      },
      { status: 500 }
    );
  }
}