import React from 'react';
import styles from "./style.module.css";

const NoAnswerToYourQuestion = () => {
  return (
    <div className={styles.NoAnswerToYourQuestion}>
      <div className="flex justify-center items-center min-h-screen">
        <form className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
          <h2 className="text-center text-2xl font-bold mb-6">
            Нет ответа на интересующий вопрос?
          </h2>
          <p className="text-center text-lg mb-6">
            Заполни форму и наши менеджеры свяжутся с тобой
          </p>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Имя*:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Иван"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Электронная почта*:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="ivan@mail.com"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Телефон*:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+38 000 000 00 00"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="question" className="block text-sm font-medium text-gray-700">
              Твой вопрос:
            </label>
            <textarea
              id="question"
              name="question"
              placeholder="введите тут"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm h-28"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            отправить
          </button>
        </form>
      </div>
    </div>
  );
};

export default NoAnswerToYourQuestion;
