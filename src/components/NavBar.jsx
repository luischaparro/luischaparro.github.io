import { Link, Outlet } from "react-router-dom";
import { FooterVlog } from "./FooterVlog";
import { Categorie } from "./Categorie";
import logo from "../Assets/logo-icon.avif";

const NavBar = () => {
  const hovColBtnLink =
    "hover:text-amber-600 cursor-pointer ease-linear duration-300";
  return (
    <>
      <header className="text-white body-font bg-slate-800 px-4">
        <div className="mx-auto flex flex-wrap py-5 md:px-16 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-green-400 mb-4 md:mb-0">
            <img
              className="max-w-10 rounded-full"
              src={logo}
              alt="Centro Historico De Pinchote logo"
            />
            <span className="ml-3 text-xl text-rose-50">
              Centro Historico De Pinchote
            </span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center nav">
            <Link to="" className={hovColBtnLink}>
              Inicio
            </Link>
            <Link to="/blog" className={hovColBtnLink}>
              Blog
            </Link>
            <Link to="/nosotros" className={hovColBtnLink}>
              Sobre Nosotros
            </Link>
            <Link to="/documentacion" className={hovColBtnLink}>
              Documentación
            </Link>
            <Link to="/contacto" className={hovColBtnLink}>
              Contacto
            </Link>
          </nav>
        </div>
      </header>

      <Outlet />

      <FooterVlog>
        <Categorie
          categorie="Horario de atención"
          text="8:00 am a 5:00 pm"
          link="/paginaestatica/nosotros"
        />
        <Categorie
          categorie="Enlaces a documentación"
          text="Documentos generados por el Centro Histórico de Pinchote"
          link='/paginaestatica/documentacion'
        />
      </FooterVlog>
    </>
  );
};

export { NavBar };
