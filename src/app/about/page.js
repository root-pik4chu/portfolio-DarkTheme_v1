"use client"
import React, { useRef } from "react";
import Image from "next/image";
import Hover from "@/components/hover/page";
import { gsap } from "gsap";

export default function page() {
 

  const items = [
    {
      company: "TechNova Inc.",
      position: "Frontend Developer",
      date: "Jan 2022 - Present"
    },
    {
      company: "CodeCraft Labs",
      position: "UI Engineer",
      date: "Aug 2020 - Dec 2021"
    },
    {
      company: "PixelWorks Studio",
      position: "React Developer",
      date: "Feb 2019 - Jul 2020"
    },
    {
      company: "NextGen Softwares",
      position: "Junior Developer",
      date: "Jul 2018 - Jan 2019"
    },
    {
      company: "InnoTech Solutions",
      position: "Intern Developer",
      date: "Jan 2018 - Jun 2018"
    },
    {
      company: "DesignSprint Agency",
      position: "Web Designer",
      date: "Jul 2017 - Dec 2017"
    },
    {
      company: "VisionByte Ltd.",
      position: "UI/UX Intern",
      date: "Jan 2017 - Jun 2017"
    },
    {
      company: "AlphaDev Group",
      position: "Freelancer",
      date: "2016 - 2017"
    }
  ];
  
  return (
    <div>
      <div className="w-full  bg-zinc-950 text-zinc-50 ">
        <div className="wrapper w-full h-full relative ">
          <div 
            className="heading w-full mx-auto pt-[5vh] relative"
            
          >
            <h1 className="text-[3.5vw] leading-none text-justify">
              <div  className="relative">
                Started with logic, stayed for the creativityI turn interfaces 
                <div 
                
                  className="absolute bottom-0 left-0 w-[50px] h-[5px] bg-[#FF2B2B] transform -translate-x-1/2 opacity-0"
                />
              </div>
              <div  className="relative">
              into experiences with motion, design, and code Freelance 
                <div 
                  
                  className="absolute bottom-0 left-0 w-[50px] h-[5px] bg-[#FF2B2B] transform -translate-x-1/2 opacity-0"
                />
              </div>
              <div  className="relative">
              frontend, forever chasing that &quot;wow&quot; moment
                <div 
                  
                  className="absolute bottom-0 left-0 w-[50px] h-[5px] bg-[#FF2B2B] transform -translate-x-1/2 opacity-0"
                />
              </div>
            </h1>
          </div>
          <div className="flex w-[60%] h-[50vh] mx-auto mt-[20vh]">
            <div className="chota-text w-[50%] mx-auto  text-[.9vw] leading-none text-justify flex justify-between flex-col">
              <p>
                I didn&apos;t begin with pixels or palettes—I started with logic
                gates, loops, and Java. The early days were all about solving
                problems, debugging code, and cracking data structures like
                puzzles. But as I wrote more, I realized I wasn&apos;t just
                interested in answers—I was curious about how things looked and
                felt. Why did some interfaces feel intuitive, while others felt
                like a chore? That curiosity pulled me toward the front end,
                where visuals meet logic and every decision shapes how people
                interact. I didn&apos;t leave the backend behind—I just found
                something that made me want to stay up late for different
                reasons.
              </p>
              <br />
              <p>
                Soon I was hooked on motion. The way an element slides, fades,
                or bounces isn&apos;t just visual fluff—it&apos;s storytelling. Animation
                gave my work rhythm. Design gave it purpose. I learned to see
                whitespace as breath, contrast as voice, and structure as
                narrative. Each project became less about building a website and
                more about creating an experience. It&apos;s not just about being
                functional anymore—it&apos;s about being memorable.
              </p>
              <br />
              <p>
                Now I work as a freelance frontend developer, building things
                that feel alive. Whether it&apos;s a portfolio, product site, or
                experimental concept—I approach each one like a scene waiting to
                unfold. I love the challenge of translating abstract ideas into
                visuals, of turning static designs into responsive, emotional
                spaces. This isn&apos;t just a job for me—it&apos;s a form of expression.
                And I&apos;m still evolving, still chasing that invisible moment when
                tech meets art—and everything just clicks.
              </p>
            </div>
            <div className="w-[50%] h-full relative flex  items-end justify-end">
              <div className="w-[13vw] bg-zinc-500 ">
                <Image src="/image.jpg" alt="about" width={500} height={500} />
              </div>
            </div>
          </div>
          <div className="w-full h-[20vh] flex items-end justify-end">
            <div className="w-[60%] h-[5vh]  mx-auto flex justify-between ">
              <div className="w-[7vw]">
                <Image
                  src={"/images/github.svg"}
                  alt="github"
                  width={500}
                  height={500}
                />
              </div>
              <div className="w-[7vw]">
                <Image
                  src={"/images/canva.svg"}
                  alt="github"
                  width={500}
                  height={500}
                />
              </div>
              <div className="w-[7vw]">
                <Image
                  src={"/images/dribbble.svg"}
                  alt="github"
                  width={500}
                  height={500}
                />
              </div>
              <div className="w-[7vw]">
                <Image
                  src={"/images/gitlab.svg"}
                  alt="github"
                  width={500}
                  height={500}
                />
              </div>
              <div className="w-[7vw]">
                <Image
                  src={"/images/notion.svg"}
                  alt="github"
                  width={500}
                  height={500}
                />
              </div>
              <div className="w-[7vw]">
                <Image
                  src={"/images/webflow.svg"}
                  alt="github"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>

          <div className="w-full h-[80vh] flex items-center justify-center">
            
              
              <div className="w-[70%] h-full relative flex items-center justify-center flex-col">
                {items.map((text, index) => (
                  <Hover key={index} company={text.company} position={text.position} date={text.date} />
                ))}
              </div>
              
            
          </div>
        </div>
      </div>
    </div>
  );
}
