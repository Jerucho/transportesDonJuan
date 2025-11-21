export const ContactInfo = () => {
  return (
    <>
      <div className="hidden md:flex items-center justify-center gap-5 lg:gap-7 bg-white py-2.5 md:py-3.5 text-azul font-semibold shadow-md max-w-container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center gap-2.5">
          <i className="fa-solid fa-phone text-sm" aria-label="Teléfono"></i>
          <span className="text-sm md:text-base">+54 9 11 30491482</span>
        </div>
        <div className="flex items-center gap-2.5">
          <i className="fa-solid fa-envelope text-sm" aria-label="Correo electrónico"></i>
          <span className="text-sm md:text-base">dj@transportesdonjuan.com</span>
        </div>
      </div>

      {/* Para móviles, mostrarlos de forma más compacta */}
      <div className="md:hidden flex flex-col gap-3 items-center p-4 text-azul font-semibold">
        <div className="flex items-center gap-2">
          <i className="fa-solid fa-phone" aria-label="Teléfono"></i>
          <span className="text-sm">+54 9 11 30491482</span>
        </div>
        <div className="flex items-center gap-2">
          <i className="fa-solid fa-envelope" aria-label="Correo electrónico"></i>
          <span className="text-sm">dj@transportesdonjuan.com</span>
        </div>
      </div>
    </>
  );
};
