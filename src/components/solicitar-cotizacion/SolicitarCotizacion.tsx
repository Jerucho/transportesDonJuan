export const SolicitarCotizacion = () => {
  return (
    <>
      <div
        className="bg-azul text-blanco h-10vh"
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "50px 100px",
          width: "100%",
          alignItems: "center",
        }}
      >
        <h2 className="text-blanco text-4xl font-bold">
          ¡Solicitá tu cotización hoy mismo!
        </h2>
        <a
          className="bg-verde text-blanco"
          style={{
            width: "283px",
            height: "78px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "20px",
            fontWeight: "bold",
            borderRadius: "5px",
          }}
          href="https://api.whatsapp.com/send?phone=5491130779977&text=Hola%20quiero%20solicitar%20una%20cotización"
        >
          Solicitar cotización
        </a>
      </div>
    </>
  );
};
