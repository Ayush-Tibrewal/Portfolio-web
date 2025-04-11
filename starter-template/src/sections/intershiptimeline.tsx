import Image from "next/image"
import { Timeline } from "@/components/timeline"

export default function InternshipTimeline() {
  const data = [
    {
      title: "Summer 2024",
      content: (
        <div  id="exp">
          <p className="text-white dark:text-white text-xs md:text-sm font-normal mb-4">
            <span className="font-bold text-purple-400">Machine Learning Engineer Intern at TechInnovate</span> 
            Developed and deployed computer vision models for real-time object detection with 94% accuracy.
          </p>
          <div className="flex space-x-3 mb-3">
            <Image
              src="/placeholder.svg?height=500&width=500"
              alt="Computer vision project"
              width={500}
              height={500}
              className="rounded-lg object-cover h-16 md:h-28 w-auto shadow-[0_0_12px_rgba(34,_42,_53,_0.06)]"
            />
            <Image
              src="/placeholder.svg?height=500&width=500"
              alt="ML model architecture"
              width={500}
              height={500}
              className="rounded-lg object-cover h-16 md:h-28 w-auto shadow-[0_0_12px_rgba(34,_42,_53,_0.06)]"
            />
          </div>
          <div className="mt-2">
            <div className="flex gap-2 items-center text-neutral-400 dark:text-neutral-400 text-xs md:text-sm">
              ✅ Implemented YOLOv8 for real-time object detection
            </div>
            <div className="flex gap-2 items-center text-neutral-400 dark:text-neutral-400 text-xs md:text-sm">
              ✅ Optimized model for edge devices, reducing inference time by 40%
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Spring 2024",
      content: (
        <div>
          <p className="text-white dark:text-white text-xs md:text-sm font-normal mb-4">
            <span className="font-bold text-blue-400">Full Stack Developer Intern at DataSphere</span> - Built and
            deployed a responsive web application for data visualization using React and Node.js.
          </p>
          <div className="flex space-x-3 mb-3">
            <Image
              src="/placeholder.svg?height=500&width=500"
              alt="Web application dashboard"
              width={500}
              height={500}
              className="rounded-lg object-cover h-16 md:h-28 w-auto shadow-[0_0_12px_rgba(34,_42,_53,_0.06)]"
            />
            <Image
              src="/placeholder.svg?height=500&width=500"
              alt="Data visualization charts"
              width={500}
              height={500}
              className="rounded-lg object-cover h-16 md:h-28 w-auto shadow-[0_0_12px_rgba(34,_42,_53,_0.06)]"
            />
          </div>
          <div className="mt-2">
            <div className="flex gap-2 items-center text-neutral-400 dark:text-neutral-400 text-xs md:text-sm">
              ✅ Developed interactive dashboards with D3.js and Chart.js
            </div>
            <div className="flex gap-2 items-center text-neutral-400 dark:text-neutral-400 text-xs md:text-sm">
              ✅ Implemented RESTful APIs with Express.js and MongoDB
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Fall 2023",
      content: (
        <div>
          <p className="text-white dark:text-white text-xs md:text-sm font-normal mb-4">
            <span className="font-bold text-green-400">AI Research Intern at NeuralLabs</span> - Conducted research on
            natural language processing models for sentiment analysis in customer feedback.
          </p>
          <div className="flex space-x-3 mb-3">
            <Image
              src="/placeholder.svg?height=500&width=500"
              alt="NLP model architecture"
              width={500}
              height={500}
              className="rounded-lg object-cover h-16 md:h-28 w-auto shadow-[0_0_12px_rgba(34,_42,_53,_0.06)]"
            />
            <Image
              src="/placeholder.svg?height=500&width=500"
              alt="Sentiment analysis results"
              width={500}
              height={500}
              className="rounded-lg object-cover h-16 md:h-28 w-auto shadow-[0_0_12px_rgba(34,_42,_53,_0.06)]"
            />
          </div>
          <div className="mt-2">
            <div className="flex gap-2 items-center text-neutral-400 dark:text-neutral-400 text-xs md:text-sm">
              ✅ Fine-tuned BERT models for domain-specific sentiment analysis
            </div>
            <div className="flex gap-2 items-center text-neutral-400 dark:text-neutral-400 text-xs md:text-sm">
              ✅ Achieved 92% accuracy on sentiment classification tasks
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Summer 2023",
      content: (
        <div>
          <p className="text-white dark:text-white text-xs md:text-sm font-normal mb-4">
            <span className="font-bold text-amber-400">Software Engineering Intern at CloudTech</span> - Developed
            microservices architecture for a cloud-based application serving over 10,000 users.
          </p>
          <div className="flex space-x-3 mb-3">
            <Image
              src="/placeholder.svg?height=500&width=500"
              alt="Microservices architecture"
              width={500}
              height={500}
              className="rounded-lg object-cover h-16 md:h-28 w-auto shadow-[0_0_12px_rgba(34,_42,_53,_0.06)]"
            />
            <Image
              src="/placeholder.svg?height=500&width=500"
              alt="Cloud deployment"
              width={500}
              height={500}
              className="rounded-lg object-cover h-16 md:h-28 w-auto shadow-[0_0_12px_rgba(34,_42,_53,_0.06)]"
            />
          </div>
          <div className="mt-2">
            <div className="flex gap-2 items-center text-neutral-400 dark:text-neutral-400 text-xs md:text-sm">
              ✅ Designed and implemented RESTful APIs with Spring Boot
            </div>
            <div className="flex gap-2 items-center text-neutral-400 dark:text-neutral-400 text-xs md:text-sm">
              ✅ Containerized applications with Docker and orchestrated with Kubernetes
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Spring 2023",
      content: (
        <div>
          <p className="text-white dark:text-white text-xs md:text-sm font-normal mb-4">
            <span className="font-bold text-rose-400">Mobile App Development Intern at AppWorks</span> - Developed
            cross-platform mobile applications using React Native and Firebase.
          </p>
          <div className="flex space-x-3 mb-3">
            <Image
              src="/placeholder.svg?height=500&width=500"
              alt="Mobile app UI"
              width={500}
              height={500}
              className="rounded-lg object-cover h-16 md:h-28 w-auto shadow-[0_0_12px_rgba(34,_42,_53,_0.06)]"
            />
            <Image
              src="/placeholder.svg?height=500&width=500"
              alt="App features showcase"
              width={500}
              height={500}
              className="rounded-lg object-cover h-16 md:h-28 w-auto shadow-[0_0_12px_rgba(34,_42,_53,_0.06)]"
            />
          </div>
          <div className="mt-2">
            <div className="flex gap-2 items-center text-neutral-400 dark:text-neutral-400 text-xs md:text-sm">
              ✅ Built responsive UI components with React Native
            </div>
            <div className="flex gap-2 items-center text-neutral-400 dark:text-neutral-400 text-xs md:text-sm">
              ✅ Implemented real-time data synchronization with Firebase
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
