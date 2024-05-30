import { Link, Outlet } from "react-router-dom"
import FooterVlog from "./FooterVlog"
import Categorie from "./Categorie"
import logo from "../Assets/logo-icon.png"

const NavBar = () => {
  const hovColBtnLink = "mr-5 hover:text-amber-600 cursor-pointer ease-linear duration-300"
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