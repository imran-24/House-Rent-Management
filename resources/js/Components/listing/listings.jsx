import React, { useEffect } from 'react'

import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import Listing from './listing'
import axios from 'axios'

const Listings = ({listings}) => {

  return (
    <div className='w-full h-full'>
        <div className='flex items-center flex-1 justify-between space-y-3 px-6'> 
            <div className='text-xs font-semibold'>
                Over 1000 stays in Dhaka
            </div>
            <div className='text-xs flex items-center font-semibold space-x-2'>

                Recommanded
                <MdOutlineKeyboardArrowDown size={20} />
            </div>
        </div>
        <div className='h-full '>
            {listings.length > 0 ?
                listings.map((listing) => <Listing key={listing.id} listing={listing} />)
                : <div className='py-3 px-6 '>No Listing Found</div>
            }
        </div>
    </div>
  )
}

export default Listings