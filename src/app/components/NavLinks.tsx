"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface INavLinks {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}

const NavLinks = () => {
  const [data, setData] = useState<INavLinks[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(
          "https://openapi.programming-hero.com/api/bazardor/categories"
        );

        if (!res.ok) {
          throw new Error("Failed to fetch categories");
        }

        const categories: INavLinks[] = await res.json();
        setData(categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="w-full px-4">
      <div className="divider my-1" />

      <nav className="mx-auto max-w-7xl">
        <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap py-2">
          {data.map((category) => {
            const href = `/category/${category.slug}`;
            const isActive = pathname === href;

            return (
              <Link
                key={category.id}
                href={href}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 sm:text-base ${
                  isActive
                    ? "bg-green-600 text-white shadow-sm"
                    : "text-gray-700 hover:bg-green-100 hover:text-green-700"
                }`}
              >
                {category.icon} {category.nameBn}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default NavLinks;