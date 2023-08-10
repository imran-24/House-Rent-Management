import { listings } from '@/utils/constant'
import React, { useEffect } from 'react'

import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import Listing from './listing'
import axios from 'axios'
const Listings = () => {
//   useEffect(()=>{
//     const listings = axios.get('listings');
//     console.log(listings)
//   })
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
            {
                listings.map((listing, index) => <Listing key={index} listing={listing} />)
            }
        </div>
    </div>
  )
}

export default Listings