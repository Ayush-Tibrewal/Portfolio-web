import travelai from "@/assets/images/travelai1.jpg";
import snapnotes from "@/assets/images/snapnotes.jpg";
import evcharge from "@/assets/images/evcharge.png";
import identitycard from "@/assets/images/identitycard.png";
import Image from 'next/image';
import CheckCircleIcon from "@/assets/icons/check-circle.svg"
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"
import grainImage from "@/assets/images/grain.jpg"
import { HoverBorderGradient } from "@/components/moreprojectbutton";


const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2025",
    title: "TravelAI",
    results: [
      { title: "Personalized travel plans based on budget, destination & trip duration" },
      { title: "Saved itineraries for seamless trip management" },
      { title: "Built with React, Firebase, Tailwind CSS & OAuth 2.0" },
    ],
    link: "https://travel-ai-steel.vercel.app/",
    image: travelai,
  },
  {
    company: "Innovative Co",
    year: "2025",
    title: "SnapNotes",
    results: [
      { title: "Auto-generates notes from lengthy PDFs" },
      { title: "AI-powered Q&A for fast, context-aware information retrieval" },
      { title: "Highlight, summarize & interact with documents" },
    ],
    link: "https://devfolio.co/projects/snap-notes-0a43",
    image: snapnotes,
  },
  {
    company: "",
    year: "2024",
    title: "EV Charge Finder",
    results: [
      { title: "Shows real-time EV station availability in 20+ cities using Google Maps API" },
      { title: "Search, filter & track wait times for better planning" },
      { title: "Fully responsive UI built with React, TypeScript & Tailwind CSS" },
    ],
    link: "https://glowing-begonia-ba4a29.netlify.app/",
    image: evcharge,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "Identity Card Checker",
    results: [
      { title: "Detected Aadhar, PAN, Voter & DTU IDs with 95% accuracy" },
      { title: "OCR-powered text extraction with 90%+ accuracy (Tesseract)" },
      { title: "JSON-structured output for easy data handling" },
      // { title: "Enhanced with Vision Transformers & LSTMs for 98% target accuracy" },
    ],
    link: "https://github.com/Ayush-Tibrewal/IDENTITY_CARD",
    image: identitycard,
  },
];

export const ProjectsSection = () => {
  return (
  <section  id ="project" className="pb-16 lg:py-24">
    <div className="container">
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">Real-world Results</p>
      </div>
      <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">Featured Projects</h2>
      {/* <p className="text-center md:text-lg text-white/60 mt-4 max-w-md mx-auto">See how I transformed....</p> */}
      <div className="mt-10 md:mt-20 flex flex-col gap-20 lg:grid lg:grid-cols-2">
        {portfolioProjects.map(project=> (
          <div key={project.title} className="bg-warm-gray-50 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 md:pt-12 md:px-10 after:pointer-events-none">
          <div className="asolute inset-0 -z-10 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}></div>
          {/* <div className="lg:grid lg:grid-cols-2 lg:gap-16"> */}
            {/* <div className="lg:pb-16"> */}
              {/* <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                <span>{project.company}</span>
                <span>&bull;</span>
                <span>{project.year}</span>
              </div> */}
            
            <h3 className="font-serif text-2xl md:text-4xl mt-2">{project.title}</h3>
            <hr className="border-t-2 border-white/5 mt-4 md:mt-5"/>
            <ul className="flex flex-col gap-4 mt-4 md:mt-5">
              {project.results.map(result => (
                <li className="flex gap-2 text-sm md:text-base">
                  <CheckCircleIcon className="size-5 md:size-6"></CheckCircleIcon>
                  <span>{result.title}</span>
                </li>
              ))}
            </ul>
            <a href={project.link} target="_blank">
              <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                <span>Link</span>
                <ArrowUpRightIcon className="size-4"></ArrowUpRightIcon>
              </button>
            </a>  
            {/* </div>   */}
            <div className="bg-neutral-900 mt-8 -mb-4 md:-mb-7 shadow-md border border-[2px] border-gray-600/50 rounded-2xl">
            <Image src={project.image} alt={project.title} className="p-3 md:h-[250px]"/>
            {/* <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"/> */}
            </div>
        {/* </div> */}
          </div>
        ))}
      </div>
    </div>
    <div className="m-10 flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-white bg-white  text-gray-950  dark:text-white font-semibold  flex items-center space-x-2"
        href="https://github.com/Ayush-Tibrewal"
      >
        <span> More Projects </span>
      </HoverBorderGradient>
    </div>

  </section>

  );
};