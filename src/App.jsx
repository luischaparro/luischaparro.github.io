import { Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar.jsx"
import Inicio from "./Screen/Inicio.jsx"
import Blog from "./Screen/Blog.jsx"
import Nosotros from "./Screen/Nosotros.jsx"
import Documentacion from "./Screen/Documentacion.jsx"
import Contacto from "./Screen/Contacto.jsx"
import "./Assets/Botones.css"

export default function App() {
  return (
    <>
      <Routes>
        <Route exact path="/paginaestatica" element={<NavBar/>}>
          <Route exact path="/paginaestatica/" element={<Inicio/>}/>
          <Route path="/paginaestatica/blog" element={<Blog/>}/>
          <Route path="/paginaestatica/nosotros" element={<Nosotros/>}/>
          <Route path="/paginaestatica/documentacion" element={<Documentacion/>}/>
          <Route path="/paginaestatica/contacto" element={<Contacto/>}/>
          <Route path="*" element={<h1 className="w-full h-screen justify-center">No encontrado</h1>}/>
        </Route>
      </Routes>
    </>
  )
}
