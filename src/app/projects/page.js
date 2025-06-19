import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

export default function page() {
  const projects = [
    {
      id: 1,
      title: "OCA TOKYO",
      description: "A Scope That Turns Even the Slightest Detail into a &ldquo;Painting&rdquo;",
      image: "https://images.unsplash.com/photo-1695634621375-0b66a9d5d1bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHByb2plY3QlMjBtb2NrdXBzfGVufDB8fDB8fHww"
    },
    {
      id: 2,
      title: "ECO HUB",
      description: "Sustainable living platform with interactive design",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWNvJTIwcHJvamVjdHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      id: 3,
      title: "NEON DREAMS",
      description: "Cyberpunk-inspired gaming interface with dynamic animations",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FtaW5nJTIwaW50ZXJmYWNlfGVufDB8fDB8fHww"
    },
    {
      id: 4,
      title: "MINIMALIST",
      description: "Clean and simple design system for modern applications",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWluaW1hbGlzdCUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      id: 5,
      title: "URBAN FLOW",
      description: "City planning interface with real-time data visualization",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXJiYW4lMjBwbGFubmluZ3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      id: 6,
      title: "DIGITAL ART",
      description: "Creative platform for digital artists and designers",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGlnaXRhbCUyMGFydHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      id: 7,
      title: "FUTURE TECH",
      description: "Next-generation technology showcase with immersive experiences",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnV0dXJlJTIwdGVjaHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      id: 8,
      title: "SPACE ODYSSEY",
      description: "Interactive space exploration platform with 3D visualizations",
      image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3BhY2UlMjBleHBsb3JhdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
    }
  ];

  return (
    <div className="min-h-screen md:w-[80%] mx-auto text-white p-6">
      <h1 className="md:text-[5vw] text-[10vw] md:text-start text-center font-light mb-8">
        Selected <span className="text-red-500">projects</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <Link href={`/projects/${project.id}`} key={project.id} className="group">
            <div className="space-y-2 cursor-pointer transition-transform duration-300 group-hover:scale-105">
              <p className="text-xs text-gray-500">{(idx + 1).toString().padStart(3, '0')}</p>
              <p className="font-semibold text-sm">{project.title}</p>
              <p className="text-xs text-gray-600 leading-snug">
                {project.description}
              </p>
              <div className="bg-gray-300 md:h-[70vh] h-[40vh] w-full relative overflow-hidden"> 
                <Image 
                  src={project.image}
                  alt={project.title}
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className='object-cover transition-transform duration-300 group-hover:scale-110' 
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
