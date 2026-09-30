const popularRecipes = [
  {
    id: 1,
    recipeName: "Creamy Garlic Pasta",
    recipeImage:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80",
    category: "Pasta",
    likesCount: 248,
    authorName: "Sarah Ahmed",
  },
  {
    id: 2,
    recipeName: "Classic Chicken Biryani",
    recipeImage:
      "https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=900&q=80",
    category: "Rice",
    likesCount: 215,
    authorName: "Tanvir Hasan",
  },
  {
    id: 3,
    recipeName: "Fresh Mediterranean Salad",
    recipeImage:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
    category: "Salad",
    likesCount: 189,
    authorName: "Nadia Rahman",
  },
  {
    id: 4,
    recipeName: "Classic Beef Burger",
    recipeImage:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80",
    category: "Burger",
    likesCount: 176,
    authorName: "Alex Martin",
  },
];

export default function PopularRecipes() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-orange-500">
              Popular Recipes
            </span>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Loved by our community
            </h2>

            <p className="mt-4 text-gray-600">
              Explore the recipes that are getting the most love from
              CookBook members.
            </p>
          </div>

          <a
            href="/recipes"
            className="text-sm font-semibold text-orange-500 transition-colors hover:text-orange-600"
          >
            Explore all →
          </a>
        </div>

        {/* Recipe Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {popularRecipes.map((recipe) => (
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

                {/* Likes Badge */}
                <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-sm font-semibold text-gray-800 shadow-sm backdrop-blur-sm">
                  <span aria-hidden="true">♥</span>
                  {recipe.likesCount}
                </div>

                {/* Category */}
                <span className="absolute bottom-4 left-4 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white">
                  {recipe.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">
                  {recipe.recipeName}
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  By{" "}
                  <span className="font-medium text-gray-700">
                    {recipe.authorName}
                  </span>
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {recipe.likesCount} likes
                  </span>

                  <a
                    href={`/recipes/${recipe.id}`}
                    className="text-sm font-semibold text-orange-500 transition-colors hover:text-orange-600"
                  >
                    View Details →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}