import Image from "astro/components/Image.astro";
import "./banner.styles.css";

interface BannerProps {
  children: React.ReactNode;
  background_image: ImageMetadata;
}

export const Banner = ({ children, background_image }: BannerProps) => {
  return (
    <div
      className="banner h-80vh"
      style={{
        width: "100%",
        position: "relative",
      }}
    >
      <img
        alt="banner"
        src={background_image.src}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          zIndex: -1,
        }}
      />
      {children}
    </div>
  );
};
