export const ContactInfo = () => {
  return (
    <>
      <div className="hidden md:flex items-center justify-center gap-8 bg-white py-4 text-azul font-semibold shadow-md">
        <div className="flex items-center gap-4">
          <i className="fa-solid fa-phone" aria-label="Teléfono"></i>
          <span className="text-lg">+54 9 11 30491482</span>
        </div>
        <div className="flex items-center gap-4">
          <i className="fa-solid fa-envelope" aria-label="Correo electrónico"></i>
          <span className="text-lg">contacto@transportesdonjuan.com</span>
        </div>
      </div>

      {/* Para móviles, mostrarlos de forma más compacta */}
      <div className="md:hidden flex flex-col gap-4 items-center p-4 text-azul font-semibold">
        <div className="flex items-center gap-2">
          <i className="fa-solid fa-phone" aria-label="Teléfono"></i>
          <span className="text-sm">+54 9 11 30491482</span>
        </div>
        <div className="flex items-center gap-2">
          <i className="fa-solid fa-envelope" aria-label="Correo electrónico"></i>
          <span className="text-sm">contacto@transportesdonjuan.com</span>
        </div>
      </div>
    </>
  );
};
