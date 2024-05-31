import { useState } from "react";
import Acta01 from "../Assets/Acta001-ActaDeConstitución.pdf";
import CHP from "../Assets/CumplimientoDeRequisitosCHP.pdf";
import DeclaracionRenta2024 from "../Assets/DECLARACIONRENTA2024.pdf";
import EstadoFinanciero2023 from "../Assets/ESTADOSFINANCIEROS2023.pdf";
import ProyectosCursoFinalizados from "../Assets/ProyectosEnCursoYFinalizados.pdf";

const Documentacion = () => {
  let images = {
    default: "bg-[#f5f6fa]",
    acta01:
      "bg-[url('/src/Screen/Assets/docs_imgs/Acta001-ActaDeConstitución.jpg')]",
    chp: "bg-[url('/src/Screen/Assets/docs_imgs/CumplimientoDeRequisitosCHP.jpg')]",
    DeclaracionRenta2024:
      "bg-[url('/src/Screen/Assets/docs_imgs/DECLARACIONRENTA2024.jpg')]",
    EstadoFinanciero2023:
      "bg-[url('/src/Screen/Assets/docs_imgs/ESTADOSFINANCIEROS2023.jpg')]",
    ProyectosCursoFinalizados:
      "bg-[url('/src/Screen/Assets/docs_imgs/ProyectosEnCursoYFinalizados.jpg')]",
  };
  let [docBg, setdocBg] = useState(images.default);
  return (
    <>
      <div
        className={
          "flex flex-col items-center justify-center w-full h-screen text-[#f8f4e1] " +
          docBg +
          " bg-center bg-cover"
        }
      >
        <h1 className=" font-extrabold text-black m-4">Documentación</h1>
        <ol className="list-decimal list-inside">
          <li
            className="my-10"
            onMouseEnter={() => {
              setdocBg(images.acta01);
            }}
            onMouseLeave={() => {
              setdocBg(images.default);
            }}
          >
            <a className="bg-black rounded-full p-4" href={Acta01}>
              Acta001 - Acta De Constitución
            </a>
          </li>
          <li
            className="my-10"
            onMouseEnter={() => {
              setdocBg(images.chp);
            }}
            onMouseLeave={() => {
              setdocBg(images.default);
            }}
          >
            <a className="bg-black rounded-full p-4" href={CHP}>
              Cumplimiento De Requisitos CHP
            </a>
          </li>
          <li
            className="my-10"
            onMouseEnter={() => {
              setdocBg(images.DeclaracionRenta2024);
            }}
            onMouseLeave={() => {
              setdocBg(images.default);
            }}
          >
            <a
              className="bg-black rounded-full p-4"
              href={DeclaracionRenta2024}
            >
              Declaracion Renta De 2024
            </a>
          </li>
          <li
            className="my-10"
            onMouseEnter={() => {
              setdocBg(images.acta01);
            }}
            onMouseLeave={() => {
              setdocBg(images.EstadoFinanciero2023);
            }}
          >
            <a
              className="bg-black rounded-full p-4"
              href={EstadoFinanciero2023}
            >
              Estado Financiero 2023
            </a>
          </li>
          <li
            onMouseEnter={() => {
              setdocBg(images.ProyectosCursoFinalizados);
            }}
            onMouseLeave={() => {
              setdocBg(images.default);
            }}
          >
            <a
              className="bg-black rounded-full p-4"
              href={ProyectosCursoFinalizados}
            >
              Proyectos En Curso y Finalizados
            </a>
          </li>
        </ol>
      </div>
    </>
  );
};

export default Documentacion;
