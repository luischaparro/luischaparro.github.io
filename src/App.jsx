import { HashRouter, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar.jsx"
import Inicio from "./Screen/Inicio.jsx"
import Blog from "./Screen/Blog.jsx"
import Nosotros from "./Screen/Nosotros.jsx"
import Documentacion from "./Screen/Documentacion.jsx"
import Contacto from "./Screen/Contacto.jsx"
import NoFound from "./Screen/NoFound.jsx"
import "./Assets/Botones.css"

export default function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="" element={<NavBar/>}>
            <Route path="" element={<Inicio/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/nosotros" element={<Nosotros/>}/>
            <Route path="/documentacion" element={<Documentacion/>}/>
            <Route path="/contacto" element={<Contacto/>}/>
          </Route>
          <Route path="*" element={<NoFound/>}/>
        </Routes>
      </HashRouter>
    </>
  )
}
