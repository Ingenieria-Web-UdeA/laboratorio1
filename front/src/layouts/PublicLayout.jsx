/* eslint-disable no-restricted-imports */
import React from 'react';
import Navbar from '../components/Navbar';

const PublicLayout = ({ children }) => (
  <div className='w-full flex flex-col'>
    <Navbar />
    {children}
  </div>
);

export default PublicLayout;
