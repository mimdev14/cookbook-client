
import Link from "next/link";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/mimdev14",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/fatemaaktermim/",
  },
  {
  name: "Email",
  href: "https://mail.google.com/mail/?view=cm&fs=1&to=fatemaaktermim1031@gmail.com",
},
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight text-white"
            >
              Cook<span className="text-orange-500">Book</span>
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

          {/* Developer Introduction */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Meet the Developer
            </h3>

            <p className="mt-4 text-lg font-semibold text-white">
              Fatema Akter Mim
            </p>

            <p className="mt-2 text-sm leading-6 text-gray-400">
              Full-Stack Web Developer building modern, user-friendly web
              applications with a focus on thoughtful design and practical
              solutions.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={
                    social.name === "Email" ? undefined : "_blank"
                  }
                  rel={
                    social.name === "Email"
                      ? undefined
                      : "noopener noreferrer"
                  }
                  aria-label={social.name}
                  className="rounded-full border border-gray-700 px-4 py-2 text-sm transition-all duration-300 hover:border-orange-500 hover:bg-orange-500 hover:text-white"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-gray-800 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} CookBook. All rights reserved.
          </p>

          <p className="text-sm text-gray-500">
            Designed & developed by{" "}
            <a
              href="https://github.com/mimdev14"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gray-300 transition-colors hover:text-orange-500"
            >
              Mim
            </a>
            <span className="mx-1 text-orange-500">♥</span>
            with care.
          </p>
        </div>
      </div>
    </footer>
  );
}