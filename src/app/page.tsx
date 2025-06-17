import Hero from "@/components/features/hero";
import ProductList from "@/components/features/product-list/product-list";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 items-center">
      <Hero />

      <div className="w-full">
        <ProductList />
      </div>
    </div>
  );
}
