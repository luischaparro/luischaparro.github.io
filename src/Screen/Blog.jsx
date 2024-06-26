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
        console.log(res);
        setLoading(false);
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
            <BlogsLoading />
            <BlogsLoading />
            <BlogsLoading />
          </>
        )}
        {data.map((el) => (
          <Blogs
            imagen={`data:image/jpeg;base64,${el.img}`}
            titulo={el.title}
            fecha={el.date.slice(0,10)}
            contenido={el.body}
          />
        ))}
      </Container>
    </>
  );
};

export { Blog };
