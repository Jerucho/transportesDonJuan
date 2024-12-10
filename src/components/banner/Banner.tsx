import Image from "astro/components/Image.astro";
import "./banner.styles.css";

interface BannerProps {
  children: React.ReactNode;
  background_image: ImageMetadata;
  backgound_position: string;
}

export const Banner = ({
  children,
  background_image,
  backgound_position = "object-left",
}: BannerProps) => {
  return (
    <div className="h-[50vh] overflow-clip md:h-[80vh] w-full relative flex md:inline-block flex-col md:flex-row gap-[20px]">
      <img
        alt="banner"
        className={`w-full h-full top-[80px] md:top-0 -z-10 absolute object-cover ${backgound_position}`}
        src={background_image.src}
      />
      {children}
    </div>
  );
};
