/* eslint-disable no-restricted-imports */
import React from 'react';
import ButtonNav from './ButtonNav';

const Navbar = () => (
  <div className='flex flex-row gap-x-5 h-full bg-gray-600'>
    <ButtonNav name='Usuarios' />
    <ButtonNav name='Empresas' />
    <ButtonNav name='Proyectos' />
    <ButtonNav name='Issues' />
  </div>
);

export default Navbar;
