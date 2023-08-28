import Button from '@/Components/button/button'
import { BsTrash2 } from 'react-icons/bs'
import { MdEdit } from 'react-icons/md'
import RentModal from '@/Components/modal/rent-modal'
import Filters from '@/Components/navbar/filters'
import AdminLayout from '@/Layouts/AdminLayout'
import useRentModal from '@/hooks/useRentModal'
import ToastProvider from '@/provider/toast-provider'
import React, { useState } from 'react'
import DeleteButton from '@/Components/button/delete-button'
import EditButton from '@/Components/button/edit-button'
import { Link } from '@inertiajs/react'
import axios from 'axios'
import { toast } from 'react-hot-toast'


const Index = ({listings}) => {
    const rentModal = useRentModal()
    const isEmpty = listings?.length == 0

    const onDelete = (id) =>{
      axios.delete(`/admin/listings/${id}`)
      .then((res)=>{
        toast.success(res.data.message)
        listings.splice(listings.findIndex(listing => listing.id === id), 1)
        console.log(listings)
      })
      .catch(() => {
        toast.error('Something went wrong')
      })
    }
    console.log(listings)
    return(
    <div 
    className='
    relative 
    max-h-screen 
    overflow-y-auto
    overflow-x-auto'>
      <RentModal />
      <ToastProvider />
    <AdminLayout>
      <div className='p-6'>
        <div className='flex items-center justify-between pb-6'>
          <div className='text-lg '>
            All Listings
          </div>
          <div>
            <Button
            label={'Create Listings'}
            small
            onClick={rentModal.onOpen}
            />
          </div>
        </div>
        <table className="table-auto w-full">
            <thead>
              <tr className="border-b bg-neutral-100 ">
                <th className="text-start rounded-sm py-2 px-4  text-sm text-neutral-500">Title</th>
                {/* <th className="text-start rounded-sm py-2 px-4  text-sm text-neutral-500">Description</th> */}
                <th className="text-start rounded-sm py-2 px-4  text-sm text-neutral-500">Category</th>
                <th className="text-start rounded-sm py-2 px-4  text-sm text-neutral-500">Guests</th>
                <th className="text-start rounded-sm py-2 px-4  text-sm text-neutral-500">Bedroom</th>
                <th className="text-start rounded-sm py-2 px-4  text-sm text-neutral-500">Bathroom</th>
                <th className="text-start rounded-sm py-2 px-4  text-sm text-neutral-500">Location</th>
                <th className="text-start rounded-sm py-2 px-4  text-sm text-neutral-500">Price</th>
                <th className="text-start rounded-sm py-2 px-4  text-sm text-neutral-500">User id</th>
                <th className="text-start rounded-sm py-2 px-4  text-sm text-neutral-500">Details</th>

                <th className="text-start rounded-sm py-2 px-4  text-sm text-neutral-500">Edit</th>
                <th className="text-start rounded-sm py-2 px-4  text-sm text-neutral-500">Delete</th>

              </tr>
            </thead>
            <tbody>
              {
                listings.length > 0 
                ?
                listings?.map((listing) =>(
                <tr key={listing.id}
                  className="border-b hover:bg-neutral-100">
                  <td className="text-sm py-2 px-4 cursor-pointer">{ listing?.title }</td>
                  {/* <td className="text-sm py-2 px-4 cursor-pointer max-w-[200px]">{ listing?.description }</td> */}
                  <td className="text-sm py-2 px-4 cursor-pointer">{ listing?.category }</td>
                  <td className="text-sm py-2 px-4 cursor-pointer">{ listing?.guestCount }</td>
                  <td className="text-sm py-2 px-4 cursor-pointer">{ listing?.roomCount }</td>
                  <td className="text-sm py-2 px-4 cursor-pointer">{ listing?.bathroomCount }</td>
                  <td className="text-sm py-2 px-4 cursor-pointer">
                    <div className="text-xs">Latitute: <span className="text-gray-500">{ listing?.location.lat }</span></div>
                    <div className="text-xs">Longitute: <span className="text-gray-500">{ listing?.location.lng }</span> </div>
                  </td>
                  <td className="text-sm py-2 px-4 cursor-pointer">{ listing?.price }</td>
                  <td className="text-sm py-2 px-4 cursor-pointer">{ listing?.user_id }</td>
                  <td className="text-sm py-2 px-4 cursor-pointer">
                    <Link href={ route('admin.listings.show', listing) }>
                      <Button 
                      label={'Details'}
                      outline
                      small
                      />
                    </Link>
                  </td>

                  <td className="text-sm py-2 px-4  hover:text-gray-400   cursor-pointer">
                  
                  <Link href={ route('admin.listings.edit', listing) }>
                    <EditButton
                    icon={MdEdit}
                    onClick={()=> {}}
                  />
                  </Link>
                    

                  </td>
                  <td className="text-sm py-2 px-4  hover:text-gray-400  cursor-pointer">

                    <DeleteButton
                    icon={BsTrash2}
                    onClick={() => onDelete(listing?.id)}
                    />                    
                  
                  </td>
                </tr>))
                : <tr className="border-b  hover:bg-neutral-100">
                  <td className="text-sm py-2 px-4 row-span-full cursor-pointer">No listings found</td>
                </tr>
                  // <div>{category.name}</div>
                
              }
            </tbody>
          </table>
        </div>
  </AdminLayout>
  </div>
)
}

export default Index