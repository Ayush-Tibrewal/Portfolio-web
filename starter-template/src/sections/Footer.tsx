import { link } from "fs";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

// const footerlinks = [
//   {
//     title: 'Linkdein',
//     href: '#',
//   },
//   {
//     title: 'Github',
//     href: '#',
//   },
//   {
//     title: 'Twitter',
//     href: '#',
//   },
//   {
//     title: 'Leetcode',
//     href: '#',
//   },
// ]

export const Footer = () => {
  return (
    <>
    <footer className="relative z-20 overflow-x-clip">
     <div className="absolute h-[300px] w-full bottom-0 left-1/2 -translate-x-1/2 bg-gray-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-5"></div>
      <div className="container">
        <div className="border-t boarder-white/50 py-6 text-sm flex flex-col md:flex-row md:justify-center items-center gap-8">
          {/* <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerlinks.map(link => (
              <a href="#" key={link.title} className="inline-flex items-center gap-1.5">
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4"/>
              </a>
            ))}
          </nav> */}
          <div className="text-white">Made with ❤️ by Ayush</div>

        </div>
      </div>
    </footer>
    </>
  )
};

