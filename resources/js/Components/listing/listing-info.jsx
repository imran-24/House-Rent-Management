import React from 'react'

const ListingInfo = ({title, subtitle, guests, bedroom, bed, bathroom}) => {
  return (
    <div className='flex flex-col  space-y-1'>
        <div className='text-xs text-neutral-500'>
            {title}
        </div>
        <div className='font-extrabold'>
            {subtitle}
        </div>
        <div className='flex items-center gap-2 text-xs text-neutral-400'>
            <div>
                {guests} guests
            </div>
            <div>
                {bedroom} bedroom
            </div>
            <div>
                {bed} beds
            </div>
            <div>
                {bathroom} bath
            </div>
        </div>
    </div>
  )
}

export default ListingInfo