import React from 'react'

const ListingInfo = ({title, subtitle, guests, bed, bathroom}) => {
  return (
    <div className=' flex flex-col  space-y-1'>
        <div className='text-xs text-neutral-500 truncate'>
            {title}
        </div>
        <div className='font-extrabold '>
            {subtitle.length > 80 ? subtitle.slice(0, 70) + '...' : subtitle }
        </div>
        <div className='flex items-center gap-2 text-xs text-neutral-400'>
            <div>
                {guests} guests
            </div>
            <div>
                {bed} bedroom
            </div>
            <div>
                {bathroom} bathroom
            </div>
        </div>
    </div>
  )
}

export default ListingInfo