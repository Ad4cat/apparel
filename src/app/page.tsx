import Header from "@/components/header";
import PageTop from "./components/page-top";
import About_us from "./components/about_us";
import LatestArrivalsServer from "./components/getImgData";
import LookBookServer from "./components/getVariantsImg";

export default function Home() {
  return (
    <div>
      <div className="flex min-h-screen flex-col">
        <Header />
        <PageTop />
      </div>

      <h1
        className="flex justify-center items-center text-4xl font-serif font-bold text-gray-900 mx-auto px-4 sm:px-6 lg:px-8 py-6 max-w-7xl scroll-m-20"
        id="latest"
      >
        Latest Arrivals
      </h1>
      <LatestArrivalsServer />
      <p className="border-b border-x-black my-5 "></p>
      <h1
        className="flex justify-center items-center text-4xl font-serif font-bold text-gray-900 mx-auto px-4 sm:px-6 lg:px-8 py-6 max-w-7xl scroll-m-20 "
        id="lookbook"
      >
        LOOK BOOK
      </h1>
      <LookBookServer />
      <About_us />
    </div>
  );
}
