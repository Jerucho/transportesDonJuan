export const SolicitarCotizacion = () => {
  return (
    <>
      <div className="bg-azul text-blanco w-full py-5 md:py-7 px-6 md:px-12 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-5 m-0">
        <h2 className="text-blanco text-base md:text-xl lg:text-2xl font-bold text-center md:text-left">
          ¡Solicitá tu cotización hoy mismo!
        </h2>
        <a
          className="bg-verde px-5 py-2.5 md:px-7 md:py-3.5 text-center text-blanco w-full md:w-auto flex justify-center items-center text-sm md:text-base font-bold rounded-xl hover:opacity-90 transition-opacity"
          href="https://api.whatsapp.com/send?phone=5491130779977&text=Hola%20quiero%20solicitar%20una%20cotización"
        >
          Solicitar cotización
        </a>
      </div>
    </>
  );
};
