import { Code } from '../../components/Code'
import dynamic from 'next/dynamic'

const ChartComponent = dynamic(() => import('./LargeComponent'))

const CodeSplittingPage = () => {
  const code = `import dynamic from 'next/dynamic'

const ChartComponent = dynamic(() => import('./LargeComponent'))`

  return (
    <div className="grid gap-8">
      <h1 className="text-lg font-bold">Code splitting for client component</h1>

      <section>
        <h2 className="mb-2 font-bold">Demo</h2>
        <ChartComponent />
      </section>

      <section>
        <h2 className="mb-2 font-bold">Code Block</h2>
        <Code code={code} />
      </section>
    </div>
  )
}

export default CodeSplittingPage
