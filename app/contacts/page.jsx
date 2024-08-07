import React from "react";
import Image from "next/image";
import map from "@/public/map.png";
import Navbar from "@/Components/Navbar";
import ContactForm from "@/Components/ContactForm";
import { FaPhoneFlip } from "react-icons/fa6";
import { SlEnvolope } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="container py-12 px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Наши контакты
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Мы всегда рады ответить на ваши вопросы и развивать эффективное
            сотрудничество по всем вопросам, связанным с электронной
            документооборотом.
          </p>
          <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="flex-1 space-y-4">
              <div className="flex items-start text-gray-700">
                <span className="mr-2">
                  <FaPhoneFlip />
                </span>
                <div className="flex flex-col">
                  <span>8 800 750 663</span>
                  <span>+3 044 334 56 43</span>
                  <span>+3 044 338 86 43</span>
                </div>
              </div>
              <p className="flex items-center text-gray-700">
                <span className="mr-2">
                  <SlEnvolope />
                </span>
                infosmartsign@smarttender.biz
              </p>

              <p className="flex items-center text-gray-700">
                <span className="mr-2">
                  <FaLocationDot />
                </span>
                пр-т Бажана, 1А, Киев, 02072
              </p>
            </div>
            <div className="flex-1 flex justify-end">
              <Image
                src={map}
                alt="Map"
                width={600}
                height={400}
                className="object-contain"
              />
            </div>
          </div>
          <div className="mt-0 space-y-0">
            <h3 className="text-2xl font-bold text-gray-900">
              ...или напишите нам:
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;