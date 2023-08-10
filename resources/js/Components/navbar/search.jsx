import React from 'react'
import {CiSearch} from 'react-icons/ci'

const Search = () => {
  return (
    <div className='w-full md:w-auto  transition cursor-pointer rounded-lg border-2'>
        <div className='flex items-center justify-between'>
            <div className='border-r flex items-center'>
                <div className='rounded-full  transition cursor-pointer pl-3'>
                    <CiSearch size={20} className='fill-neutral-800' />
                </div> 
                <p className='px-4 text-sm text-neutral-800 w-[130px]'>Anywhere</p>
            </div>
            <div className='border-r hidden sm:block'>
                <p className='px-4 text-xs text-neutral-400'>Any Week</p>
            </div>
            <div className='flex items-center gap-3  '>
                <div className='hidden sm:flex pl-6 text-xs text-neutral-400'>
                    Add Guest
                </div>
                <div className='rounded-lg px-4 py-2 text-white text-sm hover:bg-teal-600 transition bg-teal-700'>
                    Search
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search