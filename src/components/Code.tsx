'use client'

import { CodeBlock, nord } from 'react-code-blocks'

type CodeProps = {
  code: string
}

export const Code = ({ code }: CodeProps) => {
  return (
    <CodeBlock
      text={code}
      language="tsx"
      theme={nord}
    />
  )
}
