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
import moment from 'moment'


const Index = ({rental_infos}) => {
    const rentModal = useRentModal()
    const isEmpty = rental_infos?.length == 0
    

    const onDelete = (id) =>{
      axios.delete(`/admin/rental-infos/${id}`)
      .then((res)=>{
        toast.success(res.data.message)
        rental_infos.splice(rental_infos.findIndex(item => item.id === id), 1)
        console.log(rental_infos)
      })
      .catch(() => {
        toast.error('Something went wrong')
      })
    }
    console.log(rental_infos)
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
            All Rental Infomations
          </div>
          <div>
            <a href={ route('admin.rental-infos.create') }>
              <Button
              label={'Create Rentals'}
              small
              onClick={() => {}}
              />
            </a>
            
          </div>
        </div>
        <table className="table-auto w-full">
            <thead>
              <tr className="border-b  bg-neutral-100">
                <th className="text-start rounded-sm py-2  text-xs pl-2  text-neutral-500">Office Name</th>
                {/* <th className="text-start rounded-sm py-2  text-xs    text-neutral-500">Previous Name</th> */}
                <th className="text-start rounded-sm py-2  text-xs    text-neutral-500">Rent Type</th>
                <th className="text-start rounded-sm py-2  text-xs    text-neutral-500">Head Office Approval</th>
                {/* <th className="text-start rounded-sm py-2  text-xs    text-neutral-500">Approval Date</th> */}
                <th className="text-start rounded-sm py-2  text-xs    text-neutral-500">Building Type</th>
                {/* <th className="text-start rounded-sm py-2  text-xs    text-neutral-500">Year of Constraction</th> */}
                <th className="text-start rounded-sm py-2  text-xs    text-neutral-500">Starting Date</th>
                <th className="text-start rounded-sm py-2  text-xs    text-neutral-500">Floor Space/sqft</th>
                {/* <th className="text-start rounded-sm py-2  text-xs    text-neutral-500">Floor Position</th> */}
                <th className="text-start rounded-sm py-2  text-xs    text-neutral-500">Rent/sqft</th>
                {/* <th className="text-start rounded-sm py-2  text-xs    text-neutral-500">Tenure</th> */}
                <th className="text-start rounded-sm py-2  text-xs    text-neutral-500">Expiry Date</th>
                <th className="text-start rounded-sm py-2  text-xs    text-neutral-500">Address</th>
                {/* <th className="text-start rounded-sm py-2  text-xs    text-neutral-500">Location</th> */}
                <th className="text-start rounded-sm py-2  text-xs    text-neutral-500">Status</th>
                <th className="text-start rounded-sm py-2 px-4 text-xs    text-neutral-500">Details</th>
                <th className="text-start rounded-sm py-2 px-4 text-xs    text-neutral-500">Edit</th>
                <th className="text-start rounded-sm py-2 px-2 text-xs    text-neutral-500">Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                isEmpty
                ? <tr className="border-b  hover:bg-neutral-100">
                  <td className="text-sm py-2 px-4 row-span-full cursor-pointer">No rental_infos found</td>
                </tr>
                :
                rental_infos.map((item) =>(
                  <tr key={item.id}
                  className="border-b hover:bg-neutral-100">
                  
                  <td className="text-sm py-2 px-4 cursor-pointer">{ item?.office_name }</td>
                  {/* <td className="text-sm py-2 px-4 cursor-pointer max-w-[200px]">{ item?.previous_name }</td> */}
                  <td className="text-sm py-2 px-4 cursor-pointer">{ item?.type_of_rent } Years</td>
                  <td className="text-sm py-2 px-4 cursor-pointer">{ item?.head_office_approval }</td>
                  {/* <td className="text-sm py-2 px-4 cursor-pointer">{ item?.head_office_approval_date }</td> */}
                  <td className="text-sm py-2 px-4 cursor-pointer">{ item?.building_type }</td>
                  {/* <td className="text-sm py-2 px-4 cursor-pointer">{ item?.year_of_construction }</td> */}
                  <td className="text-sm py-2 px-4 cursor-pointer">{moment( item?.date_of_starting).format('YYYY-MM-DD') }</td>
                  <td className="text-sm py-2 px-4 cursor-pointer">{ item?.floor_space }</td>
                  {/* <td className="text-sm py-2 px-4 cursor-pointer">{ item?.floor_position }</td>l */}
                  <td className="text-sm py-2 px-4 cursor-pointer">{ item?.rent_per_sqft }</td>
                  {/* <td className="text-sm py-2 px-4 cursor-pointer">{ item?.tensure_of_lease_aggrement }</td> */}
                  <td className="text-sm py-2 px-4 cursor-pointer">{ item?.expiry_date_of_aggrement }</td>
                  <td className="text-sm py-2 px-4 cursor-pointer">{ item?.address }</td>                  
                  {/* <td className="text-sm py-2 px-4 cursor-pointer">
                    <div className="text-xs">Latitute: <span className="text-gray-500">{ item?.latitude }</span></div>
                    <div className="text-xs">Longitute: <span className="text-gray-500">{ item?.longitude }</span> </div>
                  </td> */}
                  <td className="text-sm py-2 px-4 cursor-pointer">{ item?.status }</td>
                  <td className="text-sm py-2 px-4 cursor-pointer">
                    <Link href={ route('admin.rental-infos.show', item) }>
                      <Button 
                      label={'Details'}
                      outline
                      small
                      />
                    </Link>
                  </td>
                  <td className="text-sm py-2 px-4  hover:text-gray-400   cursor-pointer">
                  
                  <Link href={ route('admin.rental-infos.edit', item) }>
                    <EditButton
                    icon={MdEdit}
                    onClick={()=> {}}
                  />
                  </Link>
                    

                  </td>
                  <td className="text-sm py-2 px-4  hover:text-gray-400  cursor-pointer">

                    <DeleteButton
                    icon={BsTrash2}
                    onClick={() => onDelete(item?.id)}
                    />                    
                  
                  </td>
                </tr>
                
                ))
                
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