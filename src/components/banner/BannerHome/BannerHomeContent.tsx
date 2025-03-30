export const BannerHomeContent = () => {
  return (
    <div className="flex px-[10%] pt-[100px] md:pt-0 flex-col items-center justify-center md:items-end text-left w-full h-full">
      <div>
        <h1 className="text-blanco text-4xl md:text-6xl font-bold text-left">
          Transporte <span className="text-azulClaro">seguro </span>
          <br />
          para tus cargas
        </h1>
        <div className="hidden md:flex flex-col gap-4 mt-4 md:mt-3">
          <h2 className="text-blanco text-xl md:text-4xl font-semibold text-left">Especialistas en corta y larga distancia</h2>
          <h2 className="text-blanco text-xl md:text-4xl font-semibold text-left">Carga paletizada</h2>
        </div>
      </div>
    </div>
  );
};
