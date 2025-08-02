import React from "react";
import assets from "../assets/assets";

const Herobanner = () => {
  return (
    <>
      <div
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${assets.hero})` }}
      ></div>
    </>
  );
};

export default Herobanner;
