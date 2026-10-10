"use client";

import { useState } from "react";
import ProductCard from "@/app/components/ProductCard";

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

interface Props {
  products: IProductCard[];
}

const formatBanglaNumber = (num: number) =>
  new Intl.NumberFormat("bn-BD").format(num);

export default function CategoryProductList({ products }: Props) {
  const [sort, setSort] = useState("default");

  const sortedProducts = [...products].sort((a, b) => {
    if (sort === "low-high") return a.today - b.today;
    if (sort === "high-low") return b.today - a.today;
    return 0;
  });

  return (
    <>
      <div className="bg-[#FCFCFC] rounded-2xl p-5 mt-4 flex justify-end items-center gap-3">
        <label className="text-sm font-medium">সাজান:</label>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="select"
        >
          <option value="default">ডিফল্ট</option>
          <option value="low-high">দাম: কম থেকে বেশি</option>
          <option value="high-low">দাম: বেশি থেকে কম</option>
        </select>
      </div>

      <h3 className="my-4">
        মোট {formatBanglaNumber(sortedProducts.length)}টি পণ্য দেখানো হচ্ছে
      </h3>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {sortedProducts.map((product) => (
          <div key={product.id}>
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </>
  );
}