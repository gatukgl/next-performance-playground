import { Code } from '../../components/Code'

const CodeSplittingPage = () => {
  const code = ``

  return (
    <div className="grid gap-8">
      <h1>Next.js Image component</h1>

      <section>
        <h2 className="mb-2">Demo</h2>
      </section>

      <section>
        <h2 className="mb-2">Code Block</h2>
        <Code code={code} />
      </section>
    </div>
  )
}

export default CodeSplittingPage
