import Button from '@/Components/button/button'
import DeleteButton from '@/Components/button/delete-button'
import EditButton from '@/Components/button/edit-button'
import Input from '@/Components/inputs/input'
import CategoryModal from '@/Components/modal/category-modal'
import AdminLayout from '@/Layouts/AdminLayout'
import useCategoryModal from '@/hooks/useCategoryModal'
import ToastProvider from '@/provider/toast-provider'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { BsTrash2 } from 'react-icons/bs'
import { CiEdit } from 'react-icons/ci'
import { MdEdit } from 'react-icons/md'

const Index = ({categories}) => {
  const categoryModal = useCategoryModal();
  const [isLoading, setIsLoading] = useState(false)
  const [edit, setEdit] = useState(0)
  
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
        name: '',
    }
  })

  const categoryValue = watch('name')

  const setCustomValue = (id, value)=>{
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true
    })
  }

  const onSubmit= (data)=>{
  
    setIsLoading(true)

    
    axios.put(`/admin/categories/${edit}`, data)
    .then(() => {
      window.location.reload()
      toast.success("Category was successfully updated")

      setEdit(0)
    })
    .catch((error) => {
      toast.error("Something went wrong")
    })
    .finally(()=> setIsLoading(false))

  }

  const onDelete = (id)=>{
    setIsLoading(true)
    axios.delete(`/admin/categories/${id}`)
    .then(() => {
      window.location.reload()  
      toast.success("Category has been deleted")    
      setEdit(0)
    })
    .catch((error) => {
      toast.error("Something went wrong")
    })
    .finally(()=> setIsLoading(false))
  }

  return (
    
    <div >
      <CategoryModal />
      <ToastProvider />
      <AdminLayout>
        <div className='p-6'>
          <div className='flex items-center justify-between pb-6'>
            <div className='text-lg '>
              All Categories
            </div>
            <div>
              <Button
              label={'Create Categories'}
              small
              onClick={categoryModal.onOpen}
              />
            </div>
          </div>
          <table className="table-auto w-full">
            <thead>
              <tr className="border-b bg-neutral-100 ">
                <th className="text-start rounded-sm py-2 px-4  text-sm text-neutral-500">Name</th>
                <th className="text-start rounded-sm py-2 px-4  text-sm text-neutral-500">Edit</th>
                <th className="text-start rounded-sm py-2 px-4  text-sm text-neutral-500">Delete</th>

              </tr>
            </thead>
            <tbody>
              {
                categories?.map((category) =>(
                <tr key={category.id} className="border-b hover:bg-neutral-100">
                  <td className="text-sm py-2 px-4 w-full cursor-pointer">
                    {edit == category.id 
                    ? 
                    <Input 
                    type='name'
                    id='name'
                    small
                    register={register}
                    disabled={isLoading}
                    errors={errors}
                    required
                    label='Name' />
                    :  
                    <div>{category.name}</div>
                    }
                    </td>
                  <td className="text-sm py-2 px-4  hover:text-gray-400   cursor-pointer">
                  
                    {
                      edit == category.id
                      ? <Button 
                        disabled={isLoading}
                        label={'update'}
                        onClick={handleSubmit(onSubmit)}
                        small
                        />
                      :
                      <EditButton
                      icon={MdEdit}
                      onClick={()=> {
                        setCustomValue('name', category.name)
                        setEdit(category.id)
                      }}
                      />
                    }

                  </td>
                  <td className="text-sm py-2 px-4  hover:text-gray-400  cursor-pointer">

                    <DeleteButton
                    icon={BsTrash2}
                    onClick={()=>{
                      onDelete(category.id)
                    }}
                    />
                  
                  </td>
                </tr>
                  // <div>{category.name}</div>
                ))
              }
            </tbody>
          </table>
                
        </div>
    </AdminLayout>
    </div>
  )
}

export default Index