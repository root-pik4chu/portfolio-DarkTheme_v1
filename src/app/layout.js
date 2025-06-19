  "use client";
  import { useLenisScroll } from "@/hooks/useLenis";
  import { usePathname } from "next/navigation";
  import { useEffect } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Template from "./template";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});



export default function RootLayout({ children }) {
  useLenisScroll();
  const pathname = usePathname();

  useEffect(()=>{
    setTimeout( () => {
      document.body.style.cursor = 'default'
      window.scrollTo(0,0);
    }, 2000)
  },[])
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <Template>{children}</Template>
      </body>
    </html>
  );
}
