import ProductCard from "@/app/components/ProductCard";

export const instant = false;

interface CategoryDetailsProps {
  params: Promise<{
    categoryId: string;
  }>;
}

interface IProductCard {
  id: string;
  slug: string;
  nameBn: string;
  image: string;
  today: number;
  unit?: string;
  categoryNameBn: string;
  change: {
    dir: "up" | "down" | "flat";
    pct: number;
  };
}

const formatBanglaNumber = (num: number) =>
  new Intl.NumberFormat("bn-BD").format(num);

const CategoryDetails = async ({ params }: CategoryDetailsProps) => {
  const { categoryId } = await params;

  const res = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/products?category=${categoryId}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data: IProductCard[] = await res.json();

  return (
    <div className="mx-auto max-w-7xl px-4">
      {/* Category name and picture */}
      {data.length > 0 && (
        <h2 className="mb-4 flex items-center gap-2 text-xl font-bold">
          <span>{data[0].image}</span>
          <span>{data[0].categoryNameBn}</span>
        </h2>
      )}

      {/* Product count in Bangla */}
      <h3 className="mb-4">
        মোট {formatBanglaNumber(data.length)}টি পণ্য দেখানো হচ্ছে
      </h3>

      {/* Product cards */}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {data.map((product) => (
          <div key={product.id}>
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryDetails;