import Header from "@/components/header";
import PageTop from "./components/page-top";
import Latest_arrivals from "./components/latest_arrivals";
import About_us from "./components/about_us";
import LookBook from "./components/lookbook";

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
      <Latest_arrivals />
      <p className="border-b border-x-black my-5 "></p>
      <h1
        className="flex justify-center items-center text-4xl font-serif font-bold text-gray-900 mx-auto px-4 sm:px-6 lg:px-8 py-6 max-w-7xl scroll-m-20 "
        id="lookbook"
      >
        LOOK BOOK
      </h1>
      <LookBook />
      <About_us />
    </div>
  );
}
