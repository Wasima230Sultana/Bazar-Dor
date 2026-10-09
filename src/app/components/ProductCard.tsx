interface IProductCard {
    id: string;
    slug: string;
    nameBn: string;
    image: string;
    today: number;
    unit?: string;
    change: {
        dir: 'up' | 'down' | 'flat';
        pct: number;
    };
}

const formatPrice = (price: number) =>
    new Intl.NumberFormat('bn-BD').format(price);

const ProductCard = (n: IProductCard) => {
    const isFlat = n.change.dir === 'flat' || n.change.pct === 0;
    const isUp = !isFlat && n.change.dir === 'up';

    const badgeStyle = isFlat
        ? 'bg-gray-100 text-gray-500'
        : isUp
            ? 'bg-red-100 text-red-700'
            : 'bg-green-100 text-green-600';

    const changeLabel = isFlat
        ? '—'
        : isUp
            ? '▲'
            : '▼';

    return (
        <article className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md">
            <div className="mb-5 flex items-center gap-3">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#F0F5F0] text-3xl">
                    {n.image || '🛒'}
                </div>

                <div className="min-w-0">
                    <h3 className="font-bold text-gray-800">
                        {n.nameBn}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                        {n.unit || 'প্রতি কেজি'}
                    </p>
                </div>
            </div>

            <div className="flex items-end justify-between gap-2 border-t border-gray-100 pt-3">
                <div>
                    <p className="text-sm text-gray-500">
                        আজকের দাম
                    </p>

                    <p className="mt-1 text-xl font-bold text-gray-900">
                        {formatPrice(n.today)} টাকা
                    </p>
                </div>

                <span className={`shrink-0 rounded-full px-2.5 py-1 text-sm font-semibold ${badgeStyle}`}>
                    {changeLabel}{' '}
                    {formatPrice(Math.abs(n.change.pct))}%
                </span>
            </div>
        </article>
    );
};

export default ProductCard;