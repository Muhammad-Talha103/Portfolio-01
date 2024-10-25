"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; 
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";

const Footer = () => {
  const [showContent, setShowContent] = useState(false);
  const pathname = usePathname(); 

  useEffect(() => {
    setShowContent(false); 
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1500); 

    return () => clearTimeout(timer); 
  }, [pathname]); 

  const currentYear = new Date().getFullYear();

  const SocialLinks = [
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
    <footer className="text-gray-600 body-font relative ">
      {showContent && (
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col border-t-[1px] border-main">
          <Link href="/">
            <h1 className="md:text-3xl text-2xl font-bold">
              Muhammad <span className="text-main">Talha</span>
            </h1>
          </Link>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © {currentYear} Portfolio
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <ul className="flex gap-3">
              {SocialLinks.map((link) => (
                <li
                  key={link.url}
                  className="rounded-full cursor-pointer border border-main p-2 hover:bg-main hover:text-white transition-colors duration-200"
                >
                  <Link href={link.url} target="_blank">
                    {link.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </span>
        </div>
      )}
    </footer>
  );
};

export default Footer;
