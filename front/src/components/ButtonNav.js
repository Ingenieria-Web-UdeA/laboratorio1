/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

const ButtonNav = ({ name }) => (
  <div className='flex flex-row gap-x-2'>
    <span>{name}</span>
    <img src='1.svg' />
  </div>
);

export default ButtonNav;
