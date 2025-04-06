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
  className="flex flex-col items-center text-center gap-4 p-10 fadeIn w-full md:w-[calc(100%/3)] rounded-lg"
  style={{
    boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
    height: "100%",
    minHeight: "250px",
    backgroundColor: "#fff",
  }}
>
  <div className="bg-[#E3F6FF] rounded-full p-4 flex items-center justify-center">
  <FontAwesomeIcon
    icon={icon}
    className="text-azul"
    style={{ width: "60px", height: "60px" }}
  />
</div>
  <h3 className="font-bold text-2xl">{title}</h3>
  <p className="text-gray-700">{description}</p>
</div>

    </>
  );
};
