import React, { useEffect, useState } from "react";

import Nav from "../nav/Nav";
import Social from "../Social/Social";

export default function Header() {
  const [Active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`fixed z-50 w-full transition-all ease-in-out duration-300 ${
        Active ? "bg-[#03031550] py-6 backdrop-blur-md" : "bg-transparent py-8"
      }`}
    >
      <div className="container mx-auto flex flex-col xl:flex-row items-center justify-between">
        <a
          href="#"
          className="relative flex w-[226px] h-[37.64px] transition-all mb-4 xl:mb-0"
        >
          {/* <img
            src="/header/logo.svg"
            alt=""
            className="h-full w-full object-contain"
          /> */}
          <h1 className="w-full h-full font-alexBrush tracking-wider text-2xl">ODUMODUBLVCK</h1>
        </a>
        <Nav containerStyles={"hidden xl:flex items-center gap-x-8"} />
        <Social
          containerStyles={"flex text[24px] gap-x-4"}
          iconStyles={"hover:text-accent trasition-all duration-300"}
        />
      </div>
    </header>
  );
}
