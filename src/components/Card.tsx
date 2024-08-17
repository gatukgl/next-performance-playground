import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

type CardProps = {
  image: StaticImageData
  title: string
  description: string
  path: string
}

export const Card = ({ image, title, description, path }: CardProps) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <Link href={path}>
        <Image
          className="w-full"
          src={image}
          alt="Sunset in the mountains"
          width={728}
          height={408}
          sizes="(max-width: 768px) 100vw, 35vh" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">
            {description}
          </p>
        </div>
      </Link>
    </div>
  )
}
