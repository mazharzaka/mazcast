"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import Podcastcard from '@/components/ui/Podcastcard'
import React from 'react'
import { podcastData } from '../Sidebarlinks'

function Home() {
  const tasks = useQuery(api.tasks.get);
  return (
    <div className='font-extrabold ml-6'>Trending
          {tasks?.map(({ _id, text }) => <div key={_id}>{text}</div>)}

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