import { Header } from "@/sections/Header";
import { BackgroundLines}  from "@/sections/random"; 
import { HeroSection } from "@/sections/Hero";
import { LampDemo } from "@/sections/random2";
import {TypewriterEffect} from "@/sections/random3";




export default function Home() {
  return (
    <div>
      <BackgroundLines>
        <div>  
        <Header/>
        <HeroSection/>
        </div>
      </BackgroundLines>
      
      <div>
      <TypewriterEffect
  words={[
    { text: "Learning" },
    { text: "Upskilling" },
    { text: "Contributing" },
    { text: "Daily.", className: "text-blue-500 dark:text-red-500" },
  ]}
/>
</div>



    </div>
  );
}
