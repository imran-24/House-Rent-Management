import Button from '@/Components/button/button'
import Heading from '@/Components/heading'
import ImageUpload from '@/Components/image-upload'
import CategoryInput from '@/Components/inputs/category-input'
import Counter from '@/Components/inputs/counter'
import Input from '@/Components/inputs/input'
import SelectMap from '@/Components/map/map'
import AdminLayout from '@/Layouts/AdminLayout'
import ToastProvider from '@/provider/toast-provider'
import { usePage } from '@inertiajs/react'
import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { MdEdit } from 'react-icons/md'


const Edit = ({listing}) => {
    
    const {admin, categories}  = usePage().props;
    console.log(admin);
    const [isLoading, setIsLoading] = useState(false);
    
  
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
          category: listing.category,
          location: listing.location,
          guestCount: listing.guestCount,
          roomCount: listing.roomCount,
          bathroomCount: listing.bathroomCount,
          imageSrc: listing.imageSrc,
          title: listing.title,
          description: listing.description,
          price: listing.price,
          
      }
    })
  
    const category = watch('category')
    const location = watch('location')
    const guestCount = watch('guestCount')
    const roomCount = watch('roomCount')
    const bathroomCount = watch('bathroomCount')
    const imageSrc = watch('imageSrc')
    
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
            'user_id':  admin.id
        }
       
        setIsLoading(true)
       
        axios.put(`/admin/listings/${listing?.id}`, formatedData)
        .then(() => {
        //   window.location.assign('/admin/listings/')
          toast.success("Listing is successfully updated")
    
          
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
        <div className='px-20 py-6'>
            <div className='flex items-center justify-between pb-6'>
                <div className='text-lg '>
                    Edit Listings
                </div>
                <div>
                    <Button
                    label={'Update Listing'}
                    small
                    disabled={isLoading}
                    icon={MdEdit}
                    onClick={handleSubmit(onSubmit)}
                    />
                </div>
            </div>
            <div className='flex-col'>
                <div className='flex flex-col gap-3'>
                    <Heading 
                    title='Whice of these best describe your place?'
                    subtitle='Pick a category'
                    />
                    <div className='flex flex-wrap gap-3 py-3'>
                        {
                        categories.map(item => (
                            <CategoryInput 
                            key={item.name}
                            onClick={(value)=> setCustomValue('category', value)}
                            selected={category == item.name}
                            label={item.name}
                            icon={item.icon}/>
                        ))
                        }
            
                    </div>
        
                </div>
                <div className='lg:flex gap-10'>
                    <div className='flex flex-col gap-3 flex-1 mt-10 '>
                        <Heading 
                        title='Share some basics about your place?'
                        subtitle='What amenities do you have?'
                        />
                        <div className='flex flex-col gap-6 py-3'>
                        <Counter 
                        title='Guests'
                        subtitle="How meny guests do you allow?"
                        value={guestCount}
                        onChange={(value) => setCustomValue('guestCount', value)}
                        />
                        <Counter 
                        title='Rooms'
                        subtitle="How meny rooms do you have?"
                        value={roomCount}
                        onChange={(value) => setCustomValue('roomCount', value)}
                        />
                        <Counter 
                        title='Bathrooms'
                        subtitle="How meny bathrooms do you have?"
                        value={bathroomCount}
                        onChange={(value) => setCustomValue('bathroomCount', value)}
                        />
                        </div>
                    </div>
                    <div className='flex flex-col gap-3 h-[400px] flex-1 mt-10'>
                        <Heading 
                        title='Where is your place located?'
                        subtitle='Help guest find you!'
                        />
                        <SelectMap 
                        value={location}
                        showSearch
                        onChange={(value)=> setCustomValue('location', value)}/>
                    </div>
                </div>
                <div className='lg:flex  flex-1 gap-10 '>
                    <div className='flex flex-col gap-3 flex-1 mt-10'>
                        <Heading 
                        title='Add a photo of your place?'
                        subtitle='Show guest what your place looks like!'
                        />
                        <ImageUpload
                        value={imageSrc}
                        disabled={isLoading}
                        label="Upload profile image"
                        onRemove={(value)=> setCustomValue("imageSrc", value)}
                        onChange={(value)=> setCustomValue('imageSrc', value)}
                        /> 
                    </div>
                    <div className='flex-1'>
                        <div className='flex flex-col gap-3 mt-10'>
                            <Heading 
                            title='How could you describe your place?'
                            subtitle='Short and sweet works best!'
                            />
                            <Input
                            label={'Title'}
                            required
                            disabled={isLoading}
                            type='text'
                            errors={errors}
                            id='title'
                            
                            register={register} />
                            <Input
                            label={'Description'}
                            required
                            disabled={isLoading}
                            type='text'
                            errors={errors}
                            id='description'
                            register={register} />
                
                            <Heading 
                            title='Now, set your price'
                            subtitle='How much do you charge per night!'
                            />
                            <Input
                            label={'Price'}
                            required
                            disabled={isLoading}
                            type='number'
                            formatPrice
                            errors={errors}
                            id='price'
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