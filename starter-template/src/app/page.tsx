import { Header } from "@/sections/Header";
import { BackgroundLines}  from "@/sections/random"; 
import { HeroSection } from "@/sections/Hero";
import { LampDemo } from "@/sections/random2";




export default function Home() {
  return (
    <div>
      <LampDemo/>
      <BackgroundLines>
        {/* Add appropriate children content here */}
        <div>  
        <Header/>

              <HeroSection/>
        </div>
      </BackgroundLines>
    </div>
  );
}
