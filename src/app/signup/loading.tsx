
export default function Loading() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-[#FAFCFA] px-4">
      <div className="w-full max-w-md animate-pulse rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <div className="mx-auto mb-3 h-8 w-40 rounded-md bg-gray-200" />
        <div className="mx-auto mb-8 h-4 w-56 rounded bg-gray-100" />

        {/* Name field */}
        <div className="mb-2 h-4 w-20 rounded bg-gray-200" />
        <div className="mb-5 h-12 w-full rounded-lg bg-gray-100" />

        {/* Email field */}
        <div className="mb-2 h-4 w-20 rounded bg-gray-200" />
        <div className="mb-5 h-12 w-full rounded-lg bg-gray-100" />

        {/* Password field */}
        <div className="mb-2 h-4 w-24 rounded bg-gray-200" />
        <div className="mb-6 h-12 w-full rounded-lg bg-gray-100" />

        {/* Create account button */}
        <div className="mb-6 h-12 w-full rounded-lg bg-green-100" />

        {/* Social buttons */}
        <div className="mb-3 h-11 w-full rounded-lg bg-gray-100" />
        <div className="h-11 w-full rounded-lg bg-gray-100" />

        <p className="mt-6 text-center text-sm text-gray-400">
          Preparing your registration page...
        </p>
      </div>
    </div>
  );
}