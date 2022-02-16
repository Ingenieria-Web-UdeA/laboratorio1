/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable prettier/prettier */
import Issues from 'pages/issue/Issues';
import React from 'react';


const proyecto = { name: 'app', empresa: 'bit', issues: 4, develop: 10, clientes: 30, descripcion: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.' }

const DetallesProyecto = () => (
        <div className='flex flex-col w-full'>
           <div className='flex flex-row p-10'>
               <div className='flex flex-col'>
                  <label>{proyecto.name}</label> 
                  <label>{proyecto.empresa}</label>
                  <div className='flex flex-row'>
                      <button type='button'>Editar información</button>
                      <button type='button'>Eliminar Proyecto</button>
                  </div> 
               </div>
               <p>{proyecto.descripcion}</p>
           </div>

           <Issues/>
           
        </div>
    );

export default DetallesProyecto;