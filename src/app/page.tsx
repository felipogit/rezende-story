
import { Banner } from "@/components/Banner";
import Header from "@/components/Header";
import { ProductList } from "@/components/ProductList";


export default function Home() {
  return (
    <div className="w-full h-screen  ">
     <Header />
     <Banner />
     <ProductList />
    </div>
  );
}
