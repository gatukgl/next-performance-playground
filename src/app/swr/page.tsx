'use client'

import { useState } from 'react'
import useSWR, { useSWRConfig, mutate } from 'swr'
import { SWRCacheProvider } from './SWRCacheProvider'

type BreedType = {
  id: string
  attributes: {
    name: string
    description: string
  }
}

const SWRPage = () => {
  const [isShowDogBreeds, setIsShowDogBreeds] = useState(false)
  const { cache } = useSWRConfig()

  const apiUrl = 'https://dogapi.dog/api/v2/breeds'

  const fetcher = async (apiUrl: string) => {
    try {
      const response = await fetch(apiUrl)
      const jsonResponse = await response.json()
      const data = jsonResponse.data
      mutate(apiUrl, data, false)
      return data
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
        <h1 className="text-lg font-bold">SWR in Next.js</h1>

        <section>
          <h2 className="mb-2 font-bold">Demo</h2>

          <div>
            <button
              className="btn bg-gray-100 px-4 py-2 rounded border border-blue-200 hover:border-blue-300"
              onClick={handleOnClick}
              onMouseOver={handleOnHover}
            >
              {isShowDogBreeds ? 'Hide' : 'See'} dog breeds
            </button>

            {
              isShowDogBreeds && (
                <div className="bg-white mt-2 p-8">
                  <h3 className='mb-2 font-bold'>Dog Breeds</h3>
                  {
                    cache.get(apiUrl)?.data.map((breed: BreedType) => (
                      <div key={breed.id} className="mb-4">
                        <p><label className='font-bold'>Name:</label> <span>{breed.attributes.name}</span></p>
                        <p><label className='font-bold'>Description:</label> <span>{breed.attributes.description}</span></p>
                      </div>
                    ))
                  }
                </div>
              )
            }
          </div>
        </section>
      </div>
    </SWRCacheProvider>
  )
}

export default SWRPage
