import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

export default function page() {
  const projects = Array.from({ length: 8 });

  return (
    <div className="min-h-screen md:w-[80%] mx-auto text-white p-6">
      <h1 className="md:text-[5vw] text-[10vw] md:text-start text-center font-light  mb-8">
        Selected <span className="text-red-500 ">projects</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {projects.map((_, idx) => (
          <div key={idx} className="space-y-2">
            <p className="text-xs text-gray-500">001</p>
            <p className="font-semibold text-sm">OCA TOKYO.</p>
            <p className="text-xs text-gray-300 leading-snug">
              A Scope That Turns Even the Slightest Detail into a "Painting"
            </p>
            <div className="bg-gray-300 md:h-[70vh] h-[40vh] w-full relative"> 
              <Image 
                src="https://images.unsplash.com/photo-1695634621375-0b66a9d5d1bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHByb2plY3QlMjBtb2NrdXBzfGVufDB8fDB8fHww" 
                alt="project" 
                fill 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className='object-cover' 
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
