import React from 'react'

function Podcastcard({
  id,urlimage,title,description}

) {
  return (
    <div className='flex '>
<div className=' w-28 ml-1  mb-2 bg-black-4 mr-1'>
  <img src={urlimage} alt={title} />
  <div className='text-center text-xs font-light' >{title}</div>
  </div> 
    </div>
  )
}

export default Podcastcard