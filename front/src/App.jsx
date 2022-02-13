/* eslint-disable no-restricted-imports */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CrearEmpresa from 'pages/empresa/CrearEmpresa';
import CrearProyecto from 'pages/proyecto/CrearProyecto';
import CrearUsuario from 'pages/usuario/CrearUsuario';
import CrearIssue from 'pages/issue/CrearIssue';
import Login from 'pages/Login';
import Proyectos from 'pages/proyecto/Proyectos';
import PublicLayout from 'layouts/PublicLayout';
import './styles/globals.css';
import Issues from 'pages/issue/Issues';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='' element={<Login />} />
      <Route path='/' element={<PublicLayout />}>
        <Route path='CrearEmpresa' element={<CrearEmpresa />} />
        <Route path='CrearProyecto' element={<CrearProyecto />} />
        <Route path='CrearUsuario' element={<CrearUsuario />} />
        <Route path='CrearIssue' element={<CrearIssue />} />
        <Route path='Proyectos' element={<Proyectos />} />
        <Route path='Issues' element={<Issues />} />
        <Route path='Proyectos' element={<Proyectos />} />
        <Route path='Proyectos' element={<Proyectos />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
