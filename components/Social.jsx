import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Roxxy17" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/kalila-atha-achmad-7b09a7205/" },
  { icon: <FaYoutube />, path: "" },
  { icon: <FaInstagram />, path: "" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
