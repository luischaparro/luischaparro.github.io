const Nosotros = () => {
  return (
    <section
      className="bg-center bg-no-repeat bg-cover bg-fixed w-full h-screen flex flex-col
      justify-around items-center bg-[url('/src/Screen/Assets/section4.JPG')]"
    >
      <h1 className="text-5xl font-extrabold dark:text-white">Misión</h1>
      <p
        className="text-sm font-extrabold w-3/4 text-[#f8f4e1]
        md:w-3/4 md:text-lg p-2
        drop-shadow-[0_2px_3px_rgba(0,0,0,0.9)]"
      >
        La misión de la Fundación Centro de Historia de Pinchote es fomentar el
        desarrollo de las ciencias sociales y humanas, especialmente la
        investigación y divulgación del acervo histórico, documental y
        patrimonial de Colombia desde el municipio de Pinchote y el departamento
        de Santander, integrando la interdisciplinariedad con diferentes
        escuelas en el estudio del hombre, su entorno físico y cultural, así
        mismo, ejecutar o participar en proyectos que tengan pertinencia con su
        objeto.
      </p>
      <h1 className="text-5xl font-extrabold dark:text-white">Visión</h1>
      <p
        className="text-sm font-extrabold w-3/4 text-[#f8f4e1]
        md:w-3/4 md:text-lg p-2
        drop-shadow-[0_2px_3px_rgba(0,0,0,0.9)]"
      >
        El Centro de Historia de Pinchote, será una fundación de carácter
        histórica, fortalecida en la proyección académica hacia la comunidad con
        trayectoria en investigación y protagonista de los procesos sociales en
        Colombia.
      </p>
    </section>
  );
};

export default Nosotros;
