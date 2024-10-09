import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  TwitterIcon,
} from "./Icons";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  const isActive = router.asPath === href ? "w-full" : "w-0";

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${isActive}`}
      >
        &nbsp;
      </span>
    </Link>
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
      className={`${className}`}
    >
      {children}
    </MotionLink>
  );
};

export const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink title="Home" href="/" className="mr-4" />
        <CustomLink title="About" href="/about" className="mx-4 " />
        <CustomLink title="Projects" href="/projects" className="mx-4" />
        <CustomLink title="Articles" href="/articles" className="ml-4" />
      </nav>

      <div className="absolute left-[50%] translate-x-[-50%]">
        <Logo />
      </div>

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
        <SocialIcons href="/" className="w-6 mx-3">
          <PinterestIcon />
        </SocialIcons>
        <SocialIcons href="/" className="w-6 ml-3">
          <DribbbleIcon />
        </SocialIcons>
      </nav>
    </header>
  );
};

export default NavBar;
