/* eslint-disable no-restricted-imports */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CrearEmpresa from 'pages/CrearEmpresa';
import CrearProyecto from 'pages/CrearProyecto';
import Login from 'pages/Login';
import PublicLayout from './layouts/PublicLayout';
import './styles/globals.css';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='' element={<Login />} />
      <Route path='/' element={<PublicLayout />}>
        <Route path='CrearEmpresas' element={<CrearEmpresa />} />
        <Route path='CrearProyecto' element={<CrearProyecto />} />
        <Route path='CrearProyecto' element={<CrearProyecto />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
