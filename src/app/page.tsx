import { HeroSection } from "@/components/hero/HeroSection";
import { CategoriesSection } from "@/components/categories/CategoriesSection";
import ProductsSection from "@/components/products/ProductsSection";
import QuoteSection from "@/components/quote/QuoteSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <CategoriesSection />
      <ProductsSection />
      <QuoteSection />
    </main>
  );
}
