import React from "react";
import assets from "../assets/assets";
import styles from "../stylecomponents/herocomponent.module.css";

const Herobanner = () => {
  return (
    <>
      <div
        className={`${styles.hero} flex flex-col justify-center align-center`}
      >
        <div>
          <h1>
            {" "}
            <span>Hello world</span> I'm Harold O. Ekemkpa{" "}
            <span>A fullstack web Developer</span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Herobanner;
