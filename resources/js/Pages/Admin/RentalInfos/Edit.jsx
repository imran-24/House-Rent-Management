import Button from '@/Components/button/button'
import Heading from '@/Components/heading'

import Input from '@/Components/inputs/input'
import SelectMap from '@/Components/map/map'
import SelectType from '@/Components/inputs/select'
import FloorSelect from '@/Components/inputs/floor-select'
import AdminLayout from '@/Layouts/AdminLayout'
import ToastProvider from '@/provider/toast-provider'
import { usePage } from '@inertiajs/react'
import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { BsPlus } from 'react-icons/bs'
import CustomDatePicker from '@/Components/inputs/date-picker'
import CustomYearPicker from '@/Components/inputs/year-picker'
import RadioInput from '@/Components/inputs/radio'
import CustomSelectType from '@/Components/inputs/custom-select-type'

const rentType = [
    { value: '1', label: 'Yearly' },
    { value: '5', label: '5 years' },
    { value: '10', label: '10 years' },
  ];

const floorPosition = [
    { value: '1', label: '1st Floor' },
    { value: '2', label: '2nd Floor' },
    { value: '3', label: '3rd Floor' },
    { value: '4', label: '4th Floor' },
    { value: '5', label: '5th Floor' },
    { value: '6', label: '6th Floor' },
    { value: '7', label: '7th Floor' },
    { value: '8', label: '8th Floor' },
    { value: '9', label: '9th Floor' },
    { value: '10', label: '10th Floor' },
];

