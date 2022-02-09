/* eslint-disable no-restricted-imports */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const PublicLayout = () => (
  <div className='w-full flex flex-col'>
    <Navbar />
    <div className='h-full'>
      <Outlet />
    </div>
  </div>
);

export default PublicLayout;
