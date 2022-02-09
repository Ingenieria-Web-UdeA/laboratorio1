/* eslint-disable no-unused-vars */
/* eslint-disable spaced-comment */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

const ButtonForm = ({ text }) => (
  <div>
    <button
      className='text-colorBlanco bg-colorNegro hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-full  px-5 py-2.5 text-center mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700'
      type='submit'
    >
      {text}
    </button>
  </div>
);

export default ButtonForm;
