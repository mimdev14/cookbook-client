import Link from "next/link";

export default function RecipeCard({ recipe }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-52 overflow-hidden bg-gray-100">
        <img
          src={recipe.recipeImage}
          alt={recipe.recipeName}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {recipe.isFeatured && (
          <span className="absolute left-3 top-3 rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
            Featured
          </span>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-black">{recipe.recipeName}</h3>

        <div className="mt-2 flex flex-wrap gap-2 text-xs text-gray-500">
          <span className="rounded-full bg-gray-100 px-2.5 py-1">{recipe.category}</span>
          <span className="rounded-full bg-gray-100 px-2.5 py-1">{recipe.cuisineType}</span>
        </div>

        <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
          <span>⏱ {recipe.preparationTime} min</span>
          <span>❤ {recipe.likesCount || 0}</span>
        </div>

        <Link
          href={`/recipes/${recipe._id}`}
          className="mt-5 flex w-full items-center justify-center rounded-lg bg-black px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-gray-900"
        >
          View Details
        </Link>
      </div>
    </article>
  );
}