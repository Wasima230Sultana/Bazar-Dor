import Banner from "./components/Banner";
import PriceHigh from "./components/AllProducts";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
   <Banner></Banner>
   <Suspense fallback={<span></span>}>
    <PriceHigh></PriceHigh>
   </Suspense>
   
    </div>
  );
}
