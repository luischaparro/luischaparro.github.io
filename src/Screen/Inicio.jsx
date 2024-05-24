import logo from "./Assets/logo.png"

const Inicio = () => {
  return (
    <div>
      <main className="bg-center bg-no-repeat bg-cover bg-[url('/src/Screen/Assets/fondo_inicio.jpg')] 
      w-full h-screen items-center flex flex-col justify-evenly md:flex-row md:justify-around
      ">
        <p className="w-3/4 text-[#f8f4e1] font-extrabold
        md:w-1/4 md:h-1/4
        drop-shadow-[0_2px_3px_rgba(0,0,0,0.9)]">
          El Centro de Historia de Pinchote Álvaro Sarmiento Santander es un
          lugar ideal para aprender sobre la rica historia y cultura del
          municipio. Es una visita obligada para cualquier persona que esté
          interesada en conocer más sobre el pasado de Colombia.
        </p>

        <img
          className="w-[200px] h-[200px] rounded-full
          md:w-[300px] md:h-[300px]"
          src={logo}
          alt="Logo del centro de historia de Pinchote."
        />
      </main>

      <section className="bg-center bg-no-repeat bg-cover bg-fixed w-full h-screen flex 
      justify-around items-center bg-[url('/src/Screen/Assets/fondo2.jpg')]">
        <p className="font-extrabold w-3/4 text-[#f8f4e1] font-extrabold
        md:w-1/4
        drop-shadow-[0_2px_3px_rgba(0,0,0,0.9)]">
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
