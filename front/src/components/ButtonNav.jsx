/* eslint-disable no-unused-vars */
/* eslint-disable spaced-comment */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Image from 'components/1.svg';
import { NavLink } from 'react-router-dom';
import { Dropdown } from 'rsuite';

const ButtonNav = ({ name, ruta }) => (
  <NavLink to={ruta}>
    <div className='flex flex-row gap-x-3 my-2 px-2 rounded-[5px] hover:bg-gray-500 cursor-pointer'>
      <span className='my-2 text-[20px] text-colorBlanco'>{name}</span>
      <img className='stroke-colorBlanco' src={Image} width='20' height='20' />
    </div>
  </NavLink>
);

export default ButtonNav;
