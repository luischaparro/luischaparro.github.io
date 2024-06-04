import logo from "../Assets/logo-icon.avif";
import alvaro_sarmiento from "../Assets/ImagenesAVIF/alvaro-sarmiendo.avif";
import firma_pedro_santos from "../Assets/ImagenesAVIF/firma-Pedro-de-los-Santos-Meneses.avif";


const Inicio = () => {
  return (
    <div className="text-center text-sm font-semibold bg-slate-800">
      <main
        className="bg-[linear-gradient(to_bottom,rgba(255,255,0,0.5),rgba(0,0,0,0.5)),url('/src/Assets/ImagenesAVIF/section3.avif')] bg-cover 
      flex flex-wrap w-full h-screen justify-around items-center
      md:flex-nowrap bg-fixed"
      >
        <p className="text-[#f8f4e1] md:max-w-md md:text-base">
          El Centro de Historia “Álvaro Sarmiento Santander” se vincula a la
          conmemoración de los 241 años de la firma de la erección de la
          vice-parroquia de Pinchote, dando a conocer la firma y rúbrica de uno
          de sus más ilustres personajes, “Pedro de los Santos Meneses”, que,
          gracias a su motivación, decisión y gestión, logró que este hermoso
          terruño paradisíaco, existiera.
        </p>

        <img
          className="w-[350px] h-[200px] 
      md:w-[500px] md:h-[260px] rounded duration-150 hover:scale-125"
          src={firma_pedro_santos}
          alt="firma de Pedro de los Santos Meneses"
        />
      </main>

      <section
        className="bg-center bg-no-repeat bg-cover bg-fixed 
        w-full h-screen justify-around items-center
        flex flex-wrap-reverse
        bg-[linear-gradient(to_bottom,rgba(0,200,0,0.3),rgba(0,0,0,0.5)),url('/src/Assets/ImagenesAVIF/section2.avif')]
        "
      >
        <img
          className="w-[120px] h-[165px] 
          md:w-[300px] md:h-[425px] rounded duration-150 hover:scale-125"
          src={alvaro_sarmiento}
          alt="Cuadro de Álvaro Sarmiento Santander"
        />
        <p className="text-[#f8f4e1] md:max-w-md md:text-base">
          Álvaro Sarmiento Santander, nacido en 1944 en Charalá-Santander, fue
          abogado con un postgrado en Derecho Laboral y Seguridad Social de la
          Universidad Externado de Colombia. Ejerció como juez y funcionario
          público. Dedicó más de 40 años a la historia, asesorando la obra
          "Concejo de Bogotá 450 años" y otros programas institucionales.
          Durante más de 11 años, investigó en el Archivo General de la Nación
          sobre temas como la Revolución de los Comuneros y la historia
          santandereana, reflejados en sus libros "Batalla Perdida" (2010) y
          "Del infierno a la gloria" (2017), además de escritos inéditos. Fue
          ponente en la Cátedra Comunera y la Cátedra de Santandereanidad, y
          escribió para R.C.N. radio sobre la Batalla del Pienta. Co-fundador
          del Centro de Historia de Pinchote, dejó un importante legado
          documental.
        </p>
      </section>

      <section
        className="bg-center bg-no-repeat bg-cover bg-fixed 
        w-full h-screen flex flex-wrap justify-around items-center 
        md:flex-nowrap
        clip-path-style
        bg-[linear-gradient(to_bottom_right,rgba(139,0,0,0.5),rgba(0,0,0,0.5)),url('/src/Assets/ImagenesAVIF/section1.avif')]"
      >
        <p className="text-[#f8f4e1] md:max-w-md md:text-base rounded">
          El Centro de Historia de Pinchote Álvaro Sarmiento Santander es un
          lugar ideal para aprender sobre la rica historia y cultura del
          municipio. Es una visita obligada para cualquier persona que esté
          interesada en conocer más sobre el pasado de Colombia.
        </p>

        <img
          className="w-[300px] h-[300px]
          md:w-[300px] md:h-[300px] duration-150 hover:scale-125 rounded-full"
          src={logo}
          alt="Logo del centro de historia de Pinchote."
        />
      </section>
    </div>
  );
};

export default Inicio;
