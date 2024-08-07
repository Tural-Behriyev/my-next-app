import React from "react";
import Link from "next/link";
import Image from "next/image";
import LogoFooter from "@/public/logoFooter.svg";

const Footer = () => {
  return (
    <footer className="bg-[#061224] text-white py-10">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-start space-y-10 lg:space-y-0">
        <div className="flex flex-col logoSide">
          <Image className="h-8 w-auto" src={LogoFooter} alt="Signy Logo" width={530} />
          <span className="text-[#6b7280] text-sm pt-5 lg:pt-28">© 2020 Signy</span>
        </div>
        <div className="leftSide">
          <div className="flex flex-col lg:flex-row lg:space-x-16">
            <div className="flex flex-col space-y-2">
              <Link href="#">Про нас</Link>
              <Link href="#">Цены</Link>
              <Link href="#" className="pt-5">
                Вход
              </Link>
              <Link href="#">Регистрация</Link>
              <Link href="#" className="text-gray-500 text-sm">
                Договір оферти
              </Link>
            </div>
            <div className="flex flex-col space-y-2 pt-10 lg:pt-0">
              <Link href="#">Блог</Link>
              <Link href="#">Контакты</Link>
              <Link href="#" className="text-[#6b7280] pt-5 lg:pt-20">
                Безпека сервісу
              </Link>
            </div>
          </div>
        </div>
        <div className="rightSide">
          <div className="flex flex-col space-y-2 pt-10 lg:pt-0">
            <Link href="mailto:infosmartsign@smarttender.biz">infosmartsign@smarttender.biz</Link>
            <Link href="#">Facebook</Link>
          </div>
          <div className="flex flex-col space-y-2 pt-10 lg:pt-0 text-[#6b7280]">
            <span>пр-т Миколи Бажана, 14 А</span>
            <span>Київ, 02072</span>
            <span>0 800 750643</span>
            <span>+380 44 334 56 43</span>
            <span>+380 44 338 86 43</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;