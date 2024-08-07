import React from "react";
import styles from "./style.module.css";
import WorkProductTop from "./WorkProductTop";
import WorkProductBottom from "./WorkProductBottom";

const WorkProduct = () => {
  return (
    <div className={`${styles.WorkProduct} px-4`}>
      <WorkProductTop />
      <WorkProductBottom />
    </div>
  );
};

export default WorkProduct;
