import React from 'react'
import Title from "../Title";
import Image from 'next/image';
import videoimg from "@/public/videoimg.png";
import videoicon from "@/public/videoicon.svg";


const LetsMeetInPerson = ({title}) => {
  return (
    <div className="container mx-auto mb-10">
      <Title title={title} />
      <div className="flex flex-col items-center">
        <div className="relative">
          <Image src={videoimg} alt="Video Thumbnail" width={734} className="rounded-lg" />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-white rounded-full p-2">
              <Image src={videoicon} className="rounded-lg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LetsMeetInPerson