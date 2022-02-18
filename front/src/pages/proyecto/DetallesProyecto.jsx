/* eslint-disable spaced-comment */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable prettier/prettier */
import axios from 'axios';
import ItemIssue from 'components/ItemIssue';
import Issues from 'pages/issue/Issues';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';




const DetallesProyecto = () => {
    const proyecto1 = { name: 'app', empresa: 'bit', issues: 4, develop: 10, clientes: 30, descripcion: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.' }
    const { id } = useParams();
    const [nombre, setNombre] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [descripción, setDescripción] = useState('');
    const [issues, setIssue] = useState([]);

    const getAllissue = async () => {
        const options = {
            method: 'GET',
            url: 'http://localhost:4000/issues',
            headers: { 'Content-type': 'application/json' },
            data: id
        };

        const respuesta = await axios.request(options);
        setIssue(respuesta.data.issues);
    };


    const getbyidProyecto = async () => {
        const options = {
            method: 'GET',
            url: 'http://localhost:4000/proyectos',
            headers: { 'Content-type': 'application/json' },
            data: id
        };

        const respuesta = await axios.request(options);
    };

    useEffect(() => {
        // getProyecto()
        setIssue([{
            name: 'app',
            proyecto: 'bit',
            developer: 4,
            categoria: 10,
            priorida: 30,
            status: 30,
        }])
        setNombre('Proyecto1')
    }, [])

    return (
        <div className='flex flex-col w-full'>
            <div className='flex justify-center'>
                    <h1 className='text-4xl font-bold text-gray-800 my-10  font-sans'>
                        {nombre}
                    </h1>
                    <p>
                        {descripción}
                    </p>
                
            </div>

            <div className='flex flex-col pt-8 px-16  w-full'>
                <div className='flex justify-between w-full items-center'>
                    <span className='block text-2xl font-bold'>Issues</span>
                    <div className='flex flex-row items-center gap-4'>
                        <label
                            className='block text-gray-700 text-xl font-bold'
                            htmlFor='buscar'
                        >
                            Buscar
                        </label>

                        <input
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            name='Buscar'
                            type='search'
                            placeholder='Issue'
                        />
                    </div>
                </div>
                <div className='flex flex-col w-full gap-[2px] px-2 py-10'>
                    <div className=' flex flex-row items-center w-full h-[50px] px-3 justify-between'>
                        <span>Nombre de Issue</span>
                        <span className='fixed left-[500px]'>Proyecto</span>
                        <div className='flex flex-row justify-between items-center w-[1000px] pr-20'>
                            <span>Developer</span>
                            <span>Categoria</span>
                            <span>Prioriada</span>
                            <span>Status</span>
                        </div>
                    </div>
                    <div className=' flex items-center rounded-md border-colorNegro border-2 w-full h-[50px] px-3'>
                        <span>Adregar Issue</span>
                    </div>


                    {issues.map((issue) => (
                        <ItemIssue issue={issue} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default DetallesProyecto;