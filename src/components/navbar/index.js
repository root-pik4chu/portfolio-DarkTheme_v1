import React from 'react'
import Link from 'next/link'
export default function index() {
  return (
    <div>
      <div className="w-full h-[5vh] bg-zinc-950 text-zinc-50">
        <div className="w-full h-full flex items-center justify-between uppercase text-[.7vw] px-[0.5vw]">
          <div className=""><p className=''>sahil saundale</p></div>
          <div className="flex items-center gap-[0.5vw] ">
            <div className=""><Link href="/">home</Link></div> 
            <div className=""><Link href="/about">about</Link></div>
            <div className=""><Link href="/projects">projects</Link></div>
            <div className=""><Link href="/contact">contact</Link></div>
          </div>
        </div>
      </div>
    </div>
  )
}
