import React from "react";
import ButtonCv from "./buttons/ButtonCv";
import SocialLinks from "./buttons/SocialLinks";
import Image from "next/image";

// import MeetCard from "./cards/MeetCard";

function About() {
  return (
    <section className="container  mt-32  flex items-center  mx-auto">
      <div className="flex flex-col gap-1">
        <h1
          className="text-6xl  text-slate font-Montserrat font-extrabold  flex items-center,
        animate-text bg-gradient-to-r from-[#000000] via-[#f97316] to-[#f97316] bg-clip-text text-transparent
        drop-shadow "
        >
          Joaquin Bianchi
        </h1>

        <h2 className="text-3xl mt-2 font-mono font-medium text-black typing-demo">
          Frontend Developer
        </h2>

        <p className="text-2xl sm:w-6/12 ml text-left break-words font-Hind Madurai drop-shadow">
          Soy Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
          unde cupiditate expedita nisi odit hic, eligendi earum in labore
          voluptates? Accusamus officiis dolorum ut inventore tempore, nihil
          magni ipsa? Libero! pedita nisi odit hic, eligendi earum in labore
          voluptates? Accusamus officiis
        </p>
        <div className="mt-2 flex items-center ">
          <ButtonCv></ButtonCv>
          <div className="ml-5 mt-1">
            <SocialLinks size={"40px"}></SocialLinks>
          </div>
        </div>
      </div>
      <div className="hidden  xl:block xl:-ml-80">
        <Image src="/absurd_04.png" width={1000} height={800}></Image>
      </div>
    </section>
  );
}

export default About;
