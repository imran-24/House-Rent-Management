import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";
import { useCallback, useState } from "react";
import Heading from "../heading";
import Input from "../inputs/input";
import Button from "../button/button";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { useForm } from "react-hook-form";
import Modal from "./modal";
import axios from "axios";
import { toast } from "react-hot-toast";
import { router } from "@inertiajs/react";
import useCategoryModal from "@/hooks/useCategoryModal";



const CategoryModal = () => {
  const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);
//   const router = useRouter()
  const categoryModal = useCategoryModal()
  
  const {
    register, 
    handleSubmit,
    reset,
    formState:{
        errors
    }
  } = useForm({
    defaultValues:{
        name: '',
    }
  })

  const onSubmit= (data)=>{
  
    setIsLoading(true)

    // signIn('credentials',{
    //   ...data,
    //   redirect: false
    // })
    axios.post('/admin/categories', data)
    .then(() => {
      toast.success("Category created successfully")
      router.reload()
      reset()
      categoryModal.onClose()
    })
    .catch((error) => {
      toast.error("Something went wrong")
    })
    .finally(()=> setIsLoading(false))

  }

  // const handleSignUp = useCallback(()=>{
  //   if(loginModal.isOpen){
  //     loginModal.onClose()
  //     registerModal.onOpen()
  //   }
  // },[registerModal, loginModal])

  const body = (
    <div className='flex flex-col gap-3'>
      <Heading 
      title='Create a new category'
      subtitle='Add a new category to the category list'
      />
      <div className='flex flex-col gap-3 py-3'>
        
        <Input 
        type='name'
        id='name'
        register={register}
        disabled={isLoading}
        errors={errors}
        required
        label='Name'
        />
      </div>
      
    </div>
  )

  return (
    <Modal
    body={body}
    disabled={isLoading}
    title='Category Definition'
    actionLabel='Continue'
    isOpen={categoryModal.isOpen}
    onClose={categoryModal.onClose}
    onSubmit={handleSubmit(onSubmit)} />
  )
}

export default CategoryModal