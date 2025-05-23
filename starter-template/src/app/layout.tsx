import type { Metadata } from "next";
//importing fonts form nextjs 
import { Inter  , Calistoga} from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge"; // or 'tailwind-merge' if you're using that
import SparklingBackground from "@/components/spark-background";
import DynamicSparkles from "@/components/dynamic-sparkel";

const inter = Inter({ subsets: ["latin"] , variable: "--font-sans" });
const calistoga = Calistoga({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Ayush's Portfolio",
  description: "Thanks for coming",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
<body className={twMerge(`${inter.variable} ${calistoga.variable} bg-black text-white antialiased font-sans`)}>
  {/* <SparklingBackground/> */}
  <DynamicSparkles/>
{children}
      </body>
      </html>
  );
}
