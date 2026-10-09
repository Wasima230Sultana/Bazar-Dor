import Link from 'next/link';

interface INavLinks {
    id: string;
    slug: string;
    nameBn: string;
    icon: string;
}

const NavLinks = async () => {
    const res = await fetch(
        'https://api.api-store.workers.dev/api/bazardor/categories'
    );

    const data: INavLinks[] = await res.json();

    return (
        <div className="w-full px-4">
            <div className='divider'></div>
            <div className="max-w-7xl mx-auto flex justify-start gap-8 py-1">
                {data.map((category) => (
                    <Link key={category.id} href={`/category/${category.slug}`}>
                        {category.icon} {category.nameBn}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default NavLinks;