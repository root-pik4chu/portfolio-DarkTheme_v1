"use client"
import { useRef } from "react";
import { gsap } from "gsap";

export default function Hover({ company, position, date }) {
  const boxRef = useRef(null);
  const overlayRef = useRef(null);
  const textRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = boxRef.current.getBoundingClientRect();
    const isHoveringTop = e.clientY < rect.top + rect.height / 2;

    if (overlayRef.current) {
      overlayRef.current.style.bottom = isHoveringTop ? "auto" : "0";
      overlayRef.current.style.top = isHoveringTop ? "0" : "auto";
    }

    gsap.to(overlayRef.current, {
      height: "100%",
      duration: 0.5,
      ease: "power2.out",
    });

    gsap.to(textRef.current, {
      duration: 0.2,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(overlayRef.current, {
      height: 0,
      duration: 0.5,
      ease: "power2.inOut",
    });

    gsap.to(textRef.current, {
      duration: 0.2,
    });
  };

  return (
    <div
      ref={boxRef}
      className="relative w-full h-[8vh] border-b border-zinc-800 text-lg font-sans flex items-center overflow-hidden px-8"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={overlayRef}
        className="absolute left-0 w-full h-0 bg-[#FF2B2B] z-10"
      ></div>
      <div className="w-full flex items-center justify-between relative z-20">
        <div className="flex flex-col  w-[33.3%]">
          <p className="text-[.7vw] text-zinc-500">Company</p>
          <p className="text-[0.8vw] text-zinc-50">{company}</p>
        </div>
        <div className="flex flex-col  w-[33.3%]">
          <p className="text-[.7vw] text-zinc-500">Position</p>
          <p className="text-[0.8vw] text-zinc-50">{position}</p>
        </div>
        <div className="flex flex-col    w-[18.3%]">
          <p className="text-[.7vw] text-zinc-500">Date</p>
          <p className="text-[0.8vw] text-zinc-50">{date}</p>
        </div>
      </div>
    </div>
  );
}


