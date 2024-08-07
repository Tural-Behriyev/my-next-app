export default function ContactForm() {
  return (
    <div className="w-full max-w-lg">
      <form className="bg-white px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-black text-sm font-bold mb-2" htmlFor="name">
            Имя
          </label>
          <input
            className="shadow rounded-3xl w-full py-2 px-3 text-black focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Иван"
          />
        </div>
        <div className="mb-4">
          <label className="block text-black text-sm font-bold mb-2" htmlFor="email">
            Электронная почта
          </label>
          <input
            className="shadow rounded-3xl w-full py-2 px-3 text-black focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="ivan@mail.com"
          />
        </div>
        <div className="mb-4">
          <label className="block text-black text-sm font-bold mb-2" htmlFor="phone">
            Телефон
          </label>
          <input
            className="shadow rounded-3xl w-full py-2 px-3 text-black focus:outline-none focus:shadow-outline"
            id="phone"
            type="tel"
            placeholder="+38 000 000 00 00"
          />
        </div>
        <div className="mb-4">
          <label className="block text-black text-sm font-bold mb-2" htmlFor="message">
            Сообщение
          </label>
          <textarea
            className="shadow rounded-2xl w-full py-2 px-3 text-black focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="введите тут"
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline rounded-3xl"
            type="button"
          >
            Отправить
          </button>
        </div>
      </form>
    </div>
  );
}