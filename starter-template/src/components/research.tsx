"use client"
import { motion } from "motion/react"
import { ArrowUpRight, FileText, Users } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

interface ResearchPaperProps {
  title: string
  abstract: string
  authors: string[]
  journal?: string
  conference?: string
  year: string
  doi?: string
  url?: string
  tags: string[]
}

export function ResearchCard({
  title,
  abstract,
  authors,
  journal,
  conference,
  year,
  doi,
  url,
  tags,
}: ResearchPaperProps) {
  const [isHovered, setIsHovered] = useState(false)

  const venue = journal || conference || "Research Paper"

  return (
    <motion.div
      className="relative overflow-hidden rounded-xl bg-neutral-900 border border-neutral-800 p-5 transition-all duration-300"
      whileHover={{ scale: 1.01 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col h-full">
        <div className="mb-3 flex justify-between items-start">
          <div className="flex items-center space-x-2">
            <FileText className="h-4 w-4 text-purple-400" />
            <span className="text-xs text-neutral-400">
              {venue} • {year}
            </span>
          </div>
          {url && (
            <Link href={url} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white">
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          )}
        </div>

        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>

        <p className="text-xs text-neutral-400 mb-3 line-clamp-2">{abstract}</p>

        <div className="flex items-center space-x-1 mb-3">
          <Users className="h-3 w-3 text-neutral-500" />
          <p className="text-xs text-neutral-500 truncate">{authors.join(", ")}</p>
        </div>

        <div className="mt-auto flex flex-wrap gap-1">
          {tags.map((tag, index) => (
            <span key={index} className="px-2 py-0.5 text-[10px] rounded-full bg-neutral-800 text-neutral-400">
              {tag}
            </span>
          ))}
        </div>

        {doi && <div className="mt-3 text-[10px] text-neutral-500">DOI: {doi}</div>}
      </div>

      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}
