import React from 'react'

import {FaStar} from 'react-icons/fa'
const ListingFooter = ({ price}) => {
  return (
    <div className='mt-auto'>
        <div className='flex  items-center  justify-between'>
            <div className='flex items-center gap-1 text-[11px] font-semibold'>
                4.5
                <FaStar size={16} className='fill-orange-400' />
               (98)
            </div>
            <div className='flex items-center text-xs font-semibold'>
                {price}/month
            </div>
        </div>
    </div>
  )
}

export default ListingFooter