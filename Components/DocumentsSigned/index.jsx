import React from 'react'
import styles from "./style.module.css";

const DocumentsSigned = () => {
  return (
    <div className={`text-center ${styles.DocumentsSigned}`}>
      <div className="container mx-auto DocumentsSigned">
        <div className="DocumentsSignedNum md:text-7xl text-5xl font-medium pt-6">5 820 125 114 </div>
        <div className="DocumentsSignedTitle text-4xl	 pt-4 font-medium">подписано документов</div>
        <div className="DocumentsSignedDesc text-sm	pt-4 pb-6">Наша компания уже более 30 лет создает удобные решения для бизнеса любого размера. Мы гордимся Signy как безопасным и комфортным продуктом</div>
      </div>
    </div>
  );
}

export default DocumentsSigned