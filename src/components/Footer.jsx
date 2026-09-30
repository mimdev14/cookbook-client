import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight text-white"
            >
              Recipe<span className="text-orange-500">Hub</span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-gray-400">
              Discover delicious recipes, share your favorite dishes, and
              inspire others to cook something amazing.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Explore
            </h3>

            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/recipes"
                  className="text-sm transition-colors hover:text-orange-500"
                >
                  Browse Recipes
                </Link>
              </li>

              <li>
                <Link
                  href="/categories"
                  className="text-sm transition-colors hover:text-orange-500"
                >
                  Categories
                </Link>
              </li>

              <li>
                <Link
                  href="/popular"
                  className="text-sm transition-colors hover:text-orange-500"
                >
                  Popular Recipes
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>

            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm transition-colors hover:text-orange-500"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-sm transition-colors hover:text-orange-500"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy"
                  className="text-sm transition-colors hover:text-orange-500"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Follow Us
            </h3>

            <div className="mt-4 flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 text-sm transition-all hover:border-orange-500 hover:bg-orange-500 hover:text-white"
              >
                f
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 text-sm transition-all hover:border-orange-500 hover:bg-orange-500 hover:text-white"
              >
                ◎
              </a>

              <a
                href="#"
                aria-label="X"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 text-sm transition-all hover:border-orange-500 hover:bg-orange-500 hover:text-white"
              >
                𝕏
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 text-sm transition-all hover:border-orange-500 hover:bg-orange-500 hover:text-white"
              >
                ▶
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-800 pt-6">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} CookBook. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}