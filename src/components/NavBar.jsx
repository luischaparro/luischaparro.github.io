const NavBar = () => {
  const hovColBtnLink = "mr-5 hover:text-amber-600 cursor-pointer"
    return (
      <>
        <header className="text-white body-font">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-green-400 mb-4 md:mb-0">
            <img className="max-w-10 rounded-full" src="https://scontent.fbga1-4.fna.fbcdn.net/v/t39.30808-6/302011729_106309328877032_6858142748722646921_n.png?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHo8qj5nWjMVJb6RvkvUT-wgPgdeXmHl02A-B15eYeXTY7ljh1RsEGFUSruIZS8yFxUg4GuNxFr8JLcY9IdwEHa&_nc_ohc=oL5vfGiSPecQ7kNvgEPK7KZ&_nc_ht=scontent.fbga1-4.fna&oh=00_AYDvCeteYOXNF58wEjWmbGB4JvUnscawlRi0Aq4FehF1Tg&oe=6650AD09" alt="" />
              <span className="ml-3 text-xl">Centro Historico De Pinchote</span>
            </a>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
              <a className={hovColBtnLink}>Inicio</a>
              <a className={hovColBtnLink}>Vlog</a>
              <a className={hovColBtnLink}>Sobre Nosotros</a>
              <a className={hovColBtnLink}>Contacto</a>
            </nav>
            <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 text-black">Iniciar
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </header>
      </>
    )
  }
  
  export default NavBar