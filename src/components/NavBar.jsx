import { Link, Outlet } from "react-router-dom"
import FooterVlog from "./FooterVlog"
import Categorie from "./Categorie"
import logo from "../../public/logo-icon.png"

const NavBar = () => {
  const hovColBtnLink = "mr-5 hover:text-amber-600 cursor-pointer"
    return (
      <>
        <header className="text-white body-font bg-slate-800">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-green-400 mb-4 md:mb-0">
            <img className="max-w-10 rounded-full" src={logo} alt="Centro Historico De Pinchote logo" />
              <span className="ml-3 text-xl text-rose-50">Centro Historico De Pinchote</span>
            </a>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
              <Link to="/paginaestatica" className={hovColBtnLink}>Inicio</Link>
              <Link to="/paginaestatica/blog" className={hovColBtnLink}>Blog</Link>
              <Link to="/paginaestatica/nosotros" className={hovColBtnLink}>Sobre Nosotros</Link>
              <Link to="/paginaestatica/documentacion" className={hovColBtnLink}>Documentacion</Link>
              <Link to="/paginaestatica/contacto" className={hovColBtnLink}>Contacto</Link>
            </nav>
            <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 text-black">Iniciar
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </header>

        <Outlet/>

        <FooterVlog>
          <Categorie/>
          <Categorie/>
          <Categorie/>
          <Categorie/>
        </FooterVlog>
      </>
    )
  }
  
  export default NavBar