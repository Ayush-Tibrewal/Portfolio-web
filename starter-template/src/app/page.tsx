import { Header } from "@/sections/Header";
import { BackgroundLines}  from "@/sections/random"; 
import { HeroSection } from "@/sections/Hero";
import { LampDemo } from "@/sections/random2";
import {TypewriterEffect} from "@/sections/random3";
import {BackgroundBeams} from "@/sections/randomxyz";
import { ProjectsSection } from "@/sections/Projects";
// import{ShootingStars} from "@/sections/randomxyz";




export default function Home() {
  return (
    <div>
      {/* <ShootingStars/> */}
      <BackgroundBeams/>
      {/* <BackgroundLines> */}
      {/* <div>
      <TypewriterEffect
  words={[
    { text: "Learning" },
    { text: "Upskilling" },
    { text: "Contributing" },
    { text: "Daily.", className: "text-blue-500 dark:text-red-500" },
  ]}
/>
</div> */}
        <div>  
        <Header/>
        <HeroSection/>
        <TypewriterEffect
  words={[
    { text: "Learning" },
    { text: "Upskilling" },
    { text: "Contributing" },
    { text: "Daily.", className: "text-blue-500 dark:text-red-500" },
  ]}
/>
        <ProjectsSection></ProjectsSection>
        </div>
      {/* </BackgroundLines> */}
      



    </div>
  );
}
