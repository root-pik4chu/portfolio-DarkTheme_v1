"use client"

import React from 'react'
import { BsArrowReturnRight } from "react-icons/bs";
import { motion } from 'framer-motion';

export default function page() {
  const thoughts = [
    {
      id: 1,
      top: "10vh",
      left: "2vw",
      width: "30vw",
      text: "No matter how luxurious the setting, I don't want it to feel too imposing or exclusive. In every project, I aim to create a welcoming and approachable atmosphere."
    },
    {
      id: 2,
      top: "30vh",
      left: "52vw",
      width: "40vw",
      text: "No matter how luxurious the setting, I don't want it to feel too imposing or exclusive. In every project, I aim to create a welcoming and approachable atmosphere."
    },
    {
      id: 3,
      top: "60vh",
      left: "12vw",
      width: "60vw",
      text: "No matter how luxurious the setting, I don't want it to feel too imposing or exclusive. In every project, I aim to create a welcoming and approachable atmosphere."
    },
    {
      id: 4,
      top: "80vh",
      left: "75vw",
      width: "20vw",
      text: "No matter how luxurious the setting, I don't want it to feel too imposing or exclusive. In every project, I aim to create a welcoming and approachable atmosphere."
    },
    {
      id: 5,
      top: "120vh",
      left: "15vw",
      width: "60vw",
      text: "No matter how luxurious the setting, I don't want it to feel too imposing or exclusive. In every project, I aim to create a welcoming and approachable atmosphere."
    },
    {
      id: 6,
      top: "150vh",
      left: "45vw",
      width: "40vw",
      text: "No matter how luxurious the setting, I don't want it to feel too imposing or exclusive. In every project, I aim to create a welcoming and approachable atmosphere."
    }
  ];

  return (
    <div className="overflow-hidden h-[calc(100vh-10vh)] mt-[5vh]">
      <div className="w-full h-full bg-zinc-950 text-white overflow-hidden">
        <div className="w-full h-full relative overflow-hidden">
          <motion.div 
            initial={{ y: 0 }} 
            animate={{ y: "-100%" }} 
            transition={{ 
              duration: 60,
              repeat: Infinity,
              ease: "linear"
            }} 
            className="w-full h-[180vh] relative flex flex-col gap-[30vh]"
          >
            {thoughts.map((thought) => (
              <div 
                key={thought.id} 
                className="w-full absolute" 
                style={{ top: thought.top, left: thought.left }}
              >
                <div className="w-[1vw] h-[1vw] bg-zinc-50 rounded-full"></div>
                <h1 className='text-[2vw] md:text-[1vw]'>Thoughts <span className='text-[0.5vw]'>001</span></h1>
                <h1 
                  className='text-[2.5vw] md:text-[0.8vw] leading-none'
                  style={{ width: thought.width }}
                >
                  {thought.text}
                </h1>
                <div className="relative top-[1vw] flex items-end gap-[1vw]">
                  <div className=""><BsArrowReturnRight /></div>
                  <div className="md:w-[3vw] w-[10vw] md:h-[2vw] h-[5vw] bg-zinc-50"></div>
                  <h1>root</h1>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ y: 0 }} 
            animate={{ y: "-100%" }} 
            transition={{ 
              duration: 60,
              repeat: Infinity,
              ease: "linear"
            }} 
            className="w-full h-[180vh] relative flex flex-col gap-[30vh]"
          >
            {thoughts.map((thought) => (
              <div 
                key={thought.id} 
                className="w-full absolute" 
                style={{ top: thought.top, left: thought.left }}
              >
                <div className="w-[1vw] h-[1vw] bg-zinc-50 rounded-full"></div>
                <h1 className='text-[1vw]'>Thoughts <span className='text-[0.5vw]'>001</span></h1>
                <h1 
                  className='text-[0.8vw] leading-none'
                  style={{ width: thought.width }}
                >
                  {thought.text}
                </h1>
                <div className="relative top-[1vw] flex items-end gap-[1vw]">
                  <div className=""><BsArrowReturnRight /></div>
                  <div className="w-[3vw] h-[2vw] bg-zinc-50"></div>
                  <h1>root</h1>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
