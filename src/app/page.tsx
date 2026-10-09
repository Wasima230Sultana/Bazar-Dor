
import Banner from "./components/Banner";
import { Suspense } from "react";
import AllProducts from "./components/AllProducts";

export default function Home() {
  return (
    <div>
   <Banner></Banner>
   <Suspense fallback={<span></span>}>
    <AllProducts></AllProducts>
   </Suspense>
   
    </div>
  );
}
