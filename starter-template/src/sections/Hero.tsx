import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg"
import { HeroOrbit } from "@/components/HeroOrbit";
import SparkleIcon from "@/assets/icons/sparkle.svg"
import {ButtonResume} from "@/components/buttonresume";
import { TypewriterEffect } from "@/sections/random3";
import { motion } from "framer-motion"


export const HeroSection = () => {
  return (
    <div className="py-32 md:py-28 lg:py-40 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div className="absolute inset-0 -z-30 opacity-5" style={{
          backgroundImage: `url(${grainImage.src})`
        }}></div>

        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>

        {/* <HeroOrbit size={800} rotation={-72}>
          <StarIcon className="size-28 text-emerald-300"/>
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20}>
          <StarIcon className="size-12 text-emerald-300"/>
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98}>
          <StarIcon className="size-8 text-emerald-300"/>
        </HeroOrbit>
        <HeroOrbit size={430} rotation={-14}>
          <SparkleIcon className="size-8 text-emerald-300/20"/>
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79}>
          <SparkleIcon className="size-5 text-emerald-300/20"/>
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178}>
          <SparkleIcon className="size-10 text-emerald-300/20"/>
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144}>
          <SparkleIcon className="size-14 text-emerald-300/20"/>
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85}>
          <div className="size-3 bg-emerald-300/20 rounded-full"/>
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41}>
          <div className="size-2 bg-emerald-300/20 rounded-full"/>
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5}>
          <div className="size-2 bg-emerald-300/20 rounded-full"/>
        </HeroOrbit> */}
      </div>

      <div className="container">
        <div className="flex flex-col items-center">
          {/* <Image src={memojiImage}  className="size-[100px]" alt="memoji"/> */}
          {/* <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg"> */}
            {/* <div className="bg-green-500 size-2.5 rounded-full"></div> */}
            {/* <div className="text-sm font-medium">Available for projects</div> */}
          {/* </div> */}
        </div>

{/* 
      <div className="max-w-lg mx-auto">
        <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center 
      mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b text-white"> Hii I am <div > Ayush Tibrewal</div> */}
         {/* &apos;s  */}
    {/* </h1> */}
        {/* <p className="mt-4 text-center text-white/60 md:text-lg"> */}
         {/* Undergrad at DTU , passionate about building intelligent systems ith a strong interest in full-stack development, AI/ML, deep learning, and computer vision. */}
        {/* </p> */}
      {/* </div> */}

      <div className="max-w-lg mx-auto">
  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mt-6 py-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-gray-500 to-gray-700 animate-gradient bg-[length:200%_200%] drop-shadow-md">
    Hi, I'm <span className="block">Ayush Tibrewal</span>
  </h1>
  <p className="mt-4 text-center text-white/70 md:text-lg">
    Undergraduate at DTU, passionate about building intelligent systems with a strong interest in full-stack development, AI/ML, deep learning, and computer vision.
  </p>
</div>

{/* <div className="max-w-lg mx-auto z-10 px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-xl md:text-2xl text-center font-light tracking-wider text-purple-300 mb-2">
            Hello World, I'm
          </h2>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center relative z-20 py-2">
            <span className="inline-block relative">
              <span className="absolute -inset-1 blur-xl bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 opacity-30 rounded-lg"></span>
              <span className="relative bg-gradient-to-r from-white via-purple-200 to-white text-transparent bg-clip-text">
                Ayush Tibrewal
              </span>
            </span>
          </h1>

          <motion.p
            className="mt-6 text-center text-white/70 md:text-lg max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Undergrad at DTU, passionate about building intelligent systems with a strong interest in full-stack
            development, AI/ML, deep learning, and computer vision.
          </motion.p>
        </motion.div>
      </div> */}



      <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
      <a href="/#project" className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl z-10 relative">
  <span className="font-semibold">Explore My Work</span>
  <ArrowDown className="size-4" />
</a>
     <ButtonResume likhna="My Resume" />
        </div>
      </div>
      </div> )
};

