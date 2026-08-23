import Link from "next/link";

const categories = [
  {
    name: "Breakfast",
    description: "Start your day right",
    icon: "🍳",
  },
  {
    name: "Lunch",
    description: "Fresh & satisfying meals",
    icon: "🥗",
  },
  {
    name: "Dinner",
    description: "Delicious evening dishes",
    icon: "🍝",
  },
  {
    name: "Desserts",
    description: "Sweet treats for everyone",
    icon: "🍰",
  },
  {
    name: "Healthy",
    description: "Nutritious & delicious",
    icon: "🥑",
  },
  {
    name: "Quick & Easy",
    description: "Great meals, less time",
    icon: "⚡",
  },
];

export default function Categories() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-orange-500">
            Explore
          </span>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Find recipes for every craving
          </h2>

          <p className="mt-4 text-gray-600">
            Explore our collection of recipes organized by category and find
            something delicious to make today.
          </p>
        </div>

        {/* Categories */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/recipes?category=${category.name.toLowerCase()}`}
              className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg"
            >
              <div className="flex items-center gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-2xl transition-transform duration-300 group-hover:scale-110">
                  {category.icon}
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 transition-colors group-hover:text-orange-500">
                    {category.name}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    {category.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}