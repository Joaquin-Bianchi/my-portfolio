import Link from "next/link";
import React from "react";

function Nav() {
  return (
    <nav className="sticky top-2 md:top-10  flex items-center justify-center drop-shadow-lg z-10 ">
      <div
        className=" font-Montserrat uppercase flex items-center justify-center  gap-x-20 py-3 px-10 
       border rounded-full border-gray-300 bg-white backdrop-filter backdrop-blur-3xl bg-opacity-[0.87]"
      >
        <Link href={"/"} className="text-base hover:text-orange-500">
          Home
        </Link>
        <a href="#skills" className="text-base hover:text-orange-500">
          Skills
        </a>
        <Link href={"/projects"} className="text-base  hover:text-orange-500">
          Projects
        </Link>
        <a href="#contact" className="text-base hover:text-orange-500">
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Nav;
