import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-xl flex-col items-center justify-center px-6 text-center">
      <div className="text-8xl">🍽️</div>
      <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">404</p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-black sm:text-4xl">Page not found</h1>
      <p className="mt-4 text-base text-gray-600">
        The recipe or page you're looking for doesn't exist or may have been moved.
      </p>
      <Link href="/" className="mt-8 rounded-lg bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-gray-900">
        Back to Home
      </Link>
    </div>
  );
}