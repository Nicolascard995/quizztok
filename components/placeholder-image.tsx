"use client"
import { useState, useEffect } from "react"

interface PlaceholderImageProps {
  width: number
  height: number
  alt: string
  className?: string
}

export default function PlaceholderImage({ width, height, alt, className }: PlaceholderImageProps) {
  const [color, setColor] = useState("#4f46e5") // Color inicial (indigo-600)

  // Genera un color aleatorio para cada imagen
  useEffect(() => {
    const colors = [
      "#ec4899", // pink-500
      "#8b5cf6", // violet-500
      "#06b6d4", // cyan-500
      "#f97316", // orange-500
      "#10b981", // emerald-500
    ]
    setColor(colors[Math.floor(Math.random() * colors.length)])
  }, [])

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ width: `${width}px`, height: `${height}px` }}>
      <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: color }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width * 0.3}
          height={height * 0.3}
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
      </div>
    </div>
  )
}

