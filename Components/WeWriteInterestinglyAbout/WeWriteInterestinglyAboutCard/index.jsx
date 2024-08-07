import Image from "next/image";

const WeWriteInterestinglyAboutCard = ({ date, CardTitle, image }) => {
  return (
    <div className="rounded-md overflow-hidden">
      <Image src={image} alt={CardTitle} width={374} className="w-full object-cover" />
      <div className="p-4">
        <p className="text-gray-600 text-sm font-medium">{date}</p>
        <h3 className="mt-2 text-gray-900 text-2xl font-medium">{CardTitle}</h3>
      </div>
    </div>
  );
};

export default WeWriteInterestinglyAboutCard;