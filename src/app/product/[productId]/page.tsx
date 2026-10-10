import ProductDetailsCard from "@/app/components/ProductDetailsCard";
import Link from "next/link";
import { notFound } from "next/navigation";

export const instant = false;

interface IMarket {
  market: string;
  division: string;
  min: number;
  max: number;
}

interface IProductDetails {
  id: number;
  slug: string;
  nameBn: string;
  category: string;
  categoryNameBn: string;
  categoryIcon: string;
  unit: string;
  image: string;
  today: number;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;
  change: {
    dir: "up" | "down" | "flat";
    pct: number;
  };
  markets: IMarket[];
}

interface ProductDetailsProps {
  params: Promise<{
    productId: string;
  }>;
}

const formatBanglaNumber = (num: number) =>
  new Intl.NumberFormat("bn-BD", {
    maximumFractionDigits: 2,
  }).format(num);

const ProductDetails = async ({ params }: ProductDetailsProps) => {
  const { productId } = await params;

  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products/${productId}`
  );


  const data: IProductDetails = await res.json();

if (!data || !Array.isArray(data.markets)) {
  notFound();
}

  return (
    <main className="mx-auto max-w-7xl space-y-10 px-4 py-8 ">
       <nav
      aria-label="Breadcrumb"
      className="flex flex-wrap items-center gap-2 text-sm sm:text-base"
    >
      <Link
        href="/"
        className="text-base-content/60 transition-colors hover:text-green-600"
      >
        হোম
      </Link>

  <span className="text-base-content/40">&gt;</span>

  <Link
    href={`/category/${data.category}`}
    className="text-base-content/60 transition-colors hover:text-green-600"
  >
    {data.categoryNameBn}
  </Link>

  <span className="text-base-content/40">&gt;</span>

  <span
    aria-current="page"
    className="break-words font-semibold text-base-content"
  >
    {data.nameBn}
  </span>
</nav>
      {/* Product details and price summary */}
      <ProductDetailsCard product={data} />

      {/* Bazaar price table */}
      <section className="bg-[#FCFCFC] p-3 rounded-lg">
        <div className="mb-5">
          <h2 className="text-2xl font-bold">
            বাজারভিত্তিক আজকের দাম
          </h2>
        </div>

        <div className="overflow-x-auto rounded-xl border border-base-300">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>বাজারের নাম</th>
                <th>বিভাগ</th>
                <th>সর্বনিম্ন মূল্য</th>
                <th>সর্বোচ্চ মূল্য</th>
                <th>গড় মূল্য</th>
              </tr>
            </thead>

            <tbody>
              {data.markets.map((market, index) => {
                const average = (market.min + market.max) / 2;

                return (
                  <tr key={`${market.market}-${index}`}>

                    <td className="font-medium">
                      {market.market}
                    </td>

                    <td>{market.division}</td>

                    <td>
                      {formatBanglaNumber(market.min)} টাকা
                    </td>

                    <td>
                      {formatBanglaNumber(market.max)} টাকা
                    </td>

                    <td className="font-semibold">
                      {formatBanglaNumber(average)} টাকা
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default ProductDetails;