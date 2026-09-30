const featuredRecipes = [
  {
    id: 1,
    recipeName: "Creamy Garlic Pasta",
    recipeImage:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80",
    category: "Pasta",
    cuisineType: "Italian",
    preparationTime: "25 min",
  },
  {
    id: 2,
    recipeName: "Fresh Garden Salad",
    recipeImage:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
    category: "Salad",
    cuisineType: "Mediterranean",
    preparationTime: "15 min",
  },
  {
    id: 3,
    recipeName: "Classic Beef Burger",
    recipeImage:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80",
    category: "Burger",
    cuisineType: "American",
    preparationTime: "30 min",
  },
  {
    id: 4,
    recipeName: "Avocado Breakfast Toast",
    recipeImage:
      "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=900&q=80",
    category: "Breakfast",
    cuisineType: "American",
    preparationTime: "10 min",
  },
];

export default function FeaturedRecipes() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-orange-500">
              Featured Recipes
            </span>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Recipes worth trying
            </h2>

            <p className="mt-4 text-gray-600">
              Discover handpicked recipes selected by our community and
              featured by CookBook.
            </p>
          </div>

          <a
            href="/recipes"
            className="text-sm font-semibold text-orange-500 transition-colors hover:text-orange-600"
          >
            View all recipes →
          </a>
        </div>

        {/* Recipe Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredRecipes.map((recipe) => (
            <article
              key={recipe.id}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={recipe.recipeImage}
                  alt={recipe.recipeName}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-800 backdrop-blur-sm">
                  {recipe.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">
                  {recipe.recipeName}
                </h3>

                <div className="mt-3 flex items-center justify-between text-sm text-gray-500">
                  <span>{recipe.cuisineType}</span>

                  <span>{recipe.preparationTime}</span>
                </div>

                <a
                  href={`/recipes/${recipe.id}`}
                  className="mt-5 block rounded-lg border border-gray-200 py-2.5 text-center text-sm font-semibold text-gray-700 transition-all hover:border-orange-500 hover:bg-orange-500 hover:text-white"
                >
                  View Details
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}