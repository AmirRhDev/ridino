import Hero from "@/components/features/hero";
import ProductList from "@/components/features/product-list/product-list";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 items-center">
      <Hero />

      <div className="w-full px-11">
        <ProductList />
      </div>
    </main>
  );
}
