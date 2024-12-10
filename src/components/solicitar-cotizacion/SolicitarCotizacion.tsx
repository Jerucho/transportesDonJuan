export const SolicitarCotizacion = () => {
  return (
    <>
      <div className="bg-azul  text-blanco w-full py-[30px] px-[10%] md:px-[100px] md:py-[20px] flex items-center justify-between">
        <h2 className="text-blanco text-xl md:text-4xl font-bold">
          ¡Solicitá tu cotización hoy mismo!
        </h2>
        <a
          className="bg-verde px-[5%] py-[5%] text-center md:px-0 md:py-0  text-blanco md:w-[283px] md:h-[78px] flex justify-center items-center md:text-2xl font-bold rounded-2xl"
          href="https://api.whatsapp.com/send?phone=5491130779977&text=Hola%20quiero%20solicitar%20una%20cotización"
        >
          Solicitar cotización
        </a>
      </div>
    </>
  );
};
