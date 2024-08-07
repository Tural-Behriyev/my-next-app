import React from 'react'
import WorkProductImg from "@/public/WorkProductImg.png";
import Image from "next/image";

const WorkProductTopImage = () => {
  return (
    <div>
      <Image src={WorkProductImg} width={595} height={595} alt="Picture of the author" className='pt-10'/>
    </div>
  );
}

export default WorkProductTopImage