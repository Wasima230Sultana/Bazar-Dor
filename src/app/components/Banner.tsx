 'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

const Banner = () => {
    const [date, setDate] = useState("");

    useEffect(() => {
        const today = new Date().toLocaleDateString("bn-BD", {
            dateStyle: "full",
        });

        setDate(today);
    }, []);

    return (
        <section className="w-full px-4 py-4">
            <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6 bg-[#FAFCFA] p-4 md:p-6 rounded-lg">
                <div className="py-2 flex-1">
                    <span className="inline-block bg-[#F0F5F0] text-green-700 px-3 py-2 rounded-lg text-sm">
                        {date}
                    </span>

                    <h2 className="font-bold text-3xl md:text-4xl mt-4 mb-3">
                        আজকের বাজারের দাম এক নজরে
                    </h2>

                    <p className="text-gray-600 leading-7 mb-5">
                        চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম —
                        বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং
                        দামের পরিবর্তন এক জায়গায়।
                    </p>

                    <button className="btn bg-[#05893E] hover:bg-green-700 text-white font-semibold rounded-lg">
                        সব পণ্য দেখুন
                    </button>
                </div>

                <div className="w-full md:w-5/12 flex justify-center">
                    <Image
                        className="w-full max-w-sm h-auto object-contain"
                        src="/bazar-hero.png"
                        alt="বাজারের পণ্যের চিত্র"
                        width={500}
                        height={400}
                        priority
                    />
                </div>
            </div>
        </section>
    );
};

export default Banner;