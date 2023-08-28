import Button from '@/Components/button/button'

import Input from '@/Components/inputs/input'
import SelectMap from '@/Components/map/map'
import SelectType from '@/Components/inputs/select'
import FloorSelect from '@/Components/inputs/floor-select'
import AdminLayout from '@/Layouts/AdminLayout'
import ToastProvider from '@/provider/toast-provider'

import React  from 'react'

import DetailItem from '@/Components/detail-item'
import { MdEdit } from 'react-icons/md'
import EditButton from '@/Components/button/edit-button'
import { Link } from '@inertiajs/react'
import { BsTrash2 } from 'react-icons/bs'
import DeleteButton from '@/Components/button/delete-button'
import { toast } from 'react-hot-toast'
import moment from 'moment';


const Details = ({rental_info}) => {

    const start_date = moment(rental_info.date_of_starting).format('YYYY-MM-DD');
    const onDelete = (id) =>{
        axios.delete(`/admin/rental-infos/${id}`)
        .then((res)=>{
          toast.success(res.data.message)
          window.location.assign('/admin/rental-infos')
        })
        .catch(() => {
          toast.error('Something went wrong')
        })
      }
  return (
    <div 
    className='
    relative 
    min-h-screen 
    
    '>
        <ToastProvider />
        <AdminLayout>
        <div className='px-6  md:px-10 '>
            <div className='flex items-center justify-between'>
                <div className='text-lg py-3'>
                    Detail Rental Information 
                </div>
                <div className='flex items-start gap-3'>
                <Link href={ route('admin.rental-infos.edit', rental_info) }>
                    <EditButton
                    icon={MdEdit}
                    onClick={()=> {}}
                    />
                </Link>
                <DeleteButton
                icon={BsTrash2}
                onClick={() => onDelete(rental_info?.id)}
                /> 
                </div>

                
            </div>
            <div className='flex flex-col w-full m-auto max-h-full'>
                {/* <div className='flex flex-col gap-6'>
                    <DetailItem 
                    small
                    title='Property Rental Form'
                    subtitle='Please fill out all the necessary details for renting this property'
                    />
                </div> */}
                
                
                {/*  */}
                    <div className='flex-1 '>
                        
                        <div className='grid md:grid-cols-2 gap-6 border-t '>

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
                                subtitle={start_date} 
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

                           
                        </div>
                   

                    {/* <div className='flex-1 pt-3'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-6 w-full'>
                            <div className='col-span-full'>
                            <DetailItem 
                            small
                            title='Rental details'
                            subtitle='Please fill out all the necessary details for renting this property!'
                            />
                            </div>

                            <div className="z-50">
                                <SelectType 
                                value={type_of_rent}
                                options={rentType} 
                                label="Select rent type" 
                                onChange={(value)=> setCustomValue('type_of_rent', value)}/>
                            </div>
                            
                            

                            <div className='flex items-center justify-between p-4 '>
                                <div className='text-sm font-medium text-neutral-400'>
                                    Head office approval
                                </div>
                                <div>
                                <Input
                                disabled={isLoading}
                                type='checkbox'
                                errors={errors}
                                id='head_office_approval'
                                register={register} />
                                </div>
                            </div>

                            <div className='flex items-center p-4 gap-10 justify-between  '>
                                <div className='text-sm font-medium text-neutral-400'>
                                    Building Type
                                </div>
                                <div className='flex items-center gap-6'>
                                    <div className="flex items-center gap-6">
                                        <div className="text-sm font-medium text-neutral-400">Own</div>
                                        <RadioInput
                                        disabled={isLoading}
                                        value={'Own'}
                                        type='radio'
                                        errors={errors}
                                        id='building_type'
                                        register={register} />
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div className="text-sm font-medium text-neutral-400">Lease</div>
                                        <RadioInput
                                        disabled={isLoading}
                                        type='radio'
                                        value={'Lease'}
                                        errors={errors}
                                        id='building_type'
                                        register={register} />
                                        </div>
                                    </div>
                            </div>

                            <div className=" ">
                                <CustomDatePicker 
                                label={"Select start date"}
                                value={date_of_starting}
                                onChange={(value)=> setCustomValue('date_of_starting', value)}
                                />
                            </div>

                            <Input
                            label={'Rent per sqft'}
                            required
                            
                            disabled={isLoading}
                            type='number'
                            formatPrice
                            errors={errors}
                            id='rent_per_sqft'
                            register={register} />
                            
                            <Input
                            label={'Floor space'}
                            required
                            
                            disabled={isLoading}
                            type='number'
                            errors={errors}
                            id='floor_space'
                            register={register} />
                            
                            <div className="z-40">
                                <FloorSelect 
                                options={floorPosition}
                                label="Select Floor Position"
                                value={floor_position}
                                onChange={(value)=> setCustomValue('floor_position', value)}/>
                            </div>


                            <div className=" ">
                                <CustomYearPicker 
                                label="Select year of construction"
                                value={year_of_construction}
                                onChange={(value)=> setCustomValue('year_of_construction', value)}/>
                            </div>

                            <Input
                            label={'Tensure'}
                            required
                            
                            disabled={isLoading}
                            type='number'
                            errors={errors}
                            id='tensure_of_lease_aggrement'
                            register={register} />
                            
                        </div>
                    </div> */}

                </div>
                
            </div>
        </div>
        </AdminLayout>
    </div>
  )
}

export default Details