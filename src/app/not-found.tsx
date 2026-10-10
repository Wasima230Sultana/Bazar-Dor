
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-7xl font-bold text-primary">
        404
      </h1>

      <h2 className="mt-4 text-2xl font-bold">
        পণ্যটি খুঁজে পাওয়া যায়নি!
      </h2>

      <p className="mt-3 text-gray-500">
        দুঃখিত, আপনি যে পণ্যটি খুঁজছেন সেটি
        পাওয়া যায়নি অথবা লিংকটি সঠিক নয়।
      </p>

      <Link
        href="/"
        className="mt-6 rounded-lg bg-primary px-6 py-3 font-semibold text-white hover:opacity-90"
      >
        হোম পেজে ফিরে যান
      </Link>
    </main>
  );
}
