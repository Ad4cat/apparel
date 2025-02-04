import React from "react";

const About_us = () => {
  return (
    <div className="max-2xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-100 ">
      <div className="flex justify-between items-center">
        <div className="w-1/2 pr-4">
          <h1 className="items-center justify-center text-3xl font-bold text-gray-700 sm:text-4xl">
            ABOUT US
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            BLANDは、企業のような枠組みではなく、仲間たちの集まりから生まれたブランドです。
            <br />
            自由な発想と大学生ならではのフレッシュな視点でデザインされたコレクションは、まるで一人ひとりの物語が紡がれるような特別な魅力を持っています。
            <br />
            それぞれの感性が融合し、ユニークで多様なスタイルをお届けします。
          </p>
          <p className="mt-4 text-lg text-gray-500"></p>
        </div>
        <div className="w-1/2 pl-4 p-10">
          <img
            className="w-full rounded-lg shadow-lg p-3"
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000"
            alt="About us"
          />
        </div>
      </div>
    </div>
  );
};

export default About_us;
