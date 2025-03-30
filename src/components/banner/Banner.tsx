import Image from "astro/components/Image.astro";
import "./banner.styles.css";

interface BannerProps {
  children: React.ReactNode;
  background_image: ImageMetadata;
  background_position?: string; // Corrige el nombre del prop
}

export const Banner = ({
  children,
  background_image,
  background_position = "object-center", // Uso de valor por defecto
}: BannerProps) => {
  return (
    <div className="h-[50vh] md:h-[80vh] w-full relative flex md:inline-block flex-col md:flex-row gap-[20px]">
      <img
        alt="banner"
        className={`w-full h-full top-0 md:top-0 -z-10 absolute object-cover ${background_position}`}
        src={background_image.src}
      />
      {children}
    </div>
  );
};
