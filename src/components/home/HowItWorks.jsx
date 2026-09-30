import { Search, ChefHat, Share2 } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Discover",
    description:
      "Explore delicious recipes from different cuisines and find something perfect for your next meal.",
    icon: Search,
  },
  {
    id: 2,
    title: "Cook",
    description:
      "Choose a recipe, follow the instructions, and turn simple ingredients into something amazing.",
    icon: ChefHat,
  },
  {
    id: 3,
    title: "Share",
    description:
      "Create your own recipes and share your favorite dishes with the CookBook community.",
    icon: Share2,
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-orange-500">
            How It Works
          </span>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Your next favorite recipe is just three steps away
          </h2>

          <p className="mt-4 text-gray-600">
            CookBook makes discovering, cooking, and sharing recipes simple.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.id} className="relative text-center">
                {/* Connector */}
                {index < steps.length - 1 && (
                  <div className="absolute left-[calc(50%+55px)] top-8 hidden h-px w-[calc(100%-110px)] bg-gray-200 md:block" />
                )}

                {/* Icon */}
                <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
                  <Icon size={28} strokeWidth={1.8} />
                </div>

                {/* Step Number */}
                <span className="mt-5 inline-block text-xs font-semibold uppercase tracking-widest text-gray-400">
                  Step {step.id}
                </span>

                {/* Content */}
                <h3 className="mt-2 text-xl font-semibold text-gray-900">
                  {step.title}
                </h3>

                <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-gray-500">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}