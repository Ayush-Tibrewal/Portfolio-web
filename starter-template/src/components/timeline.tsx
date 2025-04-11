"use client"
import { useScroll, useTransform, motion } from "motion/react"
import type React from "react"
import { useEffect, useRef, useState } from "react"

interface TimelineEntry {
  title: string
  content: React.ReactNode
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect()
      setHeight(rect.height)
    }
  }, [ref])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  })

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height])
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  return (
    <div className="w-full bg-black dark:bg-black font-sans md:px-6" ref={containerRef}>
      <div className="max-w-7xl mx-auto py-12 px-4 md:px-6 lg:px-8">
        <h2 className="text-lg md:text-3xl mb-3 text-white dark:text-white max-w-4xl">My Professional Journey</h2>
        <p className="text-neutral-400 dark:text-neutral-400 text-xs md:text-sm max-w-sm">
          A timeline of my internship experiences and professional growth.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-12">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-8 md:pt-24 md:gap-6">
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-24 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-black dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-800 dark:bg-neutral-800 border border-neutral-700 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-lg md:pl-16 md:text-3xl font-bold text-neutral-400 dark:text-neutral-400">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-16 pr-3 md:pl-3 w-full">
              <h3 className="md:hidden block text-xl mb-3 text-left font-bold text-neutral-400 dark:text-neutral-400">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  )
}
