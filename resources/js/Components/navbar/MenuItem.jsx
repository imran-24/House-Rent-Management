import React from 'react'



const MenuItem = ({
    onclick, title
}) => {
  return (
    <div 
    onClick={onclick}
    className='px-4 py-2 cursor-pointer hover:bg-neutral-100 transition text-sm font-bold hover: z-50'>
        {title}
    </div>
  )
}

export default MenuItem