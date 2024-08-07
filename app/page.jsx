import React from "react";
import HomeSlider from "@/components/HomeSlider";
import InfoCard from "@/components/InfoCard";
import infoData from "@/Components/InfoCard/infoData";
import WorkProduct from "@/Components/Work&Product";
import DigitalSignaturePackages from "@/Components/DigitalSignaturePackages";
import DocumentsSigned from "@/Components/DocumentsSigned";
import SignysFriends from "@/Components/SignysFriends";
import WeWriteInterestinglyAbout from "@/Components/WeWriteInterestinglyAbout";
import LetsMeetInPerson from "@/Components/LetsMeetInPerson";
import PopularQuestionsAndAnswersToThem from "@/Components/PopularQuestionsAndAnswersToThem";
import SubscribeToOurNews from "@/Components/SubscribeToOurNews";


const Home = () => {
  return (
    <div>
        <HomeSlider />
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          {infoData.map((info, index) => (
            <InfoCard key={index} icon={info.icon} title={info.title} description={info.description} />
          ))}
        </div>
        <WorkProduct />
        <DigitalSignaturePackages title="Пакеты цифровых подписей" />
        <DocumentsSigned />
        <SignysFriends title="Друзья Signy" />
        <WeWriteInterestinglyAbout title="Интересно пишем про " />
        <LetsMeetInPerson title="Познакомимся в живую?" />
        <PopularQuestionsAndAnswersToThem title="Популярные вопросы и ответы на них" />
        <SubscribeToOurNews title="Подпишись на наши новости!" />
    </div>
  );
};

export default Home;