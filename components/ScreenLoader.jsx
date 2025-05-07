'use client'
import { gsap } from '@/lib/gsap'
import React, { useEffect } from 'react'

export const ScreenLoader = () => {
    useEffect(() => {
        gsap.to('.loader', {
            duration: 5,
            rotateZ: 10000,
            ease: 'power2.inOut',
            onComplete: () => {
                document.querySelector('.loader').style.display = 'none'
            }
        })
      
    }, [])
    
  return (
    <div className='loader w-full h-screen flex justify-center items-center'>
      <svg
        className="animate-spin -ml-1 mr-3 h-10 w-10 text-gray-200"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle className="opacity-25" cx="12" cy="12" r="10" />
        <path className="opacity-75" d="M4 12a8 8 0 1 1 16 0A8 8 0 0 1 4 12z" />
      </svg>
    </div>
  )
}
