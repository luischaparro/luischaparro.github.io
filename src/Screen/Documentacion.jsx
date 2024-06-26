import doc_1 from "../Assets/PDF/1. ACTA DE CONSTITUCION 15 de febrero de 2022.pdf";
import doc_2 from "../Assets/PDF/2. Proyectos en curso y finalizados 2023.pdf";
import doc_3 from "../Assets/PDF/3. DECLARACION RENTA 2023 FUNDACION CENTRO DE HISTORIA DE PINCHOTE.pdf";
import doc_4 from "../Assets/PDF/4. ESTADOS FINANCIEROS 2023 CENTRO DE HISTORIA DE PINCHOTE.pdf";
import doc_5 from "../Assets/PDF/5. ACTA 2 DE ASAMBLE GENERAL 23 marzo 2024.pdf";
import doc_6 from "../Assets/PDF/6. Cumplimiento de requisitos CHP 15 de abril de 2024.pdf";
import doc_7 from "../Assets/PDF/7. Certificado de no inhabilidades 15 de abril 2024.pdf";
import doc_8 from "../Assets/PDF/8. ACTA 2 RENOVACION DIRECTIVOS Y ESTATUTOS DEFINITIVOS 7 de junio 2024.pdf";
import doc_9 from "../Assets/PDF/9. ESTATUTOS ACTUALIZADOS.pdf";
import doc_10 from "../Assets/PDF/10. CERT CAMARA COMERCIO EXISTENCIA Y REPRESENTACION LEGAL 17 de junio 2024.pdf"
import doc_11 from "../Assets/PDF/11. FORMATO 52451002361684.pdf"
 
const docs = [
  doc_1,
  doc_2,
  doc_3,
  doc_4,
  doc_5,
  doc_6,
  doc_7,
  doc_8,
  doc_9,
  doc_10,
  doc_11
].reverse();

const Documentli = (props) => {
  return (
    <li className="my-10">
      <a className="bg-black rounded-full p-4" target="_blank" href={props.src}>
        {props.name}
      </a>
    </li>
  );
};

const Documentacion = () => {
  return (
    <>
      <div
        className={
          "flex flex-col items-center justify-center w-full h-full text-[#f8f4e1] bg-center bg-cover overflow-y-scroll"
        }
      >
        <h1 className=" font-extrabold text-black m-4">Documentación</h1>
        <ol className="list-decimal list-inside">
          {docs.map((doc) => {
            return (
              <Documentli
                name={doc.replaceAll("%20", " ").slice(19, -4)}
                src={doc}
              />
            );
          })}
        </ol>
      </div>
    </>
  );
};

export { Documentacion };
