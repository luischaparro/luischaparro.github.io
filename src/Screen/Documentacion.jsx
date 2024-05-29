import Acta01 from "../Assets/Acta001-ActaDeConstitución.pdf"
import CHP from "../Assets/CumplimientoDeRequisitosCHP.pdf"
import DeclaracionRenta2024 from "../Assets/DECLARACIONRENTA2024.pdf"
import EstadoFinanciero2023 from "../Assets/ESTADOSFINANCIEROS2023.pdf"
import ProyectosCursoFinalizados from "../Assets/ProyectosEnCursoYFinalizados.pdf"

const Documentacion = () => {
  return (
    <>
        <div className="flex flex-col items-center justify-center w-full h-screen bg-[#535C91] text-[#f8f4e1]">
            <h1 className="drop-shadow-[0_2px_3px_rgba(0,0,0,0.9)] font-extrabold m-4">Documentacion</h1>
            <ol className="list-decimal list-inside">
                <li className="my-4">
                    <a className="bg-black rounded-full p-2" href={Acta01}>Acta001 - Acta De Constitución</a>
                </li>
                <li className="my-4">
                    <a className="bg-black rounded-full p-2" href={CHP}>Cumplimiento De Requisitos CHP</a>
                </li>
                <li className="my-4">
                    <a className="bg-black rounded-full p-2" href={DeclaracionRenta2024}>Declaracion Renta De 2024</a>
                </li>
                <li className="my-4">
                    <a className="bg-black rounded-full p-2" href={EstadoFinanciero2023}>Estado Financiero 2023</a>
                </li>
                <li>
                    <a className="bg-black rounded-full p-2" href={ProyectosCursoFinalizados}>Proyectos En Curso y Finalizados</a>
                </li>
            </ol>
        </div>
    </>
  )
}

export default Documentacion
