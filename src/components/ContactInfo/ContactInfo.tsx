export const ContactInfo = () => {
  return (
    <>
      <div className="text-blanco bg-azul flex h-5vh justify-center items-center font-semibold gap-16">
        <div className="flex justify-center items-center gap-4">
          <i className="fa-solid fa-phone"> </i> <span> +54 9 11 30491482</span>
        </div>
        <div className="flex justify-center items-center gap-4">
          <i className="fa-solid fa-envelope"></i>{" "}
          contacto@transportesdonjuan.com
        </div>
      </div>
    </>
  );
};
