export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-20">
      <h1 className="text-3xl font-bold text-black sm:text-4xl">Contact Us</h1>
      <p className="mt-4 text-base leading-7 text-gray-600">
        Have a question, suggestion, or found an issue? We'd love to hear from you.
      </p>

      <div className="mt-8 space-y-3 text-sm text-gray-700">
        <p><strong>Email:</strong> hello@cookbook.com</p>
        <p><strong>Phone:</strong> +880 1234-567890</p>
        <p><strong>Address:</strong> Dhaka, Bangladesh</p>
      </div>
    </div>
  );
}