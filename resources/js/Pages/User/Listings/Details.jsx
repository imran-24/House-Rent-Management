
import ToastProvider from '@/provider/toast-provider'

import React from 'react'

import DetailItem from '@/Components/detail-item'
import MainLayout from '@/Layouts/MainLayout'
import { listings } from '@/utils/constant'
import ListingImages from '@/Components/listing/listing-images'
import { IoBedOutline } from 'react-icons/io5'
import {LiaBathSolid} from 'react-icons/lia'
import { MdGroups } from 'react-icons/md'
import SelectMap from '@/Components/map/map'


const Details = ({listing, posted_by}) => {
  console.log(listing)
  return (
    <div 
    className='
    relative 
    min-h-screen 
    
    '>
        <ToastProvider />
        <MainLayout>
        <div className='px-6  md:px-10 pt-16'>
            <div className='flex items-center justify-between border-b'>
                <div className='text-lg py-3'>
                    Detail Listing Information 
                </div>
                
            </div>
            <div className='flex-col flex lg:flex-row gap-4 w-full m-auto max-h-full'>
                <div className='flex flex-1  flex-col gap-4 pt-2'>
                    
                    <div className='flex items-center justify-between gap-4'>
                        <div className='text-2xl'>
                            {listing.title}
                        </div>
                        <div className='text-sm text-neutral-500'>
                            {posted_by.name}
                        </div>
                    </div>

                    <div className='border-y'>
                        <div className='flex flex-row items-center justify-around'>
                            <div className='flex flex-col py-2  items-center'>
                                <div>
                                <IoBedOutline size={20} className='text-neutral-400' />
                                </div>
                                <div className='text-neutral-400 text-xs'>
                                    {listing.roomCount} Bedrooms
                                </div>
                            </div>
                            <div className='flex flex-col py-2 items-center'>
                                <div>
                                <LiaBathSolid size={20} className='text-neutral-400' />
                                </div>
                                <div className='text-neutral-400 text-xs'>
                                    {listing.bathroomCount} Bathrooms
                                </div>
                            </div>
                            <div className='flex flex-col py-2 items-center'>
                                <div>
                                <MdGroups size={20} className='text-neutral-400' />
                                </div>
                                <div className='text-neutral-400 text-xs'>
                                    {listing.guestCount} Guests
                                </div>
                            </div>
                        </div>
                    </div>

                    <DetailItem
                    title={'About listing'}
                    subtitle={listing.description}
                    small
                    />

                    <DetailItem
                    title={'Price'}
                    subtitle={listing.price}
                    small
                    />

                    <div className='h-[300px'>
                    <SelectMap
                    value={listing.location}
                    />
                    </div>



                </div>
                
                
                {/*  */}
                    <div className='flex-1 flex items-center justify-center lg:justify-end pt-4 '>
                    
                    <ListingImages 
                    images={listing.imageSrc} 
                    large />
                   
                        {/* <div className='grid md:grid-cols-2 gap-6 border-t '>

                            <div className='flex flex-1 flex-col space-y-3 mt-3'>
                                <DetailItem 
                                small
                                title='Office Name'
                                subtitle={rental_info.office_name}
                                />
                                
                                
                                {
                                    rental_info?.previous_name &&
                                    <DetailItem 
                                    small
                                    title='Previous Name'
                                    subtitle={rental_info.previous_name}
                                />
                                }
                                <DetailItem 
                                small
                                title='Address'
                                subtitle={rental_info.address}
                                />
                                <DetailItem 
                                small
                                title='Division'
                                subtitle={rental_info.division}
                                />
                                <DetailItem 
                                small
                                title='Destrict'
                                subtitle={rental_info.district}
                                />
                                <DetailItem 
                                small
                                title='Upazila'
                                subtitle={rental_info.upazila}
                                />

                                <DetailItem 
                                small
                                title='Rent Type'
                                subtitle={`${rental_info.type_of_rent} years`} 
                                />

                                <DetailItem 
                                small
                                title='Head Office Approval Status'
                                subtitle={rental_info.head_office_approval === 0 ? 'Not Approved' : 'Approved'} 
                                />

                                <DetailItem 
                                small
                                title='Start date of the aggrement'
                                subtitle={rental_info.date_of_starting} 
                                />
                                
                                <DetailItem 
                                small
                                title='Rent per Square'
                                subtitle={`${rental_info.rent_per_sqft} Taka`} 
                                />

                                <DetailItem 
                                small
                                title='Floor Space'
                                subtitle={`${rental_info.floor_space} sqft`}  
                                />

                                <DetailItem 
                                small
                                title='Year of construction'
                                subtitle={`${rental_info.year_of_construction}`}  
                                />

                                <DetailItem 
                                small
                                title='Tensure of the lease aggrement'
                                subtitle={`${rental_info.tensure_of_lease_aggrement} years`}  
                                />

                                <DetailItem 
                                small
                                title='Expiry date of the aggrement'
                                subtitle={`${rental_info.expiry_date_of_aggrement}`}  
                                />
                                
                                
                                
                    
                                
                            </div>
                            <div className='flex flex-1 flex-col gap-6 col-span-full md:col-auto w-full h-[420px] lg::h-full  mt-3'>
                                <DetailItem 
                                small
                                title='Office location '
                                subtitle='See the location in map!'
                                />
                                <SelectMap 
                                value={location}
                                // showSearch
                                // onChange={(value)=> setCustomValue('location', value)}
                                />
                            </div>

                           
                        </div> */}
                   

                    
                </div>
                
            </div>
        </div>
        </MainLayout>
    </div>
  )
}

export default Details