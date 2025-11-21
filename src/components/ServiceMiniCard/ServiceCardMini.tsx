import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/fadeInAnimation.css";
interface ServiceCardMiniProps {
  title: string;
  description: string;
  icon: IconProp;
}

export const ServiceCardMini = ({
  icon,
  title,
  description,
}: ServiceCardMiniProps) => {
  return (
    <article className="group relative flex flex-col items-start text-left gap-5 p-8 md:p-10 fadeIn w-full md:w-[calc(100%/3)] rounded-2xl bg-white transition-all duration-500 ease-out hover:shadow-xl hover:-translate-y-1 overflow-hidden">
      {/* Fondo sutil con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Línea vertical decorativa izquierda */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-azul via-azulClaro to-transparent transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
      
      {/* Contenedor del ícono - diseño moderno */}
      <div className="relative z-10">
        <div className="relative">
          {/* Círculo de fondo con gradiente */}
          <div className="absolute inset-0 bg-gradient-to-br from-azul/10 to-azulClaro/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
          {/* Contenedor del ícono */}
          <div className="relative bg-gradient-to-br from-[#E3F6FF] to-[#B8E5FF] rounded-xl p-4 md:p-5 transition-all duration-500 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-azul/20">
            <FontAwesomeIcon
              icon={icon}
              className="text-azul transition-transform duration-500 group-hover:scale-110"
              style={{ width: "40px", height: "40px" }}
            />
          </div>
        </div>
      </div>
      
      {/* Contenido de texto */}
      <div className="relative z-10 flex-1 flex flex-col gap-3">
        <h3 className="font-bold text-xl md:text-2xl text-gray-900 leading-tight group-hover:text-azul transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          {description}
        </p>
      </div>
      
      {/* Indicador de hover sutil */}
      <div className="relative z-10 flex items-center gap-2 text-azul opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-sm font-medium">Ver más</span>
        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </div>
    </article>
  );
};
