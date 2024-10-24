'use client'

import React, { useEffect, useRef, useState } from 'react'
import { FaHtml5, FaCss3Alt, FaReact, FaGit, FaGithub } from 'react-icons/fa'
import { SiJavascript, SiTypescript, SiNextdotjs, SiRedux, SiSanity } from 'react-icons/si'
import { RiTailwindCssFill } from 'react-icons/ri'
import { BiLogoFirebase } from 'react-icons/bi'

export default function RunningSlider() {
  const sliderRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const animationRef = useRef<number | null>(null)
  const lastTimeRef = useRef<number>(0)
  const progressRef = useRef<number>(0)

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    const totalWidth = slider.scrollWidth / 2
    const duration = 40000 
    const animate = (currentTime: number) => {
      if (lastTimeRef.current !== 0) {
        const deltaTime = currentTime - lastTimeRef.current
        if (!isPaused) {
          progressRef.current += (deltaTime / duration) * totalWidth
          progressRef.current %= totalWidth
        }
        slider.style.transform = `translateX(-${progressRef.current}px)`
      }
      lastTimeRef.current = currentTime
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isPaused])

  const icons = [
    { Icon: FaHtml5, color: 'hover:text-red-600', name: 'HTML5' },
    { Icon: FaCss3Alt, color: 'hover:text-blue-500', name: 'CSS3' },
    { Icon: SiJavascript, color: 'hover:text-yellow-400', name: 'JavaScript' },
    { Icon: SiTypescript, color: 'hover:text-blue-600', name: 'TypeScript' },
    { Icon: SiNextdotjs, color: 'hover:text-black', name: 'Next.js' },
    { Icon: SiRedux, color: 'hover:text-purple-600', name: 'Redux' },
    { Icon: RiTailwindCssFill, color: 'hover:text-sky-400', name: 'Tailwind CSS' },
    { Icon: BiLogoFirebase, color: 'hover:text-yellow-500', name: 'Firebase' },
    { Icon: FaGithub, color: 'hover:text-gray-800', name: 'GitHub' },
    { Icon: FaReact, color: 'hover:text-blue-500', name: 'React' },
    { Icon: FaGit, color: 'hover:text-orange-600', name: 'Git' },
    { Icon: SiSanity, color: 'hover:text-gray-800', name: 'Sanity' },
  ]

  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden  p-8">
      <div
        ref={sliderRef}
        className="flex whitespace-nowrap"
        style={{ width: '200%' }}
      >
        {[...Array(2)].map((_, setIndex) => (
          <React.Fragment key={setIndex}>
            {icons.map(({ Icon, color, name }, iconIndex) => (
              <div
                key={`${setIndex}-${iconIndex}`}
                className="inline-flex items-center justify-center mx-8"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <Icon className={`w-20 h-20 ${color} transition-transform hover:scale-110`} title={name} />
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}