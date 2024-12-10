import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/fadeInAnimation.css";
interface ServiceCardMiniProps {
  title: string;
  description: string;
  icon: IconProp;
}

export const ServiceCardMini = ({
  icon,
  title,
  description,
}: ServiceCardMiniProps) => {
  return (
    <>
      <div
        className="flex justify-center items-center gap-10 p-10 fadeIn w-[calc( 100% / 3)]"
        style={{
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          height: "100%",
          minHeight: "250px",
          backgroundColor: "#FAFAFA",
        }}
      >
        <div id="icon" className="w-1/5">
          <FontAwesomeIcon
            style={{
              width: "70px",
              height: "70px",
            }}
            className="text-azul"
            icon={icon}
          />
        </div>
        <div className="flex flex-col justify-center w-4/5">
          <h3 className="font-bold text-2xl ">{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};
