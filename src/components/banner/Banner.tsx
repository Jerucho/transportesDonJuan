import "./banner.styles.css";

interface BannerProps {
  children: React.ReactNode;
  background_image: string;
  background_position?: string;
}

export const Banner = ({
  children,
  background_image,
  background_position = "object-center",
}: BannerProps) => {
  return (
    <div className="h-[60vh] md:h-[75vh] lg:h-[85vh] w-full relative flex flex-col md:flex-row gap-4 overflow-hidden m-0 p-0 block">
      {/* Imagen de fondo */}
      <img
        alt="banner"
        className={`w-full h-full top-0 md:top-0 -z-10 absolute object-cover ${background_position} transition-transform duration-1000 hover:scale-105`}
        src={background_image}
      />
      
      {/* Overlay con gradiente elegante */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/40 md:bg-gradient-to-br md:from-black/60 md:via-black/40 md:to-transparent z-0"></div>
      
      {/* Patrón decorativo superior */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-azul/20 via-transparent to-transparent z-0"></div>
      
      {/* Elementos decorativos de fondo */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-azul/10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2 z-0"></div>
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-azulClaro/10 rounded-full blur-3xl transform -translate-y-1/2 -translate-x-1/2 z-0"></div>
      
      {/* Contenido con z-index superior */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};
