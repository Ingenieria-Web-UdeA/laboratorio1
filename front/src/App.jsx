/* eslint-disable no-restricted-imports */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CrearEmpresa from 'pages/CrearEmpresa';
import CrearProyecto from 'pages/CrearProyecto';
import CrearUsuario from 'pages/CrearUsuario';
import CrearIssue from 'pages/CrearIssue';
import PublicLayout from './layouts/PublicLayout';
import './styles/globals.css';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<PublicLayout />}>
        <Route path='CrearEmpresas' element={<CrearEmpresa />} />
        <Route path='CrearProyecto' element={<CrearProyecto />} />
        <Route path='CrearUsuario' element={<CrearUsuario />} />
        <Route path='CrearIssue' element={<CrearIssue />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
