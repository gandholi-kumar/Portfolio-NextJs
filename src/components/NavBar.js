import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  PinterestIcon,
  SunIcon,
  TwitterIcon,
} from "./Icons";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  const isActive = router.asPath === href ? "w-full" : "w-0";

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${isActive} dark:bg-dark        
        `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  const isActive = router.asPath === href ? "w-full" : "w-0";

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 
          group-hover:w-full transition-[width] ease duration-300 ${isActive}
          dark:bg-dark        
        `}
      >
        &nbsp;
      </span>
    </button>
  );
};

const MotionLink = motion(Link);

const SocialIcons = ({ children, href, className = "" }) => {
  return (
    <MotionLink
      href={href}
      target={"_blank"}
      whileHover={{
        y: -2,
      }}
      whileTap={{
        scale: 0.9,
      }}
      className={`${className} sm:mx-1`}
    >
      {children}
    </MotionLink>
  );
};

export const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className="w-full px-32 py-8 font-medium flex items-center justify-between
      dark:text-light z-10 lg:px-16 md:px-12 sm:px-8
    "
    >
      <button
        className="flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`block w-6 h-0.5 bg-dark dark:bg-light transition duration-300 ease-out rounded-sm
          ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-dark dark:bg-light transition duration-300 ease-out rounded-sm m-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-dark dark:bg-light transition duration-300 ease-out rounded-sm
          ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink title="Home" href="/" className="" />
          <CustomLink title="About" href="/about" className="mx-4 " />
          <CustomLink title="Projects" href="/projects" className="" />
          {/* <CustomLink title="Articles" href="/articles" className="ml-4" /> */}
        </nav>

        <nav className="flex item-center justify-center flex-wrap">
          <SocialIcons href="/" className="w-6 mr-3">
            <TwitterIcon />
          </SocialIcons>
          <SocialIcons href="/" className="w-6 mx-3">
            <GithubIcon />
          </SocialIcons>
          <SocialIcons href="/" className="w-6 mx-3">
            <LinkedInIcon />
          </SocialIcons>
          <SocialIcons href="/" className="w-6 mx-3 bg-light rounded-full">
            <PinterestIcon />
          </SocialIcons>
          <SocialIcons href="/" className="w-6 mx-3">
            <DribbbleIcon />
          </SocialIcons>

          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`w-6 ml-3 flex items-center justify-center rounded-full p-1 
          ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-light"} />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile */}
      {isOpen ? (
        <motion.div
          className="min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 
        -translate-x-1/2 -translate-y-1/2 z-30 
        bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32
        "
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <nav className="flex items-center justify-center flex-col">
            <CustomMobileLink
              title="Home"
              href="/"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              title="About"
              href="/about"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              title="Projects"
              href="/projects"
              className=""
              toggle={handleClick}
            />
            {/* <CustomMobileLink title="Articles" href="/articles" className="ml-4" toggle={handleClick} /> */}
          </nav>

          <nav className="flex item-center justify-center flex-wrap mt-2">
            <SocialIcons href="/" className="w-6 mr-3">
              <TwitterIcon />
            </SocialIcons>
            <SocialIcons
              href="/"
              className="w-6 mx-3 bg-light rounded-full dark:bg-dark"
            >
              <GithubIcon />
            </SocialIcons>
            <SocialIcons href="/" className="w-6 mx-3">
              <LinkedInIcon />
            </SocialIcons>
            <SocialIcons href="/" className="w-6 mx-3 bg-light rounded-full">
              <PinterestIcon />
            </SocialIcons>
            <SocialIcons href="/" className="w-6 mx-3">
              <DribbbleIcon />
            </SocialIcons>

            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`w-6 ml-3 flex items-center justify-center rounded-full p-1 sm:mx-1 
          ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-light"} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left-[50%] translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
