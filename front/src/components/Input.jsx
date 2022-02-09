/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const Input = ({ text, name, placeholder, type }) => (
  <div>
    <label
      className='block text-gray-700 text-sm font-bold mb-2'
      htmlFor={name}
    >
      {text}
    </label>
    <input
      className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
      name={name}
      type={type}
      placeholder={placeholder}
    />
  </div>
);

export default Input;
