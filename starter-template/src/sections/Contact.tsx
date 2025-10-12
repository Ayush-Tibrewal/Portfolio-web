"use client"

import { useState } from "react"
import { Copy, ExternalLink, Mail, MessageSquare, Github, Linkedin, Twitter, Code, Check , Notebook} from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"




export default function ContactSection() {
  const [copied, setCopied] = useState(false)
  const email = "ayushtibrewal2004@gmail.com"
  const whatsappNumber = "7357353100"

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    toast({
      title: "Email copied to clipboard",
      description: "You can now paste it anywhere",
    })

    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/ayush-tibrewal-665949248/", icon: <Linkedin className="h-5 w-5" /> },
    { name: "Github", url: "https://github.com/Ayush-Tibrewal", icon: <Github className="h-5 w-5" /> },
    {
      name: "GScholar",
      url: "https://scholar.google.com/citations?user=PP-r87QAAAAJ&hl=en&authuser=1",
      icon: <Notebook className="h-5 w-5" />,
    },
    { name: "LeetCode", url: "https://leetcode.com/u/Moncarnio/", icon: <Code className="h-5 w-5" /> },
  ];

  return (
    <div id="contact" className="w-full bg-black text-white mb-28 py-16 px-4 ">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Contact Me</h2>

        <div className="mb-10">
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center md:items-start mb-8">
            {/* Email with copy button */}
            <div className="bg-zinc-900 rounded-xl p-5 w-full md:w-1/2">
              <h3 className="text-xl font-medium mb-4">Email Me</h3>
              <div className="flex items-center justify-between p-3 bg-zinc-800 rounded-lg">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-zinc-400" />
                  <span className="text-sm md:text-base">{email}</span>
                </div>
                <Button variant="ghost" size="icon" onClick={() => copyToClipboard(email)} className="h-8 w-8">
                  {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
              <div className="mt-4 flex gap-3">
                <Button variant="outline" className="w-full text-black" asChild>
                  <a href={`mailto:${email}`}>
                    <Mail className="mr-2 h-4 w-4 text-black" />
                    Send Email
                  </a>
                </Button>
                <Button variant="outline" className="w-full text-black" asChild>
                  <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="mr-2 h-4 w-4 text-black" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-zinc-900 rounded-xl p-5 w-full md:w-1/2">
              <h3 className="text-xl font-medium mb-4">Find Me Online</h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors"
                  >
                    {link.icon}
                    <span>{link.name}</span>
                    <ExternalLink className="h-3 w-3 ml-auto" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* <div className="text-center text-zinc-400"> Made with ❤️ by Ayush</div> */}
      </div>
    </div>
  )
}
