import React from "react";
import Image from "next/image";

const PageTop = () => {
  return (
    <>
      <div className="border-b mb-4 bg-gray-200">
        {/* 例: ヘッダーが 64px (h-16) なら (100vh - 64px)  */}
        <div className="relative flex min-h-screen items-center overflow-hidden ">
          <Image
            src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=2070"
            alt=""
            fill
            priority
            className="object-cover opacity-65"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/20 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-xl">
                <h1 className="text-6xl font-serif text-white mb-6 leading-tight">
                  A New Season,
                  <br />A New Beginning.
                </h1>
                <p className="text-xl text-gray-200 mb-10 leading-relaxed">
                  A gentle debut shaped by diverse minds — <br />
                  Each garment reflecting the unique vision of close companions.
                </p>
                <a href="#latest">
                  <button className="bg-white text-gray-900 px-8 py-4 font-semibold rounded-full hover:bg-gray-300 transition-colors duration-300 hover:shadow-lg transform hover:-translate-y-0.5">
                    Here’s to meeting what’s next
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageTop;
