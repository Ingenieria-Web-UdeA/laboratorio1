/* eslint-disable arrow-body-style */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react';
import useFormData from 'hooks/useFormData';
import Input from 'components/Input';
import ButtonForm from 'components/ButtonForm';

const CrearProyecto = () => {
    const { form, updateFormData } = useFormData();

    const submitForm = (e) => {
      e.preventDefault();
    };
  
    return (
      <div className='flex flex-col p-10 items-center'>
        <h1 className='text-2xl font-bold text-gray-800 my-4'>
          Ingresa la información del proyecto
        </h1>
        <div className='flex-col'> 
          <form
            ref={form}
            onChange={updateFormData}
            onSubmit={submitForm}
            className='flex flex-col gap-y-10 items-center'
          >
            <div className='flex flex-col m-8'>
              <Input
                text='Nombre'
                name='nombre'
                placeholder='Ingresa nombre de la empresa'
                type='text'
              />
                <Input
                text='Descripción'
                name='nombre'
                placeholder='Ingresa nombre de la empresa'
                type='search'
              />
                <Input
                text='Empresa'
                name='nombre'
                placeholder='Ingresa nombre de la empresa'
                type='search'
              />
            </div>
            <ButtonForm text='Crear proyecto'/>
          </form>
        </div>
        
      </div>
    );
};

export default CrearProyecto;