import { Header } from "@/sections/Header";
import { BackgroundLines}  from "@/sections/random"; 
import { HeroSection } from "@/sections/Hero";
import { LampDemo } from "@/sections/random2";
import {TypewriterEffect} from "@/sections/random3";
import {BackgroundBeams} from "@/sections/randomxyz";
// import{ShootingStars} from "@/sections/randomxyz";
import InternshipTimeline from "@/sections/intershiptimeline";
// import ResearchPapers from "@/sections/research";
import ResearchCard from "@/sections/research";
import {Footer} from '@/sections/Footer';
import { Cover } from "@/sections/wrapsp";





export default function Home() {
  return (
    <div>
      {/* <ShootingStars/> */}
      <BackgroundBeams/>
      {/* <BackgroundLines> */}
        <div>  
        <Header/>
        <HeroSection/>
        </div>
      {/* </BackgroundLines> */}
      <InternshipTimeline />

      
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
      <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center 
      mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b
       from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800
        dark:via-white dark:to-white">
        Build amazing websites <br /> at <Cover>Click Me</Cover>
      </h1>
    </div>

<ResearchCard/>
<Footer/>



    </div>
  );
}
