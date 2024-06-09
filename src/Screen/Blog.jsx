import Blogs from "../components/Blogs.jsx";
import Container from "../components/Container.jsx";
import datos from "../Assets/datos.json";
// imagen temporal
import img from "../Assets/img.js";
import { useEffect, useState } from "react";

const api = "https://chpapi.vercel.app/blog";
const imgSrc = `data:image/jpeg;base64,${img}`;

const Blog = () => {
  // Estado que guarde los blogs
  let [data, setData] = useState([]);
  // Fecth a la API de los blog
  useEffect(() => {
    console.log("Haciendo fetch");
    fetch(api, { headers: { "Content-Type": "application/json" } })
      .then((res) => res.json())
      .then((res) => {
        // Cambiando el estado
        console.log(res);
        setData(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Container>
        {data.map((dato) => (
          <Blogs
            imagen={`data:image/jpeg;base64,${dato.img}`}
            titulo={dato.title}
            fecha={dato.date}
            contenido={dato.body}
          />
        ))}
      </Container>
    </>
  );
};

export default Blog;
