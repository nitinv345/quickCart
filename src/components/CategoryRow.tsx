import ProductCard from "./ProductCard";

export default function CategoryRow({ title, items }: { title: string, items: any[] }) {
  return (
    <section className="mb-10">
      <div className="flex justify-between mb-3 px-2">
        <h2 className="text-xl font-bold">
          {title}
        </h2>

        <button className="text-green-600 font-semibold border-none bg-transparent cursor-pointer">
          see all
        </button>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar px-2">
        {items.map(product => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}
