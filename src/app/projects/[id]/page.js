"use client"
import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ProjectPage() {
  const params = useParams();
  const router = useRouter();
  const projectId = params.id;

  // Project data - in a real app, this would come from an API or database
  const projects = [
    {
      id: 1,
      title: "OCA TOKYO",
      description: "A Scope That Turns Even the Slightest Detail into a &ldquo;Painting&rdquo;",
      fullDescription: "OCA TOKYO is a revolutionary design platform that transforms the way we approach digital aesthetics. This project showcases the power of attention to detail, where every pixel and interaction is carefully crafted to create an immersive experience.",
      image: "https://images.unsplash.com/photo-1695634621375-0b66a9d5d1bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHByb2plY3QlMjBtb2NrdXBzfGVufDB8fDB8fHww",
      gallery: [
        "https://images.unsplash.com/photo-1695634621375-0b66a9d5d1bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHByb2plY3QlMjBtb2NrdXBzfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWNvJTIwcHJvamVjdHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FtaW5nJTIwaW50ZXJmYWNlfGVufDB8fDB8fHww"
      ],
      technologies: ["React", "Next.js", "Framer Motion", "Tailwind CSS"],
      year: "2024",
      category: "Web Design"
    },
    {
      id: 2,
      title: "ECO HUB",
      description: "Sustainable living platform with interactive design",
      fullDescription: "ECO HUB is a comprehensive platform dedicated to promoting sustainable living practices. The interface features intuitive data visualization, interactive elements, and a user-friendly design that makes environmental awareness accessible to everyone.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWNvJTIwcHJvamVjdHxlbnwwfHwwfHx8MA%3D%3D",
      gallery: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWNvJTIwcHJvamVjdHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1558655146-d09347e92766?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWluaW1hbGlzdCUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXJiYW4lMjBwbGFubmluZ3xlbnwwfHwwfHx8MA%3D%3D"
      ],
      technologies: ["Vue.js", "D3.js", "Node.js", "MongoDB"],
      year: "2024",
      category: "Sustainability"
    },
    {
      id: 3,
      title: "NEON DREAMS",
      description: "Cyberpunk-inspired gaming interface with dynamic animations",
      fullDescription: "NEON DREAMS brings the cyberpunk aesthetic to life through an immersive gaming interface. The project features dynamic animations, neon color schemes, and futuristic design elements that create an engaging user experience.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FtaW5nJTIwaW50ZXJmYWNlfGVufDB8fDB8fHww",
      gallery: [
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FtaW5nJTIwaW50ZXJmYWNlfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGlnaXRhbCUyMGFydHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3BhY2UlMjBleHBsb3JhdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
      ],
      technologies: ["Three.js", "WebGL", "GSAP", "Canvas API"],
      year: "2024",
      category: "Gaming"
    },
    {
      id: 4,
      title: "MINIMALIST",
      description: "Clean and simple design system for modern applications",
      fullDescription: "MINIMALIST is a comprehensive design system that emphasizes simplicity and functionality. The project demonstrates how clean design can enhance user experience while maintaining visual appeal.",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWluaW1hbGlzdCUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D",
      gallery: [
        "https://images.unsplash.com/photo-1558655146-d09347e92766?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWluaW1hbGlzdCUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXJiYW4lMjBwbGFubmluZ3xlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGlnaXRhbCUyMGFydHxlbnwwfHwwfHx8MA%3D%3D"
      ],
      technologies: ["React", "Styled Components", "Figma", "Storybook"],
      year: "2024",
      category: "Design System"
    },
    {
      id: 5,
      title: "URBAN FLOW",
      description: "City planning interface with real-time data visualization",
      fullDescription: "URBAN FLOW revolutionizes city planning through interactive data visualization and real-time analytics. The platform helps urban planners and citizens understand complex city data through intuitive charts and maps.",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXJiYW4lMjBwbGFubmluZ3xlbnwwfHwwfHx8MA%3D%3D",
      gallery: [
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXJiYW4lMjBwbGFubmluZ3xlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGlnaXRhbCUyMGFydHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3BhY2UlMjBleHBsb3JhdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
      ],
      technologies: ["Angular", "D3.js", "Mapbox", "WebSocket"],
      year: "2024",
      category: "Urban Planning"
    },
    {
      id: 6,
      title: "DIGITAL ART",
      description: "Creative platform for digital artists and designers",
      fullDescription: "DIGITAL ART is a comprehensive platform that empowers digital artists to showcase their work, collaborate with others, and discover new creative opportunities. The interface is designed to be as beautiful as the art it displays.",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGlnaXRhbCUyMGFydHxlbnwwfHwwfHx8MA%3D%3D",
      gallery: [
        "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGlnaXRhbCUyMGFydHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3BhY2UlMjBleHBsb3JhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1695634621375-0b66a9d5d1bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHByb2plY3QlMjBtb2NrdXBzfGVufDB8fDB8fHww"
      ],
      technologies: ["React", "Canvas API", "WebGL", "Firebase"],
      year: "2024",
      category: "Creative Platform"
    },
    {
      id: 7,
      title: "FUTURE TECH",
      description: "Next-generation technology showcase with immersive experiences",
      fullDescription: "FUTURE TECH showcases cutting-edge technologies through immersive experiences and interactive demonstrations. The platform features VR integration, AI-powered interactions, and futuristic UI elements.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnV0dXJlJTIwdGVjaHxlbnwwfHwwfHx8MA%3D%3D",
      gallery: [
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnV0dXJlJTIwdGVjaHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3BhY2UlMjBleHBsb3JhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1695634621375-0b66a9d5d1bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHByb2plY3QlMjBtb2NrdXBzfGVufDB8fDB8fHww"
      ],
      technologies: ["WebXR", "TensorFlow.js", "WebAssembly", "WebRTC"],
      year: "2024",
      category: "Emerging Tech"
    },
    {
      id: 8,
      title: "SPACE ODYSSEY",
      description: "Interactive space exploration platform with 3D visualizations",
      fullDescription: "SPACE ODYSSEY takes users on an interactive journey through the cosmos with stunning 3D visualizations and educational content. The platform combines scientific accuracy with engaging design.",
      image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3BhY2UlMjBleHBsb3JhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      gallery: [
        "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3BhY2UlMjBleHBsb3JhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1695634621375-0b66a9d5d1bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHByb2plY3QlMjBtb2NrdXBzfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWNvJTIwcHJvamVjdHxlbnwwfHwwfHx8MA%3D%3D"
      ],
      technologies: ["Three.js", "WebGL", "NASA API", "Web Workers"],
      year: "2024",
      category: "Education"
    }
  ];

  const project = projects.find(p => p.id === parseInt(projectId));

  if (!project) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-4">Project Not Found</h1>
          <Link href="/projects" className="text-red-500 hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Back Button */}
        <Link href="/projects" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </Link>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-light mb-4">{project.title}</h1>
              <p className="text-xl text-gray-400 mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-4 mb-6">
                <span className="px-4 py-2 bg-zinc-800 rounded-full text-sm">{project.category}</span>
                <span className="px-4 py-2 bg-zinc-800 rounded-full text-sm">{project.year}</span>
              </div>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </motion.div>

        {/* Project Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16"
        >
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-light mb-6">About the Project</h2>
            <p className="text-gray-300 leading-relaxed text-lg">{project.fullDescription}</p>
          </div>
          <div>
            <h3 className="text-xl font-light mb-4">Technologies Used</h3>
            <div className="space-y-2">
              {project.technologies.map((tech, index) => (
                <div key={index} className="px-4 py-2 bg-zinc-800 rounded-lg text-sm">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Project Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-light mb-8">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.gallery.map((image, index) => (
              <div key={index} className="relative h-[300px] overflow-hidden rounded-lg">
                <Image
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-between items-center pt-8 border-t border-zinc-800"
        >
          {parseInt(projectId) > 1 && (
            <Link
              href={`/projects/${parseInt(projectId) - 1}`}
              className="flex items-center text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous Project
            </Link>
          )}
          {parseInt(projectId) < projects.length && (
            <Link
              href={`/projects/${parseInt(projectId) + 1}`}
              className="flex items-center text-gray-400 hover:text-white transition-colors"
            >
              Next Project
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          )}
        </motion.div>
      </div>
    </div>
  );
} 