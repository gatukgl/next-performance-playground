import { Code } from '../../components/Code'
import dynamic from 'next/dynamic'

const ChartComponent = dynamic(() => import('./LargeComponent'))

const CodeSplittingPage = () => {
  const code = ``

  return (
    <div className="grid gap-8">
      <h1>Next.js Image component</h1>

      <section>
        <h2 className="mb-2">Demo</h2>
        <ChartComponent />
      </section>

      <section>
        <h2 className="mb-2">Code Block</h2>
        <Code code={code} />
      </section>
    </div>
  )
}

export default CodeSplittingPage
