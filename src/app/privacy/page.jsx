export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-bold text-black sm:text-4xl">Privacy Policy</h1>
      <p className="mt-6 text-base leading-7 text-gray-600">
        RecipeHub collects only the information needed to run your account — your name, email,
        and profile image — used solely to operate the platform's core features such as
        authentication, recipe publishing, and favorites.
      </p>
      <p className="mt-4 text-base leading-7 text-gray-600">
        We do not sell your data to third parties. Cookies are used only to keep you securely
        logged in. You may request account deletion at any time by contacting us.
      </p>
    </div>
  );
}