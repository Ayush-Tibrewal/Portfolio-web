import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";

export const HeroSection = () => {
  return <div className="py-32 md:py-48 lg:py-60">
    <div className="container">
      <Image src={memojiImage}  className="size-[100px]" alt="memoji"/>
      <div className="bg-gray-950 border border-gray-800 px-4 py-1.5">
      <div className="bg-green-500 size-2.5 rounded-full"></div>
      <div className="text-sm font-medium">Available for projects
      </div>
      </div>
      </div>



<div className="max-w-lg mx-auto ">
      <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
        Building Exceptional User Experiences
      </h1>
      <p className="mt-4 text-center text-white/60 md:text-lg">
        I specialize in transforming designs into functional, high-performing
        web applications. Let's discuss your next project.
      </p>
      </div>

      <div className="flex flex-col md:flex-row justify center items-center mt-8 gap-4">
        <button className="inline-flex items-center gap-2 border border-white">
          <span className="font-semibold">Explore My Work</span>
          <ArrowDown className="size-4"/>
        </button>
        <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
          <span> emo </span>
          <span className="font-semibold"> See my work</span>
        </button>
      </div>
      </div>
};
