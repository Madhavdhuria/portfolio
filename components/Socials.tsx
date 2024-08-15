import Link from "next/link";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/Madhavdhuria",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/madhav-dhuria-907282261/",
  },
  {
    icon: <FaTwitter />,
    path: "https://x.com/MadhavDhuria",
  },
];
const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link href={item.path} key={index} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
