export const BannerHomeContent = () => {
  return (
    <div className="flex px-6 md:px-12 lg:px-20 xl:px-24 pt-20 md:pt-0 flex-col items-end justify-center md:items-end md:justify-center text-right w-full h-full">
      <div className="max-w-2xl space-y-6 md:space-y-8 animate-fadeIn">
        {/* Título principal */}
        <h1 className="text-blanco text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-right leading-tight drop-shadow-2xl">
          Transporte{" "}
          <span className="text-azulClaro relative inline-block">
            seguro
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-azulClaro/30 rounded-full"></span>
          </span>
          <br />
          <span className="bg-gradient-to-r from-white via-white to-azulClaro/80 bg-clip-text text-transparent">
            para tus cargas
          </span>
        </h1>
        
        {/* Subtítulo */}
        <p className="text-blanco/90 text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-xl text-right ml-auto">
          Soluciones logísticas confiables que conectan tu negocio con todo Argentina
        </p>
        
        {/* Lista de servicios */}
        <div className="flex flex-col gap-3 md:gap-4 mt-6 md:mt-8 items-end">
          <div className="flex items-center gap-3 group flex-row-reverse">
            <div className="w-2 h-2 rounded-full bg-azulClaro group-hover:scale-150 transition-transform duration-300"></div>
            <h2 className="text-blanco text-sm md:text-base lg:text-lg font-medium text-right group-hover:text-azulClaro transition-colors duration-300">
              Especialistas en corta y larga distancia
            </h2>
          </div>
          <div className="flex items-center gap-3 group flex-row-reverse">
            <div className="w-2 h-2 rounded-full bg-azulClaro group-hover:scale-150 transition-transform duration-300"></div>
            <h2 className="text-blanco text-sm md:text-base lg:text-lg font-medium text-right group-hover:text-azulClaro transition-colors duration-300">
              Carga paletizada
            </h2>
          </div>
          <div className="flex items-center gap-3 group flex-row-reverse">
            <div className="w-2 h-2 rounded-full bg-azulClaro group-hover:scale-150 transition-transform duration-300"></div>
            <h2 className="text-blanco text-sm md:text-base lg:text-lg font-medium text-right group-hover:text-azulClaro transition-colors duration-300">
              Transporte nacional
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
