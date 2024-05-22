import React from 'react'
import logo from "./Assets/logo.png"

const Inicio = () => {
  return (
    <div className=''>
      <main className="bg-[url('/src/Screen/Assets/fondo_inicio.jpg')] flex w-full h-screen justify-around items-center">
        <p className="w-1/4 h-1/4 text-[#f8f4e1] font-extrabold">
          El Centro de Historia de Pinchote Álvaro Sarmiento Santander es un
          lugar ideal para aprender sobre la rica historia y cultura del
          municipio. Es una visita obligada para cualquier persona que esté
          interesada en conocer más sobre el pasado de Colombia.
        </p>

        <img
          className="w-1/4 h-2/4 rounded-full"
          src={logo}
          alt="Logo del centro de historia de Pinchote."
        />
      </main>

      <section className="bg-center bg-no-repeat bg-cover bg-fixed w-full h-screen flex 
      justify-around items-center bg-[url('/src/Screen/Assets/fondo2.jpg')]">
        <p className="w-1/4 h-1/4 text-[#f8f4e1] font-extrabold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          ullam aliquid ad. Harum dignissimos laudantium, officiis delectus ea
          numquam rem fugiat, suscipit nihil ipsa debitis, tenetur voluptate
          commodi facilis exercitationem!
        </p>
      </section>
    </div>
  )
}

export default Inicio
