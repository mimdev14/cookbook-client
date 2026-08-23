import Categories from "@/components/home/Categories";
import Hero from "@/components/home/Hero";
import FeaturedRecipes from "@/components/home/FeaturedRecipes";
import Image from "next/image";
import PopularRecipes from "@/components/home/PopularRecipes";
import HowItWorks from "@/components/home/HowItWorks";

export default function Home() {
  return (
   <> 
   <Hero />
   <Categories />
   <FeaturedRecipes />
   <PopularRecipes />
   <HowItWorks />
   </>
  );
}
