import MSG from "../assets/Icons/Logo.jpg";
import { Button } from "../Components/Button";
//-------------------------------------
import { Link } from 'react-router-dom'
//-----------------------------------
import Supplier from '../assets/Image/Provider.png'
import { createProviderRequest } from '../api/user.api.js';
import { useState } from "react";
export const Provider = () => {
  const [nombre, setNombre] = useState('')
  const [empresa, setEmpresa] = useState('')
  const [servicio, setServicio] = useState('')
  const [tarifa, setTarifa] = useState('')
  const [condicionP, setCondicionP] = useState('')
  const [telefono, setTelefono] = useState('')
  const [correo, setCorreo] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = createProviderRequest({
        nombre,
        nombre_empresa: empresa,
        tipo_servicio: servicio,
        tarifa,
        condiciones_pago: condicionP,
        n_telefono: telefono,
        s_email: correo
      })
      console.log(response)
    } catch (e) {
      console.error(e)
    }
  }
  return (
    <div className=' bg-home py-4 xl:py-20'>
      <div className="flex flex-col  items-center mx-4  my-2 p-5 bg-white xl:mx-20 rounded-xl h-auto ">
        <header className=' w-full flex flex-col items-center xl:flex-row xl:justify-around '>
          <Link to='/'><img src={MSG} alt="No found" className='xl:flex w-44' /></Link>
          <div className='w-full text-center p-1 pb-2 xl:hidden'>
            <p className='text-2xl font-bold'>Crea una cuenta como turista </p>
            <p className='text-base font-bold text-gray-400'>Ingresa tu informacion</p>
          </div>
        </header>
        <main className="Main py-10 mb-5 px-10 rounded-xl xl:w-full xl:grid xl:grid-cols-2 xl:border-none">
          <div className='hidden xl:flex w-full justify-center items-center'>
            <img src={Supplier} alt="" className='w-11/12 block' />
          </div>
          <form onSubmit={handleSubmit} action="" className="Form w-full flex flex-col overflow-y-auto xl:border xl:border-black xl:max-h-none xl:px-14 xl:py-4 xl:rounded-2xl">
            <div className='w-full text-center p-10 pb-2 hidden xl:flex xl:flex-col'>
              <p className='text-2xl font-bold'>Crea una cuenta como proveedor </p>
              <p className='text-base font-bold text-gray-400'>Ingresa tu informacion</p>
            </div>
            <label htmlFor="">Nombre</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Ingrese su Nombre"
              className="border border-gray-400 w-full p-3 rounded-xl pl-3 mb-5 my-3 outline-none"
            />
            <label htmlFor="">Nombre de la empresa (Opcional)</label>
            <input
              type="text"
              value={empresa}
              onChange={(e) => setEmpresa(e.target.value)}
              placeholder="ingrese el nombre de la empresa"
              className="border border-gray-400 w-full p-3 rounded-xl pl-3 mb-5 my-3 outline-none"
            />
            <label htmlFor="" className="">
              <p>Tipo de servicio</p>
              <input
                type="text"
                value={servicio}
                onChange={(e) => setServicio(e.target.value)}
                placeholder="Seleccione un tipo de servicio"
                className="border border-gray-400 w-full p-3 rounded-xl pl-3 mb-5 my-3 outline-none"
              />
            </label>
            <label htmlFor="" className="">
              <p>Tarifas</p>
              <input
                type="text"
                value={tarifa}
                onChange={(e) => setTarifa(e.target.value)}
                placeholder="Ingrese su tarifa"
                className="border border-gray-400 w-full p-3 rounded-xl pl-3 mb-5 my-3 outline-none"
              />
            </label>
            <label htmlFor="" className="">
              <p>Condiciones de pago</p>
              <input
                type="text"
                value={condicionP}
                onChange={(e) => setCondicionP(e.target.value)}
                placeholder="Seleccione un metodo de pago"
                className="border border-gray-400 w-full p-3 rounded-xl pl-3 mb-5 my-3 outline-none"
              />
            </label>

            <label htmlFor="">Numero de telefono</label>
            <input
              type="text"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              placeholder="ingrese su numero de telefono"
              className="border border-gray-400 w-full p-3 rounded-xl pl-3 mb-5 my-3 outline-none"
            />
            <label htmlFor="">Correo</label>
            <input
              type="text"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              placeholder="ingrese su correo"
              className="border border-gray-400 w-full p-3 rounded-xl pl-3 mb-5 my-3 outline-none"
            />
            <div className="text-center">
              <Button
                label="Registrate"
                style={{
                  background: "#9ED4C6",
                  border: "1px solid #000",
                  color: "#000",
                }}
              />
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};
