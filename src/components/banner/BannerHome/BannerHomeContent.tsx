export const BannerHomeContent = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          paddingRight: "100px",
          flexDirection: "column",
          marginTop: "10%",
          alignItems: "flex-end",
          textAlign: "left",
          width: "100%",
        }}
      >
        <div>
          <h1
            style={{
              color: "white",
              fontSize: "4.5rem",
              fontWeight: "bold",
              textAlign: "left",
              lineHeight: "1",
            }}
          >
            Transporte <span className="text-azulClaro">seguro </span>
            <br />
            para tus cargas
          </h1>
          <div
            style={{
              color: "white",
              fontSize: "1.5rem",
              fontWeight: "bold",
              textAlign: "left",
              lineHeight: "1",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              marginTop: "30px",
            }}
          >
            <h2>Especialistas en corta y larga distancia</h2>
            <h2>Carga paletizada</h2>
          </div>
        </div>
      </div>
    </>
  );
};
