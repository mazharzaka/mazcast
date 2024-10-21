import { Button } from '@/components/ui/button'
import Podcastcard from '@/components/ui/Podcastcard'
import React from 'react'
import { podcastData } from '../Sidebarlinks'

function Home() {
  return (
    <div className='font-extrabold'>Trending
    <div className='flex mt-4 flex-wrap justify-center'>
      {
        podcastData.map((e: {
          id: number;
          title: string;
          description: string;
          imgURL: string;
      } | undefined)=>{
          return(
            <Podcastcard key={e?.id}
            urlimage={e?.imgURL} 
            title={e?.title}
            description={e?.description}
            id={e?.id}
            />
          )
        })
      }
    </div>
    </div>
  )
}

export default Home