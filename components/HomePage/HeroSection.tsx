
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Photo from "./Photo";
import Container from "@/shared/Container";

const HeroSection = () => {
  const socialLinks = [
    {
      icon: <FaFacebookF size={20} />,
      url: "https://www.facebook.com/talha.muhammad.565",
    },
    {
      icon: <IoLogoInstagram size={20} />,
      url: "https://www.instagram.com/talha_muhammad/",
    },
    {
      icon: <FaLinkedinIn size={20} />,
      url: "https://www.linkedin.com/in/muhammad-talha-aa1429240/",
    },
    {
      icon: <FaGithub size={20} />,
      url: "https://github.com/Muhammad-Talha103",
    },
  ];

  return (
    <Container className="flex flex-col md:flex-row items-center justify-between md:pt-16 py-12 md:py-0 px-2 md:px-8">
      <div className="text-center md:text-left md:w-1/2">
        <h3 className="uppercase text-xl font-semibold py-2">
          Frontend Developer
        </h3>
        <h2 className="text-[45px] xs:text-[52px] md:text-[68px] font-semibold leading-[1.1]">
          <span className="text-main font-bold">Hello!</span> I am <br />{" "}
          Muhammad <span className="text-main font-bold">Talha</span>
        </h2>
        <p className="max-w-[600px] font-medium py-4 text-slate-600">
          Build responsive, user-friendly websites and web applications using
          HTML, CSS, TypeScript, and modern frontend frameworks like Next.js &
          Tailwind CSS. Collaborate with designers and backend developers to
          deliver high-quality web experiences. Stay up-to-date with web
          development trends and best practices.
        </p>
        <div className="flex flex-col md:flex-row md:items-center md:gap-4">
          <div className="flex justify-center md:justify-start items-center py-4">
           <Link href='/contact'>
           <button className="bg-main px-8 text-[16px] flex items-center duration-300 gap-2 justify-between hover:bg-white hover:border-[1px] border-[1px] hover:border-main hover:text-black py-2 rounded-full font-medium text-white hover:bg-opacity-90">
              Hire Me
            </button>
            </Link>
          </div>
          <div className="flex gap-4 items-center justify-center md:justify-start mt-4 md:mt-0">
            <ul className="flex gap-3">
              {socialLinks.map((link) => (
                <li
                  key={link.url}
                  className="rounded-full cursor-pointer border-[1px] border-main p-2 hover:bg-main hover:text-white"
                >
                  <Link href={link.url} target="_blank">
                    {link.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center md:justify-end md:w-1/2 mt-8 md:mt-0">
        <Photo />
      </div>
    </Container>
  );
};

export default HeroSection;
