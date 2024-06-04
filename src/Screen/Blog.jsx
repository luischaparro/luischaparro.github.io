import Blogs from "../components/Blogs.jsx"
import Container from "../components/Container.jsx"
import datos from "../Assets/datos.json"
// imagen temporal
import img from "../Assets/img.js"
const imgSrc = `data:image/jpeg;base64,${img}`

const Blog = () => {
  return (
    <>
      <Container>
        {datos.map( dato => 
          <Blogs
            imagen={imgSrc}
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
