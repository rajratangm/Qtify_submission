import React from 'react'

function Logo({img}) {
  return (
    <div className='w-20 h-10'>
        <img className='w-full h-full object-contain' src={img} alt="not found" />
    </div>
  )
}

export default Logo