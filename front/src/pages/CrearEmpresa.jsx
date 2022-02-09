import React from 'react';
import useFormData from 'hooks/useFormData';
import Input from 'components/Input';

const CrearEmpresa = () => {
  const { form, updateFormData } = useFormData();

  const submitForm = (e) => {
    e.preventDefault();
  };

  return (
    <div className='flex flex-col p-10 items-center'>
      <h1 className='text-2xl font-bold text-gray-800 my-4'>
        Ingresa tu información personal
      </h1>
      <form
        ref={form}
        onChange={updateFormData}
        onSubmit={submitForm}
        className='flex flex-col gap-y-10 items-center'
      >
        <div className='flex'>
          <Input
            text='Nombre'
            name='nombre'
            placeholder='Ingresa nombre de la empresa'
            type='text'
          />
        </div>
        <button className='button-submit' type='submit'>
          Enviar Formulario
        </button>
      </form>
    </div>
  );
};

export default CrearEmpresa;
