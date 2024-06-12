import { useEffect, useState } from "react";

import { Container } from "../components/Container.jsx";
import { Blogs } from "../components/Blogs.jsx";
import { BlogsLoading } from "../components/BlogsLoading.jsx";


const Blog = () => {

  const [loading, setLoading] = useState(true);

  const api = "https://chpapi.vercel.app/blog";

  // Estado que guarde los blogs
  const [data, setData] = useState([]);

  // Fecth a la API de los blog
  useEffect(() => {
    console.log("Haciendo fetch");
    fetch(api, { headers: { "Content-Type": "application/json" } })
      .then((res) => res.json())
      .then((res) => {
        // Cambiando el estado
        setData(res);
        setLoading(false)
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Container>
        {loading && (
          <>
            <BlogsLoading/>
            <BlogsLoading/>
            <BlogsLoading/>
          </>
        )}
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

export { Blog };
