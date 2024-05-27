import Blogs from "../components/Blogs.jsx"
import Container from "../components/Container.jsx"
import datos from "../Assets/datos.json"

const Blog = () => {
  return (
    <>
    <h1>Blog</h1>
        <Container>
          {datos.map( dato => 
            <Blogs
              imagen={dato.imagen}
              titulo={dato.titulo}
              fecha={dato.fecha}
              contenido={dato.contenido}
            />
          )}
        </Container>
    </>
  )
}

export default Blog
