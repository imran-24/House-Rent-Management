import { Link } from '@inertiajs/react'
import React, { useState } from 'react'

const AdminNavbar = ({admin}) => {
  const [showModal, setShowModal] = useState(false)
  return (
    <div className='border md:px-6'>
        <div className='py-3'>
            <div className='flex items-center gap-3'>
                {/* left */}
                <div className='hidden'>
                    Store
                </div>
                {/* middle */}
                <div className='pl-4'>
                    <div className='flex items-center gap-3'>
                        <Link href={ route('admin.dashboard') } className='text-sm'>
                            Overview
                        </Link>
                        <Link href={ route('admin.categories.index') } className='text-sm text-gray-400'>
                            Category
                        </Link>
                        <Link href={ route('admin.listings.index') } className='text-sm text-gray-400'>
                            Listings
                        </Link>
                        <Link href={ route('admin.rental-infos.index') } className='text-sm text-gray-400'>
                            Rental Info
                        </Link>
                        <Link className='text-sm hidden text-gray-400'>
                            Setting
                        </Link>
                    </div>
                </div>
                {/* right */}
                <div className='ml-auto flex items-center gap-3 relative'>
                    <div className='text-sm'>
                       {admin?.name}
                    </div>
                    <div onClick={()=> setShowModal(!showModal)}>
                        <img src="/user-placeholder.png" alt="" className='h-8 w-8 rounded-full hover:opacity-70 transition' />
                    </div>
                    {
                        showModal &&
                        <div className='absolute top-10 right-0 w-[100px] transition ease-out duration-150 shadow rounded-md  bg-white/20'>
                            <Link method="post" href={route('admin.logout')} as="button" className='text-sm hover:bg-neutral-100 bg-white rounded-b-lg cursor-pointer px-4 py-2 w-full'>
                                Log out
                            </Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminNavbar