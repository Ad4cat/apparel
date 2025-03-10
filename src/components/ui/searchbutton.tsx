import React from "react";

const Searchbutton = () => {
  return (
    <>
      <input
        type="search"
        placeholder="search ..."
        className="bg-transparent placeholder-gray-500 focus:outline-none focus:border-b-2 focus:border-blue-500 border-b border-gray-300 z-sideBar"
      />
    </>
  );
};

export default Searchbutton;
