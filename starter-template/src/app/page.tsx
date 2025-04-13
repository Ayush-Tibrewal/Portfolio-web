import { Header } from "@/sections/Header";
import { BackgroundLines } from "@/sections/random";
import { HeroSection } from "@/sections/Hero";
import { TypewriterEffect } from "@/sections/random3";
import { BackgroundBeams } from "@/sections/randomxyz";
import { ProjectsSection } from "@/sections/Projects";
// import{ShootingStars} from "@/sections/randomxyz";
import InternshipTimeline from "@/sections/intershiptimeline";
import ResearchCard from "@/sections/research";
import { Footer } from '@/sections/Footer';
import { Cover } from "@/sections/wrapsp";
import IconCloud from "@/components/magicui/icon-cloud";
import { MotionSection, MotionDiv } from "@/components/motion";
import ContactSection from "@/sections/Contact";
// import { WavyBackground } from "@/components/waves";

const iconSlugs = [
  // Frontend
  "html5",
  "css3",
  "javascript",
  "typescript",
  "react",
  "nextdotjs",
  "tailwindcss",
  // Backend
  "nodedotjs",
  "express",
  "zod",
  "jsonwebtoken",
  
  // Databases
  "mongodb",
  "postgresql",
  "mysql",
  "prisma",
  "firebase",
  // Tools & Others
  "git",
  "github",
  "postman",
  "docker",
  "linux",
  "vercel",
  "vscode",
  "tailwind",
  "tensorflow",
  "opencv",



];




export default function Home() {
  return (

    <div>
      {/* <ShootingStars/> */}
      <BackgroundBeams />
      {/* <BackgroundLines> */}
      {/* <div>
    
</div> */}
      <div>
        <Header />
        <div> <HeroSection />
        </div>
        <div></div>
        <ProjectsSection />
        {/* <TypewriterEffect
  words={[
    { text: "Learning" },
    { text: "Upskilling" },
    { text: "Contributing" },
    { text: "Daily.", className: "text-blue-500 dark:text-red-500" },
  ]}
/> */}

      </div>
      {/* </BackgroundLines> */}
      <InternshipTimeline />

      <div>
        <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center 
      mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b
       from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800
        dark:via-white dark:to-white">
          Turning ideas into impact with  <br /> at Every <Cover> Click</Cover>
        </h1>
      </div>

      <div className="flex justify-center items-center p-4 md:p-8 lg:p-20 overflow-hidden w-full h-half">
        <MotionDiv
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-3/4 lg:w-1/2"
        >
          <IconCloud iconSlugs={iconSlugs} />
        </MotionDiv>
      </div>
      <ResearchCard />
      {/* <WavyBackground /> */}
      <ContactSection />
      <Footer />
    </div>
  );
}
