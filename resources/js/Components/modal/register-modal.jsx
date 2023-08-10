import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import Heading from "../heading";
import Input from "../inputs/input";
import Button from "../button/button";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import Modal from "./modal";
import axios from "axios";
import { toast } from "react-hot-toast";
import { router } from "@inertiajs/react";


const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal()

  const [isLoading, setIsLoading] = useState(false);
  const {
    register, 
    handleSubmit,
    formState:{
        errors
    }
  } = useForm({
    defaultValues:{
        name: '',
        email: '',
        password: '',
        password_confirmation: ""
    }
  })
  
//   useEffect(() => {
//     return () => {
//         reset('password', 'password_confirmation');
//     };
// }, []);





  const handleLogin = useCallback(()=>{
    if(registerModal.isOpen){
      registerModal.onClose()
      loginModal.onOpen()
    }
  },[registerModal, loginModal])

  const onSubmit = (data, e)=>{
  
    setIsLoading(true)
    // e.preventDefault();
    console.log(data)
    // post(route('register'))
    
    axios.post('register', data)
    .then(() => {
      toast.success("Account created")
      router.reload()
      registerModal.onClose()
    })
    
    .catch((error) => {
      toast.error("Something went wrong")
    })
    .finally(()=> setIsLoading(false))

  }

  const body = (
    <div className='flex flex-col gap-3'>
      <Heading 
      title='Welcome to Airbnb'
      subtitle='Create an account!'
      />
      <div className='flex flex-col gap-3 py-3'>
        <Input 
        type='text'
        id='name'
        register={register}
        disabled={isLoading}
        errors={errors}
        required
        label='Name'
        />
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
        <Input 
        type='password'
        id='password_confirmation'
        register={register}
        disabled={isLoading}
        errors={errors}
        required
        label='Confirm Password'
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
        <p className='text-sm text-neutral-500'>Already have an account?
          <span 
          onClick={handleLogin}
          className='font-bold pl-1 hover:underline transition cursor-pointer'>Log in</span>
        </p>
      </div>
    </div>
  )

  return (
    <Modal
    body={body}
    footer={footer}
    disabled={isLoading}
    title='Register'
    actionLabel='Continue'
    isOpen={registerModal.isOpen}
    onClose={registerModal.onClose}
    onSubmit={handleSubmit(onSubmit)} />
  )
}

export default RegisterModal