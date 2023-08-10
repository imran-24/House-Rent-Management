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



const LoginModal = () => {
  const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);
//   const router = useRouter()
  const registerModal = useRegisterModal()
  
  const {
    register, 
    handleSubmit,
    formState:{
        errors
    }
  } = useForm({
    defaultValues:{
        email: '',
        password: ''
    }
  })

  const onSubmit= (data)=>{
  
    setIsLoading(true)

    // signIn('credentials',{
    //   ...data,
    //   redirect: false
    // })
    axios.post('login', data)
    .then(() => {
      toast.success("Logged in")
      router.reload()
      loginModal.onClose()
    })
    .catch((error) => {
      toast.error("Something went wrong")
    })
    .finally(()=> setIsLoading(false))

  }

  const handleSignUp = useCallback(()=>{
    if(loginModal.isOpen){
      loginModal.onClose()
      registerModal.onOpen()
    }
  },[registerModal, loginModal])

  const body = (
    <div className='flex flex-col gap-3'>
      <Heading 
      title='Welcome back'
      subtitle='Login to your account!'
      />
      <div className='flex flex-col gap-3 py-3'>
        
        <Input 
        type='email'
        id='email'
        register={register}
        disabled={isLoading}
        errors={errors}
        required
        label='Email'
        />
        <Input 
        type='password'
        id='password'
        register={register}
        disabled={isLoading}
        errors={errors}
        required
        label='Password'
        />
      </div>
      
    </div>
  )
  const footer = (
    <div className='w-full flex flex-col gap-3 '>
      <Button
      outline
      label='Continue with Google'
      icon={FcGoogle}
      disabled={isLoading}
      onClick={()=>{}}
      />
      {/* <Button 
      outline
      label='Continue with Github'
      icon={AiFillGithub}
      disabled={isLoading}
      onClick={()=>{}}
      /> */}
      <div className='flex items-center justify-center py-4'>
        <p className='text-sm text-neutral-500'>First time using Airbnb?
          <span 
          onClick={handleSignUp}
          className='font-bold pl-1 hover:underline transition cursor-pointer'>Sign up</span>
        </p>
      </div>
    </div>
  )

  return (
    <Modal
    body={body}
    footer={footer}
    disabled={isLoading}
    title='Login'
    actionLabel='Continue'
    isOpen={loginModal.isOpen}
    onClose={loginModal.onClose}
    onSubmit={handleSubmit(onSubmit)} />
  )
}

export default LoginModal