const Edit = ({ rental_info, divisions, districts, upazilas  }) => {
    
    const {admin}  = usePage().props;
    const [isLoading, setIsLoading] = useState(false);
    // console.log(rentType.find( item => item.value == rental_info?.type_of_rent))
    const {
      register, 
      handleSubmit,
      setValue,
      watch,
      reset,
      formState:{
          errors
      }
    } = useForm({
      defaultValues:{
        'office_name': rental_info?.office_name,
        'previous_name': rental_info?.previous_name,
        'type_of_rent': rentType.find( item => item.value == rental_info?.type_of_rent) ,
        'head_office_approval': rental_info?.head_office_approval,
        'head_office_approval_date': rental_info?.head_office_approval_date,
        'building_type': rental_info?.building_type,
        'year_of_construction': rental_info?.year_of_construction,
        'date_of_starting': rental_info?.date_of_starting,
        'floor_space': rental_info?.floor_space,
        'floor_position': floorPosition.filter((floor) =>
        rental_info?.floor_position.some((item) => item === floor.value)),
        'rent_per_sqft': rental_info?.rent_per_sqft,
        'tensure_of_lease_aggrement': rental_info?.tensure_of_lease_aggrement,
        'expiry_date_of_aggrement': rental_info?.expiry_date_of_aggrement,
        'address': rental_info?.address,
        'division': divisions.find(item => item.name === rental_info?.division),
        'district': districts.find(item => item.name === rental_info?.district),
        'upazila': upazilas.find(item => item.name === rental_info?.upazila),
        'location': {
            'lat': rental_info?.location?.latitude,
            'lng': rental_info?.location?.longitude
        },
        'status': rental_info?.status,
          
      }
    })
  
    const office_name = watch('office_name')
    const previous_name = watch('previous_name')
    const type_of_rent = watch('type_of_rent')
    const head_office_approval = watch('head_office_approval')
    const head_office_approval_date = watch('head_office_approval_date')
    const building_type = watch('building_type')
    const year_of_construction = watch('year_of_construction')
    const date_of_starting = watch('date_of_starting')
    const floor_space = watch('floor_space')
    const floor_position = watch('floor_position')
    const rent_per_sqft = watch('rent_per_sqft')
    const tensure_of_lease_aggrement = watch('tensure_of_lease_aggrement')
    const expiry_date_of_aggrement = watch('expiry_date_of_aggrement')
    const address = watch('address')
    const division = watch('division')
    const district = watch('district')
    const upazila = watch('upazila')

    const location = watch('location')
    console.log(date_of_starting)
    // console.log("image",imageSrc)
    const setCustomValue = (id, value)=>{
      setValue(id, value, {
        shouldDirty: true,
        shouldTouch: true,
        shouldValidate: true
      })
    }

    const onSubmit = (data)=>{
  
        const formatedData = {
            ...data,
            'division': division.name,
            'district': district.name,
            'upazila': upazila.name,
            'type_of_rent': data.type_of_rent.value,
            
        }
        // console.log(formatedData)
       
        setIsLoading(true)
       
        axios.put(`/admin/rental-infos/${rental_info?.id}`, formatedData)
        .then(() => {
          window.location.assign('/admin/rental-infos')
          toast.success("Data has been saved successfully")
    
        })
        .catch((error) => {
          toast.error("Something went wrong")
        })
        .finally(()=> setIsLoading(false))
      }
      
  return (
    <div 
    className='
    relative 
    min-h-screen 
    
    '>
        <ToastProvider />
        <AdminLayout>
        <div className='px-6  md:px-10  py-6'>
            <div className='flex items-center justify-between pb-3'>
                <div className='text-lg '>
                    Add New Rental Info 
                </div>
                <div>
                    <Button
                    label={'Continue'}
                    
                    disabled={isLoading}
                    icon={BsPlus}
                    onClick={handleSubmit(onSubmit)}
                    />
                </div>
            </div>
            <div className='flex flex-col w-full m-auto max-h-full'>
                {/* <div className='flex flex-col gap-6'>
                    <Heading 
                    title='Property Rental Form'
                    subtitle='Please fill out all the necessary details for renting this property'
                    />
                </div> */}
                
                
                {/*  */}
                    <div className='flex-1 '>
                        
                        <div className='grid md:grid-cols-2 lg:grid-cols-3  gap-6 border-b pb-4'>

                            <div className='flex flex-1 flex-col space-y-3'>
                                <Heading 
                                title='Please give your office details'
                                subtitle='Help us find you!'
                                />
                                <Input
                                label={'Office Name'}
                                required
                                
                                disabled={isLoading}
                                type='text'
                                errors={errors}
                                id='office_name'
                                register={register} />
                                <Input
                                label={'Previous Name'}
                                required
                                
                                disabled={isLoading}
                                type='text'
                                errors={errors}
                                id='previous_name'
                                register={register} />
                    
                                <Input
                                label={'Address'}
                                required
                                
                                disabled={isLoading}
                                type='text'
                                errors={errors}
                                id='address'
                                register={register} />
                            </div>

                            <div className='flex flex-1 flex-col space-y-3'>  
                                <Heading 
                                title='Office location'
                                subtitle='Help us find you!'
                                /> 
                                <div className="z-50">
                                <CustomSelectType 
                                value={division} 
                                options={divisions} 
                                label="Select disivion" 
                                onChange={(value)=> setCustomValue('division', value)}/>
                                </div>
                                <div className="z-40">
                                <CustomSelectType 
                                value={district} 
                                options={districts} 
                                label="Select district" 
                                onChange={(value)=> setCustomValue('district', value)}/>
                                </div>
                                <div className="z-30">
                                <CustomSelectType 
                                value={upazila} 
                                options={upazilas} 
                                label="Select upazila"  
                                onChange={(value)=> setCustomValue('upazila', value)}/>
                                </div>
                            </div>
                            <div className='flex flex-1 flex-col gap-6 lg:w-[420px] col-span-full lg:col-auto w-full  h-[280px] lg::h-full '>
                                {/* <Heading 
                                title='Where is your office located?'
                                subtitle='Help us find you!'
                                /> */}
                                <SelectMap 
                                value={location}
                                showSearch
                                onChange={(value)=> setCustomValue('location', value)}/>
                            </div>

                           
                        </div>
                   

                    <div className='flex-1 pt-3'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-6 w-full'>
                            <div className='col-span-full'>
                            <Heading 
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
                                errors={errors}
                                id='date_of_starting'
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
                                errors={errors}
                                id="year_of_construction"
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
                    </div>

                </div>
                
            </div>
        </div>
        </AdminLayout>
    </div>
  )
}

export default Edit