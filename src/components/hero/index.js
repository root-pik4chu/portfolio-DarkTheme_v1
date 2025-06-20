"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { motion } from "framer-motion";
import { Power4 } from "gsap";
// import Copy from '../textEffect/Copy'
export default function Hero() {
  const scrollerRef = useRef(null);
  const scrollTween = useRef(null);
  const projectRefs = useRef([]);
  const isScrolling = useRef(false);
  const mouseFollowerRef = useRef(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    const mouseFollower = mouseFollowerRef.current;

    // Calculate the total width of the scrollable content
    const totalWidth =
      scroller.scrollWidth - scroller.parentElement.offsetWidth;

    // Set initial position
    gsap.set(scroller, { x: 0 });
    gsap.set(mouseFollower, { scale: 0, opacity: 0 });

    const handleWheel = (e) => {
      e.preventDefault();

      // Get current position
      const currentX = gsap.getProperty(scroller, "x");

      // Calculate new position with smooth deceleration
      const newX = Math.max(-totalWidth, Math.min(0, currentX + e.deltaY * 3));

      // Set scrolling state
      isScrolling.current = true;

      // Kill any existing animation
      if (scrollTween.current) {
        scrollTween.current.kill();
      }

      // Create new animation with smooth easing
      scrollTween.current = gsap.to(scroller, {
        x: newX,
        duration: 1.2,
        ease: "power3.out",
        overwrite: true,
        onStart: () => {
          // Shrink all cards
          projectRefs.current.forEach((project) => {
            if (project) {
              gsap.to(project, {
                scale: 0.95,
                duration: 0.1,
                ease: "power1.out",
              });
            }
          });
        },
        onComplete: () => {
          // Return to original size
          isScrolling.current = false;
          projectRefs.current.forEach((project) => {
            if (project) {
              gsap.to(project, {
                scale: 1,
                duration: 0.1,
                ease: "power2.out",
              });
            }
          });
        },
      });
    };

    // Add touch support for mobile devices
    let startX = 0;
    let scrollLeft = 0;

    const handleTouchStart = (e) => {
      startX = e.touches[0].pageX;
      scrollLeft = gsap.getProperty(scroller, "x");
    };

    const handleTouchMove = (e) => {
      e.preventDefault();
      const x = e.touches[0].pageX;
      const walk = (x - startX) * 5;
      const newX = Math.max(-totalWidth, Math.min(0, scrollLeft + walk));

      // Set scrolling state
      isScrolling.current = true;

      if (scrollTween.current) {
        scrollTween.current.kill();
      }

      scrollTween.current = gsap.to(scroller, {
        x: newX,
        duration: 0.6,
        ease: "power3.out",
        overwrite: true,
        onStart: () => {
          // Shrink all cards
          projectRefs.current.forEach((project) => {
            if (project) {
              gsap.to(project, {
                scale: 0.95,
                duration: 0.1,
                ease: "power1.out",
              });
            }
          });
        },
        onComplete: () => {
          // Return to original size
          isScrolling.current = false;
          projectRefs.current.forEach((project) => {
            if (project) {
              gsap.to(project, {
                scale: 1,
                duration: 0.1,
                ease: "power2.out",
              });
            }
          });
        },
      });
    };

    // Mouse follower functionality
    const handleMouseMove = (e) => {
      gsap.to(mouseFollower, {
        x: e.clientX + 50,
        y: e.clientY + 50,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const handleMouseEnterCards = () => {
      gsap.to(mouseFollower, {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeaveCards = () => {
      gsap.to(mouseFollower, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    // Get the secondWrapper (card section)
    const cardSection = scroller.parentElement;

    // Add event listeners
    scroller.addEventListener("wheel", handleWheel, { passive: false });
    scroller.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    scroller.addEventListener("touchmove", handleTouchMove, { passive: false });

    // Mouse follower event listeners
    document.addEventListener("mousemove", handleMouseMove);
    cardSection.addEventListener("mouseenter", handleMouseEnterCards);
    cardSection.addEventListener("mouseleave", handleMouseLeaveCards);

    return () => {
      scroller.removeEventListener("wheel", handleWheel);
      scroller.removeEventListener("touchstart", handleTouchStart);
      scroller.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("mousemove", handleMouseMove);
      cardSection.removeEventListener("mouseenter", handleMouseEnterCards);
      cardSection.removeEventListener("mouseleave", handleMouseLeaveCards);
      if (scrollTween.current) {
        scrollTween.current.kill();
      }
    };
  }, []);

  return (
    <div>
      {/* Mouse Follower */}
      <div
        ref={mouseFollowerRef}
        className="fixed top-0 left-0 w-16 h-16 bg-white rounded-full flex items-center justify-center text-black text-sm font-medium pointer-events-none z-50 "
        style={{ transform: "translate(-50%, -50%)" }}
      >
        scroll
      </div>

      <div className=" w-full h-[95vh] text-zinc-300 bg-zinc-950">
        <div className="wrapper w-full h-full relative">
          <div className="firstWrapper w-full h-[20vh] relative">
            <div className="container-wrapper w-full h-full flex justify-between items-center px-[0.3vw]">
              <div className="text-wrapper w-[85%] h-full">
                <h1 className="text-[5vw] leading-none overflow-hidden">
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{
                      ease: Power4.easeInOut,
                      duration: 2,
                      delay: 4,
                    }}
                    className="inline-block origin-left"
                  >
                    I&apos;m{" "}
                    <span className="text-[#FF2B2B] ">
                      Front End Developer & Designer
                    </span>{" "}
                  </motion.span>
                </h1>{" "}
                {/* <p className="overflow-hidden">
                    <motion.span
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{
                        ease: Power4.easeInOut,
                        duration: 2,
                        delay: index * 0.2,
                      }}
                      className="inline-block origin-left"
                    >
                      {item}
                    </motion.span>
                  </p> */}
                <h1 className="text-[5vw] leading-none overflow-hidden">
                  {" "}
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{
                      ease: Power4.easeInOut,
                      duration: 2,
                      delay: 4.1,
                    }}
                    className="inline-block origin-left"
                  >
                    based in Maharashtra{" "}
                  </motion.span>
                </h1>
              </div>

              <div className="box h-full w-[15%]  flex items-end justify-end pb-[0.5vw]">
                <div className="box py-[0.2vw] px-[1vw] border border-y-zinc-400 rounded-full text-[0.7vw]">
                  <p>
                    <motion.span
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{
                        ease: Power4.easeInOut,
                        duration: 2,
                        delay: 4,
                      }}
                      className="inline-block origin-left"
                    >
                      sahilsaundale@gmail.com
                    </motion.span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="secondWrapper w-full h-[75vh]  overflow-hidden px-[.5vw]">
            <div className="projectWrapper w-full h-full overflow-hidden">
              <div
                ref={scrollerRef}
                className="flex flex-nowrap h-full gap-[0.5vw]"
              >
                {[1, 2, 3, 4, 5, 6, 7].map((item, index) => {
                  return (
                    <div
                      key={index}
                      ref={(el) => (projectRefs.current[index] = el)}
                      className="w-[20vw] h-full flex-shrink-0 flex items-center justify-center text-white text-2xl font-bold transform-gpu"
                    >
                      <div className="wrap-project w-full h-full">
                        <div className="text flex flex-col gap-[0.5vw] h-[25%] justify-between pb-[1vw]">
                          <h1 className="text-[.7vw] overflow-hidden">
                            <motion.span
                              initial={{ y: "100%" }}
                              animate={{ y: 0 }}
                              transition={{
                                ease: Power4.easeInOut,
                                duration: 2,
                                delay: 4,
                              }}
                              className="inline-block origin-left"
                            >
                              Project {index + 1}
                            </motion.span>
                          </h1>
                          <p className="text-[0.8vw] w-[80%] overflow-hidden">
                            <motion.span
                              initial={{ y: "100%" }}
                              animate={{ y: 0 }}
                              transition={{
                                ease: Power4.easeInOut,
                                duration: 2,
                                delay: 4,
                              }}
                              className="inline-block origin-left"
                            >
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Quisquam, quos.
                            </motion.span>
                          </p>
                          
                        </div>
                        <div className="image w-full h-[75%] relative overflow-hidden">
                          <Image
                            src="https://images.unsplash.com/photo-1702479744062-1880502275b1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="project1"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
