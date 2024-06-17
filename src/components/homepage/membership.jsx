import React from 'react';

const membership = () => {
  return (
    <div className="bg-yellow-home text-center text-gray-700 p-11">
    <div className="justify-center text-left items-center">
      <h2 className="text-2xl font-extrabold">Become a AILC member</h2>
      <p className="mt-4">Get up-to-date reminders of AILC events and upcoming projects. How exciting is that!</p>
      <a href="https://docs.google.com/forms/d/1HsgeJusxtx5zhpT2gQR6GYvLGPNxIjXQxlZZSbIhwZw/edit?pli=1">
      <button  className="hover:scale-105 transition ease-in-out font-bold text-lg border-gray-700 border-4 text-gray-700 py-2 px-4 mt-4 rounded-xl">Join AILC</button>
      </a>
    </div>
    </div>
  );
};

export default membership;
