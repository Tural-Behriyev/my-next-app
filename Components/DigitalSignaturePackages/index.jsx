import React from "react";
import Title from "../Title";
import DigitalSignaturePackagesCardData from "./DigitalSignaturePackagesCard/DigitalSignaturePackagesCardData";
import DigitalSignaturePackagesCard from "./DigitalSignaturePackagesCard";

const DigitalSignaturePackages = ({ title }) => {
  return (
    <div className="DigitalSignaturePackages container mx-auto">
      <Title title={title} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
        {DigitalSignaturePackagesCardData.map((card, index) => (
          <DigitalSignaturePackagesCard key={index} CardTitle={card.CardTitle} documents={card.documents} price={card.price} button={card.button} />
        ))}
      </div>
    </div>
  );
};

export default DigitalSignaturePackages;