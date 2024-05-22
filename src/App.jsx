import {BrowserRouter as Router, Routes} from "react-router-dom"
import NavBar from "./components/NavBar.jsx"
import Inicio from "./Screen/Inicio.jsx"
import Blog from "./components/Blogs.jsx"
import Container from "./components/Container.jsx"
import FooterVlog from "./components/FooterVlog.jsx"
import Categorie from "./components/Categorie.jsx"


export default function App() {
  return (
    <>
      <div className="bg-slate-800 min-h-screen">
        <NavBar/>
        <Inicio/>
        {/* <Container>
          <Blog/>
          <Blog/>
          <Blog/>
        </Container> */}
        <FooterVlog>
          <Categorie/>
          <Categorie/>
          <Categorie/>
          <Categorie/>
        </FooterVlog>
      </div>
    </>
  )
}
