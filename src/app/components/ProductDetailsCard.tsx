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
  image: string;
  today: number;
  unit?: string;
  categoryNameBn: string;
  categoryIcon?: string;
  yesterday: number;
  lastWeek?: number;
  lastMonth?: number;
  change: {
    dir: "up" | "down" | "flat";
    pct: number;
  };
  markets: IMarket[];
}

interface IProductDetailsCardProps {
  product: IProductDetails;
}

const formatBanglaNumber = (num: number) =>
  new Intl.NumberFormat("bn-BD", {
    maximumFractionDigits: 2,
  }).format(num);

const ProductDetailsCard = ({
  product,
}: IProductDetailsCardProps) => {
  const difference = product.today - product.yesterday;

  const changeColor =
    difference > 0
      ? "text-red-600"
      : difference < 0
        ? "text-green-600"
        : "text-base-content/60";

  const unitLabel =
    product.unit === "kg" ? "কেজি" : product.unit || "একক";

  // Calculate prices across all bazaars
  const markets = product.markets ?? [];

  const lowestPrice =
    markets.length > 0
      ? Math.min(...markets.map((market) => market.min))
      : null;

  const highestPrice =
    markets.length > 0
      ? Math.max(...markets.map((market) => market.max))
      : null;

  const averagePrice =
    markets.length > 0
      ? markets.reduce(
          (total, market) => total + (market.min + market.max) / 2,
          0
        ) / markets.length
      : null;

  return (
    <div className="space-y-8">
      {/* Main product card */}
      <div className="flex flex-col justify-between gap-6 rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm sm:flex-row sm:items-center sm:p-8">
        <div className="space-y-3">
          <div className="text-5xl">
            {product.image || product.categoryIcon || "🛒"}
          </div>

          <h1 className="text-2xl font-bold">
            {product.nameBn}
          </h1>

          <p className="text-sm text-base-content/70">
            প্রতি {unitLabel} · {product.categoryNameBn}
          </p>

          <p className={`font-semibold ${changeColor}`}>
            {difference > 0
              ? "▲ দাম বেড়েছে"
              : difference < 0
                ? "▼ দাম কমেছে"
                : "— দামের পরিবর্তন নেই"}
            {" · "}
            {formatBanglaNumber(Math.abs(difference))} টাকা
          </p>

          <p className="text-sm text-base-content/70">
            গতকালের দাম: {formatBanglaNumber(product.yesterday)} টাকা
          </p>
        </div>

        <div className="rounded-xl bg-base-200 p-5 sm:min-w-52">
          <p className="text-sm text-base-content/70">
            আজকের দাম
          </p>

          <h2 className="my-2 text-3xl font-bold">
            {formatBanglaNumber(product.today)}
          </h2>

          <p className="text-sm">টাকা / {unitLabel}</p>

          <p className={`mt-3 text-sm font-semibold ${changeColor}`}>
            {product.change.dir === "up"
              ? "▲"
              : product.change.dir === "down"
                ? "▼"
                : "—"}{" "}
            {formatBanglaNumber(product.change.pct)}%
          </p>
        </div>
      </div>

      {/* Bazaar price summary */}
      <section>
        <h2 className="mb-4 text-xl font-bold">
          দামের সারসংক্ষেপ
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {/* Lowest price */}
          <div className="rounded-xl border border-base-300 bg-base-100 p-5">
            <p className="text-sm text-base-content/70">
              সর্বনিম্ন দাম
            </p>

            <p className="mt-2 text-2xl font-bold text-green-600">
              {lowestPrice !== null
                ? `${formatBanglaNumber(lowestPrice)} টাকা`
                : "তথ্য নেই"}
            </p>
            <p>সবচেয়ে কম দামের বাজার</p>
          </div>

          {/* Highest price */}
          <div className="rounded-xl border border-base-300 bg-base-100 p-5">
            <p className="text-sm text-base-content/70">
              সর্বোচ্চ দাম
            </p>

            <p className="mt-2 text-2xl font-bold text-red-600">
              {highestPrice !== null
                ? `${formatBanglaNumber(highestPrice)} টাকা`
                : "তথ্য নেই"}
            </p>
            <p>সবচেয়ে বেশি দামের বাজার</p>
          </div>

          {/* Average price */}
          <div className="rounded-xl border border-base-300 bg-base-100 p-5">
            <p className="text-sm text-base-content/70">
              গড় দাম 
            </p>

            <p className="mt-2 text-2xl font-bold text-green-600">
              {averagePrice !== null
                ? `${formatBanglaNumber(averagePrice)} টাকা`
                : "তথ্য নেই"}
            </p>
            <p>প্রতি কেজি-এর হিসাবে</p>
          </div>
        </div>

      </section>
    </div>
  );
};

export default ProductDetailsCard;