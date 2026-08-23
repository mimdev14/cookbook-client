"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const recipes = [
  {
    id: 1,
    title: "Creamy Pasta",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    title: "Fresh Salad",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    title: "Avocado Toast",
    image:
      "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    title: "Delicious Burger",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    title: "Healthy Bowl",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
  },
];

export default function Hero() {
  return (
    <section className="overflow-hidden bg-white">
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="inline-flex rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-600">
            Discover. Cook. Share.
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Delicious recipes,
            <span className="block text-orange-500">
              made for everyone.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
            Discover inspiring recipes, save your favorites, and share your
            own creations with a community of food lovers.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/recipes"
              className="rounded-xl bg-orange-500 px-6 py-3 text-center text-sm font-semibold text-white transition-all hover:bg-orange-600 hover:shadow-lg"
            >
              Explore Recipes
            </Link>

            <Link
              href="/register"
              className="rounded-xl border border-gray-300 px-6 py-3 text-center text-sm font-semibold text-gray-700 transition-all hover:border-orange-500 hover:text-orange-500"
            >
              Share Your Recipe
            </Link>
          </div>

          {/* Small stats */}
          <div className="mt-10 flex flex-wrap gap-8">
            <div>
              <p className="text-2xl font-bold text-gray-900">1K+</p>
              <p className="text-sm text-gray-500">Recipes</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-gray-900">500+</p>
              <p className="text-sm text-gray-500">Food Lovers</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-gray-900">50+</p>
              <p className="text-sm text-gray-500">Categories</p>
            </div>
          </div>
        </motion.div>

        {/* Image Slider */}
        <div className="relative mx-auto w-full max-w-xl">
          <div className="relative h-[420px] overflow-hidden rounded-3xl">
            <motion.div
              className="flex h-full gap-4"
              animate={{ x: ["0%", "-100%", "-200%", "-300%", "-400%"] }}
              transition={{
                duration: 20,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {[...recipes, ...recipes].map((recipe, index) => (
                <div
                  key={`${recipe.id}-${index}`}
                  className="relative min-w-full overflow-hidden rounded-3xl"
                >
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6 pt-20">
                    <p className="text-xl font-semibold text-white">
                      {recipe.title}
                    </p>
                    <p className="mt-1 text-sm text-white/80">
                      Discover this recipe on RecipeHub
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -left-5 -top-5 -z-10 h-24 w-24 rounded-full bg-orange-100" />
          <div className="absolute -bottom-6 -right-6 -z-10 h-32 w-32 rounded-full bg-orange-50" />
        </div>
      </div>
    </section>
  );
}