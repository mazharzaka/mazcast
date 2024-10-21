import React from 'react'

function Podcast({params}:{podcastid:string}) {
  // console.log(props);
  
  return (
    <div className='p-2 text-2xl '>Podcast {params.podcastid}</div>
  )
}

export default Podcast