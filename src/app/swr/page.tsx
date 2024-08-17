'use client'

import { useState } from 'react'
import useSWR, { useSWRConfig } from 'swr'
import { Code } from '../../components/Code'
import { SWRCacheProvider } from './SWRCacheProvider'

const SWRPage = () => {
  const [isShowDogBreeds, setIsShowDogBreeds] = useState(false)
  const { cache } = useSWRConfig()

  const code = ''
  const apiUrl = 'https://dogapi.dog/api/v2/breeds'

  const fetcher = async (apiUrl: string) => {
    try {
      const data = await fetch(apiUrl)
      return await data.json()
    } catch (error) {
      console.error('Cannot fetch dog breeds from API', error)
      return null
    }
  }

  const { data } = useSWR(!cache.get(apiUrl) ? apiUrl : null, fetcher)

  const handleOnClick = () => {
    const newState = !isShowDogBreeds
    setIsShowDogBreeds(newState)
  }

  const handleOnHover = async () => {
    if (cache.get(apiUrl)) { return }
    await fetcher(apiUrl)
  }

  return (
    <SWRCacheProvider>
      <div className="grid gap-8">
        <h1>Next.js Image component</h1>

        <section>
          <h2 className="mb-2">Demo</h2>

          <div>
            <button
              className="btn bg-gray-100 px-4 py-2 rounded border border-blue-200 hover:border-blue-300"
              onClick={handleOnClick}
              onMouseOver={handleOnHover}
            >
              See dog breeds
            </button>

            {
              isShowDogBreeds && (
                <>
                  <h3 className='mb-2'>Dog Breeds</h3>

                  {
                    data?.data?.map((breed: any) => (
                      <div key={breed.id} className="mb-4">
                        <p><label className='font-bold'>Name:</label> <span>{breed.attributes.name}</span></p>
                        <p><label className='font-bold'>Description:</label> <span>{breed.attributes.description}</span></p>
                      </div>
                    ))
                  }
                </>
              )
            }
          </div>
        </section>

        <section>
          <h2 className="mb-2">Code Block</h2>
          <Code code={code} />
        </section>
      </div>
    </SWRCacheProvider>
  )
}

export default SWRPage
