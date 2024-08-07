import React from 'react'

const SubscribeToOurNewsInput = () => {
  return (
    <div className="space-x-4 py-7">
      <input type="text" className="w-96 rounded-[37px] px-4 py-2 border border-gray-300 focus:outline-none focus:border-blue-500"/>
      <button className="rounded-[41px] px-6 py-2 md:mt-0 mt-5 bg-blue-800 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">отправить</button>
    </div>
  );
}

export default SubscribeToOurNewsInput