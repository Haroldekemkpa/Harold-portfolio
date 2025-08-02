import React from "react";
import assets from "../assets/assets";
import styles from "../stylecomponents/herocomponent.module.css";

const Herobanner = () => {
  return (
    <>
      <div
        className={`${styles.hero} flex flex-col justify-center items-center`}
      >
        <div className="text-center text-[#fff] font-extrabold text-6xl antialiased space-y-4 px-8">
          <h1 className=" font-bold ">
            {" "}
            <span className={`${styles.heroText} block text-2xl bold my-6 `}>
              Hello world
            </span>{" "}
            I'm Harold O. Ekemkpa{" "}
            <span
              className={`${styles.heroText} block text-sm lg:text-2xl my-8`}
            >
              Full-Stack Developer | Business Innovator | Community Builder
            </span>
          </h1>
        </div>
        <div>
          <p>Building the future one code at a time</p>
        </div>
      </div>
    </>
  );
};

export default Herobanner;
