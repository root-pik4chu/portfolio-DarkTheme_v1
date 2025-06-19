"use client"
import React, { useRef } from "react";
import Image from "next/image";
import Hover from "@/components/hover/page";
import { gsap } from "gsap";

export default function page() {
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const underscore1Ref = useRef(null);
  const underscore2Ref = useRef(null);
  const underscore3Ref = useRef(null);

  const handleMouseMove = (e) => {
    const line1Rect = line1Ref.current.getBoundingClientRect();
    const line2Rect = line2Ref.current.getBoundingClientRect();
    const line3Rect = line3Ref.current.getBoundingClientRect();
    const mouseY = e.clientY;
    const mouseX = e.clientX;

    // Update underscore positions based on which line is being hovered
    if (mouseY >= line1Rect.top && mouseY <= line1Rect.bottom) {
      gsap.to(underscore1Ref.current, {
        x: mouseX - line1Rect.left,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out"
      });
      gsap.to([underscore2Ref.current, underscore3Ref.current], {
        opacity: 0,
        duration: 0.1
      });
    } else if (mouseY >= line2Rect.top && mouseY <= line2Rect.bottom) {
      gsap.to(underscore2Ref.current, {
        x: mouseX - line2Rect.left,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out"
      });
      gsap.to([underscore1Ref.current, underscore3Ref.current], {
        opacity: 0,
        duration: 0.1
      });
    } else if (mouseY >= line3Rect.top && mouseY <= line3Rect.bottom) {
      gsap.to(underscore3Ref.current, {
        x: mouseX - line3Rect.left,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out"
      });
      gsap.to([underscore1Ref.current, underscore2Ref.current], {
        opacity: 0,
        duration: 0.1
      });
    }
  };

  const handleMouseLeave = () => {
    gsap.to([underscore1Ref.current, underscore2Ref.current, underscore3Ref.current], {
      opacity: 0,
      duration: 0.3,
      ease: "power2.inOut"
    });
  };

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
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <h1 className="text-[3.5vw] leading-none text-justify">
              <div ref={line1Ref} className="relative">
                Started with logic, stayed for the creativityI turn interfaces 
                <div 
                  ref={underscore1Ref}
                  className="absolute bottom-0 left-0 w-[50px] h-[5px] bg-[#FF2B2B] transform -translate-x-1/2 opacity-0"
                />
              </div>
              <div ref={line2Ref} className="relative">
              into experiences with motion, design, and code Freelance 
                <div 
                  ref={underscore2Ref}
                  className="absolute bottom-0 left-0 w-[50px] h-[5px] bg-[#FF2B2B] transform -translate-x-1/2 opacity-0"
                />
              </div>
              <div ref={line3Ref} className="relative">
              frontend, forever chasing that "wow" moment
                <div 
                  ref={underscore3Ref}
                  className="absolute bottom-0 left-0 w-[50px] h-[5px] bg-[#FF2B2B] transform -translate-x-1/2 opacity-0"
                />
              </div>
            </h1>
          </div>
          <div className="flex w-[60%] h-[50vh] mx-auto mt-[20vh]">
            <div className="chota-text w-[50%] mx-auto  text-[.9vw] leading-none text-justify flex justify-between flex-col">
              <p>
                I didn't begin with pixels or palettes—I started with logic
                gates, loops, and Java. The early days were all about solving
                problems, debugging code, and cracking data structures like
                puzzles. But as I wrote more, I realized I wasn't just
                interested in answers—I was curious about how things looked and
                felt. Why did some interfaces feel intuitive, while others felt
                like a chore? That curiosity pulled me toward the front end,
                where visuals meet logic and every decision shapes how people
                interact. I didn't leave the backend behind—I just found
                something that made me want to stay up late for different
                reasons.
              </p>
              <br />
              <p>
                Soon I was hooked on motion. The way an element slides, fades,
                or bounces isn't just visual fluff—it's storytelling. Animation
                gave my work rhythm. Design gave it purpose. I learned to see
                whitespace as breath, contrast as voice, and structure as
                narrative. Each project became less about building a website and
                more about creating an experience. It's not just about being
                functional anymore—it's about being memorable.
              </p>
              <br />
              <p>
                Now I work as a freelance frontend developer, building things
                that feel alive. Whether it's a portfolio, product site, or
                experimental concept—I approach each one like a scene waiting to
                unfold. I love the challenge of translating abstract ideas into
                visuals, of turning static designs into responsive, emotional
                spaces. This isn't just a job for me—it's a form of expression.
                And I'm still evolving, still chasing that invisible moment when
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
