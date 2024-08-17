import React from 'react'
import Image, { StaticImageData } from 'next/image'

type CardProps = {
  image: StaticImageData
  title: string
  description: string
}

export const Card = ({ image, title, description }: CardProps) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <Image className="w-full" src={image} alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>
    </div>
  )
}
