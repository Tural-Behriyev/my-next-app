import Image from "next/image";

const InfoCard = ({ icon, title, description }) => {
  return (
    <div >
      <div className="flex items-center p-4">
        <div className="text-blue-500 mb-2 mr-4">
          <Image src={icon} alt={title} width={60} height={60} />
        </div>
        <div>
          <h3 className="font-bold text-lg text-base">{title}</h3>
          <p className="text-center">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;