export const instant = false

interface ProductDetailsProps {
  params: Promise<{
    productId: string;
  }>;
}

const ProductDetails = async ({
  params,
}: ProductDetailsProps) => {
  const { productId } = await params;

  const res = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/products/${productId}`
  );

  const data = await res.json();

  console.log(data);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="text-2xl font-bold">
        Product Details
      </h1>

      <p className="mt-4">Product ID: {productId}</p>


    </div>
  );
};

export default ProductDetails;
