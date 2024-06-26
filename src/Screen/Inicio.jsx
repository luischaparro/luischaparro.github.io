import { motion } from "framer-motion";
import logo from "../Assets/logo-icon.avif";
import alvaro_sarmiento from "../Assets/ImagenesAVIF/alvaro-sarmiendo.avif";
import firma_pedro_santos from "../Assets/ImagenesAVIF/firma-Pedro-de-los-Santos-Meneses.avif";

const Inicio = () => {
  return (
    <div className="text-center text-sm font-semibold bg-slate-800">
      <motion.main
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{delay: .5}}
        className="bg-[linear-gradient(to_left,rgba(255,255,0,0.5),rgba(0,0,0,0.6)),url('/src/Assets/ImagenesAVIF/main.JPG')] bg-cover 
      flex flex-wrap w-full h-screen justify-around items-center
      md:flex-nowrap bg-fixed"
      >
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{delay: .5}}
          className="text-[#ffefef] md:max-w-md md:text-base"
        >
          El “sitio de Pinchote” fue erigido como vice-parroquia, en el año de
          1782, gracias a la motivación, decisión y gestión de dos de sus más
          ilustres representantes Pedro de los Santos Meneses y Antonio José
          Villamil.
        </motion.p>

        <img
          className="w-[350px] h-[200px] 
      md:w-[500px] md:h-[260px] rounded duration-150 hover:scale-125"
          src={firma_pedro_santos}
          alt="firma de Pedro de los Santos Meneses"
        />
      </motion.main>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{delay: .5}}
        className="bg-center bg-no-repeat bg-cover bg-fixed 
        w-full h-screen justify-around items-center
        flex flex-wrap-reverse
        bg-[linear-gradient(to_left,rgba(0,200,0,0.3),rgba(0,0,0,0.5)),url('/src/Assets/ImagenesAVIF/section3.avif')]
        "
      >
        <img
          className="w-[120px] h-[165px] 
          md:w-[300px] md:h-[425px] rounded duration-150 hover:scale-125"
          src={alvaro_sarmiento}
          alt="Cuadro de Álvaro Sarmiento Santander"
        />
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{delay: .5}}
          className="text-[#f8f4e1] md:max-w-md md:text-base"
        >
          Álvaro Sarmiento Santander, nacido en 1944 en Charalá-Santander, fue
          abogado y ejerció como juez y funcionario público. Dedicó más de 40
          años de su vida al estudio de la historia tanto local como regional,
          de ahí que viviera en varios municipios de las provincias comunera y
          guanentá del departamento de Santander. Durante más de 11 años
          investigó en el Archivo General de la Nación, consultando documentos
          primarios sobre la Revolución de los Comuneros y la historia del
          departamento de Santander. Trabajo que se vio reflejado en sus libros
          " La batalla perdida" y "Del infierno a la gloria”. Fue co-fundador
          del Centro de Historia de Pinchote, y unos meses después de su
          fallecimiento, se decidió hacerle un reconocimiento a su invaluable
          labor como historiógrafo dándole el nombre de Álvaro Sarmiento
          Santander al Centro de Historia.
        </motion.p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{delay: .5}}
        className="bg-center bg-no-repeat bg-cover bg-fixed 
        w-full h-screen flex flex-wrap justify-around items-center 
        md:flex-nowrap
        clip-path-style
        bg-[linear-gradient(to_left,rgba(139,0,0,0.5),rgba(0,0,0,0.5)),url('/src/Assets/ImagenesAVIF/section1.avif')]"
      >
        <p className="text-[#f8f4e1] md:max-w-md md:text-base rounded">
          El Centro de Historia de Pinchote Álvaro Sarmiento Santander es el
          lugar ideal para investigar sobre el acervo histórico, documental y
          patrimonial del municipio, del departamento de Santander y de
          Colombia.
        </p>

        <img
          className="w-[300px] h-[300px]
          md:w-[300px] md:h-[300px] duration-150 hover:scale-125 rounded-full"
          src={logo}
          alt="Logo del centro de historia de Pinchote."
        />
      </motion.section>
    </div>
  );
};

export { Inicio };
