import CategoryProductList from "@/app/components/CategoryProductList";
import ProductCard from "@/app/components/ProductCard";
import { notFound } from "next/navigation";


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
    `https://api.abcz.workers.dev/api/bazardor/products?category=${categoryId}`
  );

  const data: IProductCard[] = await res.json();

if (!data || !Array.isArray(data) || data.length === 0) {
  notFound();
}

  return (
    <div className="mx-auto max-w-7xl px-4 mt-8 mb-42">
      {/* Category name and picture */}
      <div className="bg-[#FCFCFC]  rounded-2xl p-5">
         {data.length > 0 && (
        <h2 className="mb-4 flex items-center gap-2 text-xl font-bold">
          <span>{data[0].image}</span>
          <span>{data[0].categoryNameBn}</span>
        </h2>
      )}
      </div>
<CategoryProductList products={data}></CategoryProductList>

      {/* Product count in Bangla */}
      <h3 className="my-4">
        মোট {formatBanglaNumber(data.length)}টি পণ্য দেখানো হচ্ছে
      </h3>

      {/* Product cards */}
      {/* <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {data.map((product) => (
          <div key={product.id}>
            <ProductCard {...product} />
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default CategoryDetails;