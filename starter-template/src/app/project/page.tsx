//seperate route it is 
import React from 'react';
import { Header } from "@/sections/Header";
import { ProjectsSection } from "@/sections/Projects";
// import IconCloud from 
// import IconCloud from "../components/magicui/icon-cloud";
import IconCloud from "@/components/magicui/icon-cloud";
import { MotionSection, MotionDiv } from "@/components/motion";



function Project() {


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
        "nestjs",
        // Databases
        "mongodb",
        "postgresql",
        "mysql",
        "prisma",
        // Tools & Others
        "git",
        "github",
        "postman",
        "docker",
        "linux",
        "vercel",
        "vscode",
        "redux",
      ];

  return (
  <div>

  <Header/>
  <ProjectsSection/>
  <MotionSection >
  <MotionDiv 
initial={{ opacity: 0, x: 20 }}
animate={{ opacity: 1, x: 0 }}
transition={{ duration: 0.8, delay: 0.2 }}
className="w-full md:w-1/2"
>
<IconCloud iconSlugs={iconSlugs} />
</MotionDiv>
</MotionSection>
</div>

  )
}

export default Project;
