import React from 'react'

function Podcastcard({
  id,urlimage,title,description}

) {
  return (
    <div className='flex ' id={`Podcastcard${id}`}>
<div className='w-36 md:w-44 ml-1  mb-2 bg-black-4 mr-1'>
  <img src={urlimage} alt={title} />
  <div className='text-center text-sm font-medium' >{title}</div>
  <div className='text-center text-[.5rem] font-light' >{description}</div>
  </div> 
    </div>
  )
}

export default Podcastcard