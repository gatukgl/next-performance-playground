'use client'

import Image from 'next/image'
import { CodeBlock, nord } from 'react-code-blocks'
import image from '../../../public/card-img.jpg'

const NextImagePage = () => {
  const code = `import Image from 'next/image'

<Image
  src={image} 
  alt="Sunset in the mountains" 
  width={364} 
  height={208} 
  sizes="(max-width: 768px) 100vw, 35vw" 
/>`

  return (
    <div className="grid gap-8">
      <h1>Next.js Image component</h1>

      <section>
        <h2 className="mb-2">Demo</h2>
        <Image
          src={image}
          alt="Sunset in the mountains"
          width={364}
          height={208}
          sizes="(max-width: 768px) 100vw, 35vw"
        />
      </section>

      <section>
        <h2 className="mb-2">Code Block</h2>
        <CodeBlock
          text={code}
          language="tsx"
          theme={nord}
        />
      </section>
    </div>
  )
}

export default NextImagePage;
