import Image from "next/image"
import { Timeline } from "@/components/timeline"
import expImg1 from "@/assets/images/techmahindra.jpg"
import expImg2 from "@/assets/images/techmahindra2.jpg"
import expImg3 from "@/assets/images/techmahindra3.jpg"
import igImg1 from "@/assets/images/igexp1.jpg"
import igImg2 from "@/assets/images/igexp2.jpg"
import iitImg1 from "@/assets/images/Iitdelhi.jpeg"
import iitImg2 from "@/assets/images/iit2.jpg"
import samImg2 from "@/assets/images/sam5.jpg"
import samImg1 from "@/assets/images/samsung2.jpg"


export default function InternshipTimeline() {
  const data = [
    {
      title: "Dec 2024 - Feb 2025",
      content: (
        <div id="internship">
          <p className="text-white dark:text-white text-xs md:text-sm font-normal mb-4">
            <span className="font-bold text-purple-400">Software Developer Intern at Tech Mahindra</span> -
            Built backend for multi-agent network systems to automate issue detection & resolution.
          </p>
          <div className="flex space-x-3 mb-3">
            <Image
              src={`${expImg2.src}`}
              alt="Computer vision project"
              width={500}
              height={500}
              className="rounded-lg object-cover h-16 md:h-28 w-[120px] md:w-[200px] shadow-[0_0_12px_rgba(34,_42,_53,_0.06)]"
            />
            <Image
              src={`${expImg3.src}`}
              alt="ML model architecture"
              width={500}
              height={500}
              className="rounded-lg object-cover h-16 md:h-28 w-[120px] md:w-[200px] shadow-[0_0_12px_rgba(34,_42,_53,_0.06)]"
            />
          </div>
          <div className="mt-2">
            <div className="flex gap-2 items-center text-neutral-400 dark:text-neutral-400 text-xs md:text-sm">
              - Designed 2 multi-agent systems for automated ticketing & user communication
            </div>
            <div className="flex gap-2 items-center text-neutral-400 dark:text-neutral-400 text-xs md:text-sm">
              - Developed backend to detect network issues and verify reports
            </div>
            <div className="flex gap-2 items-center text-neutral-400 dark:text-neutral-400 text-xs md:text-sm">
              - Tech stack: PostgreSQL, Prisma, Next.js, JWT, LangGraph, GroqAPI
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Oct-2023 - Mar 2024",
      content: (
        <div>
          <p className="text-white dark:text-white text-xs md:text-sm font-normal mb-4">
            <span className="font-bold text-blue-400">Machine Learning Intern at Samsung Innovation Lab</span> - Developed DL architectures for EEG-based stress classification achieving 98.73% accuracy.
          </p>
          <div className="flex space-x-3 mb-3">
            <Image
              src={`${samImg2.src}`}
              alt="Web application dashboard"
              width={700}
              height={700}
              className="rounded-lg object-cover h-16 md:h-28 w-[120px] md:w-[200px] shadow-[0_0_12px_rgba(34,_42,_53,_0.06)]"
            />
            <Image
              src={`${samImg1.src}`}
              alt="Data visualization charts"
              width={500}
              height={500}
              className="rounded-lg object-cover h-16 md:h-28 w-[120px] md:w-[200px] shadow-[0_0_12px_rgba(34,_42,_53,_0.06)]"
            />
          </div>
          <div className="mt-2">
            <div className="flex gap-2 items-center text-neutral-400 dark:text-neutral-400 text-xs md:text-sm">
              - Engineered 3 deep learning models (ResNet18, DenseNet, VGG16) on EEG data
            </div>
            <div className="flex gap-2 items-center text-neutral-400 dark:text-neutral-400 text-xs md:text-sm">
              - Conducted SAM vs MAT dataset analysis for cognitive stress classification
            </div>
            <div className="flex gap-2 items-center text-neutral-400 dark:text-neutral-400 text-xs md:text-sm">
              - Achieved 98.73% accuracy using EfficientNetB0 on MAT dataset
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Dec 2023 - Mar 2024",
      content: (
        <div>
          <p className="text-white dark:text-white text-xs md:text-sm font-normal mb-4">
            <span className="font-bold text-green-400">Research and Development Intern at Indian Institute of Technology - Delhi</span> - Applied ML/DL on EEG data to classify cognitive load based on entropy and complexity metrics.
          </p>
          <div className="flex space-x-3 mb-3">
            <Image
              src={`${iitImg1.src}`}
              alt="NLP model architecture"
              width={500}
              height={500}
              className="rounded-lg object-cover h-16 md:h-28 w-[120px] md:w-[200px] shadow-[0_0_12px_rgba(34,_42,_53,_0.06)]"
            />
            <Image
              src={`${iitImg2.src}`}
              alt="Sentiment analysis results"
              width={500}
              height={500}
              className="rounded-lg object-cover h-16 md:h-28 w-[120px] md:w-[200px] shadow-[0_0_12px_rgba(34,_42,_53,_0.06)]"
            />
          </div>
          <div className="mt-2">
            <div className="flex gap-2 items-center text-neutral-400 dark:text-neutral-400 text-xs md:text-sm">
              - Preprocessed EEG signals and conducted a literature review on entropy, fractal & complexity features
            </div>
            <div className="flex gap-2 items-center text-neutral-400 dark:text-neutral-400 text-xs md:text-sm">
              - Extracted features to identify optimal EEG channels for detecting irregularities in brain activity
            </div>
            <div className="flex gap-2 items-center text-neutral-400 dark:text-neutral-400 text-xs md:text-sm">
              - Applied ML and DL algorithms to classify cognitive load from EEG data
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Aug 2023 - Sept 2023",
      content: (
        <div>
          <p className="text-white dark:text-white text-xs md:text-sm font-normal mb-4">
            <span className="font-bold text-amber-400">Research Intern at IGDTUW</span> -  Built deep learning models to classify strokes from CT scans.
          </p>
          <div className="flex space-x-3 mb-3">
            <Image
              src={`${igImg2.src}`}
              alt="Microservices architecture"
              width={500}
              height={500}
              className="rounded-lg object-cover h-16 md:h-28 w-[120px] md:w-[200px] shadow-[0_0_12px_rgba(34,_42,_53,_0.06)]"
            />
            <Image
              src={`${igImg1.src}`}
              alt="Cloud deployment"
              width={500}
              height={500}
              className="rounded-lg object-cover h-16 md:h-28 w-[120px] md:w-[200px] shadow-[0_0_12px_rgba(34,_42,_53,_0.06)]"
            />
          </div>
          <div className="mt-2">
            <div className="flex gap-2 items-center text-neutral-400 dark:text-neutral-400 text-xs md:text-sm">
              -  Utilized CNNs to classify stroke vs non-stroke from CT brain images.
            </div>
            <div className="flex gap-2 items-center text-neutral-400 dark:text-neutral-400 text-xs md:text-sm">
              - Cropped 2000+ CT scans using OpenCV to isolate regions of interest.
            </div>
            <div className="flex gap-2 items-center text-neutral-400 dark:text-neutral-400 text-xs md:text-sm">
              -  Achieved 98.7% accuracy using EfficientNetB0 model.
            </div>
          </div>
        </div>
      ),
    },
  ]
  return (
    <div className="w-full bg-black">
      <Timeline data={data} />
    </div>
  )
}
