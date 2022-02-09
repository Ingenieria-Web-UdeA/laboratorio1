/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-restricted-imports */
import React from 'react';
import ButtonNav from './ButtonNav';
import logo from './2.svg';

const Navbar = () => (
  <nav className='flex flex-row w-full bg-gray-600 items-center px-4 justify-between '>
    <div className='flex items-center'>
      <img className='h-12 w-12' src={logo} />
      <span className='text-white text-2xl pl-4'>Bit software</span>
    </div>
    <div className='flex flex-row gap-x-3 '>
      <ButtonNav name='Usuarios' ruta='/usuarios' />
      <ButtonNav name='Empresas' ruta='/CrearEmpresas' />
      <ButtonNav name='Proyectos' ruta='/CrearProyecto' />
      <ButtonNav name='Issues' ruta='/issues' />
    </div>
    <div className=''>
      <span className='text-white text-2xl justify-self-end'>
        correo2333@gmail.com
      </span>
    </div>
  </nav>
);

export default Navbar;
