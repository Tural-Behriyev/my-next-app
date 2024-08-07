import React from "react";
import styles from "./style.module.css";

const DigitalSignaturePackagesCard = ({ CardTitle, documents, price, button }) => {
  return (
    <div className={`p-6 rounded-lg shadow-md text-center flex flex-col justify-between ${styles.DigitalSignaturePackagesCard}`}>
      <div>
        <h2 className="text-xl font-semibold mb-4 text-left">{CardTitle}</h2>
        <p className="mb-4 text-left">{documents}</p>
        <p className="text-2xl font-bold mb-6 text-left">{price || " "}</p>
      </div>
      <div className="flex justify-center">
        <button className={`text-white py-2 px-4 ${styles.btn}`}>{button}</button>
      </div>
    </div>
  );
};

export default DigitalSignaturePackagesCard;