import ProductCard from "./ProductCard";

interface IAllProduct {
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

const AllProducts = async () => {
    const res = await fetch(
        'https://openapi.programming-hero.com/api/bazardor/products'
    );

    const data: IAllProduct[] = await res.json();

    const risers = data
        .filter((n) => n.change.dir === 'up' && n.change.pct !== 0)
        .sort((a, b) => Math.abs(b.change.pct) - Math.abs(a.change.pct))
        .slice(0, 6);

    const fallers = data
        .filter((n) => n.change.dir === 'down' && n.change.pct !== 0)
        .sort((a, b) => Math.abs(b.change.pct) - Math.abs(a.change.pct))
        .slice(0, 6);

    return (
        <main className="w-full px-4 py-6">
            <div className="mx-auto max-w-7xl space-y-10">

                {/* Section A: Top risers */}
                <section>
                    <h2 className="mb-1 text-2xl font-bold text-red-700">
                       ▲ আজ দাম বেড়েছে 
                    </h2>

                    {/* <p className="mb-5 text-sm text-gray-500">
                        আজ যেসব পণ্যের দাম সবচেয়ে বেশি বেড়েছে
                    </p> */}

                    {risers.length > 0 && (
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {risers.map((product) => (
                                <ProductCard key={product.id} {...product} />
                            ))}
                        </div>
                    ) 
                    // : (
                    //     <p className="text-gray-500">
                    //         দাম বৃদ্ধির কোনো তথ্য পাওয়া যায়নি।
                    //     </p>
                    // )
                    }
                </section>

                {/* Section B: Top fallers */}
                <section>
                    <h2 className="mb-1 text-2xl font-bold text-green-600">
                       ▼ আজ দাম কমেছে 
                    </h2>

                    {/* <p className="mb-5 text-sm text-gray-500">
                        আজ যেসব পণ্যের দাম সবচেয়ে বেশি কমেছে
                    </p> */}

                    {fallers.length > 0 && (
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {fallers.map((product) => (
                                <ProductCard key={product.id} {...product} />
                            ))}
                        </div>
                    )
                    //  : (
                    //     <p className="text-gray-500">
                    //         দাম কমার কোনো তথ্য পাওয়া যায়নি।
                    //     </p>
                    // )
                    }
                </section>

                {/* Section C: All products */}
                <section id="sob-panno" className="scroll-mt-6">
                    <h2 className="mb-1 text-2xl font-bold text-gray-900">
                        সব পণ্য
                    </h2>

                    <p className="mb-5 text-sm text-gray-500">
মোট {data.length}টি পণ্য দেখানো হচ্ছে                    </p>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {data.map((product) => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                    </div>
                </section>

            </div>
        </main>
    );
};

export default AllProducts;