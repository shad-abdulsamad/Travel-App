import Image from "next/image";
import React from "react";

interface Props {
  type: "submit" | "button";
  title: string;
  icon?: string;
  variant:
    | "btn_white_text"
    | "btn_green"
    | "btn_dark_green"
    | "btn_dark_green_outline";
}

const Button = ({ type, title, icon, variant }: Props) => {
  return (
    <button className={`flexCenter gap-3 rounded-full ${variant}`} type={type}>
      <Image src={icon!} alt={title} width={24} height={24} />
      {title}
    </button>
  );
};

export default Button;
