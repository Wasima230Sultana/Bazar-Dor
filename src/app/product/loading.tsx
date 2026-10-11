
export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl px-4 mt-8 mb-42 animate-pulse">
      {/* Category heading skeleton */}
      <div className="bg-[#FCFCFC] rounded-2xl p-5">
        <div className="h-6 w-48 rounded bg-gray-200" />
      </div>

      {/* Product count skeleton */}
      <div className="my-4 h-5 w-40 rounded bg-gray-200" />

      {/* Product cards skeleton */}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="rounded-xl border border-gray-200 p-4"
          >
            <div className="h-32 rounded-lg bg-gray-200" />
            <div className="mt-4 h-5 w-3/4 rounded bg-gray-200" />
            <div className="mt-3 h-4 w-1/2 rounded bg-gray-200" />
            <div className="mt-4 h-8 w-1/3 rounded bg-gray-200" />
          </div>
        ))}
      </div>
    </div>
  );
}
