import Button from "@/Components/button/button";
import Heading from "@/Components/heading";
import Input from "@/Components/inputs/input";
import { Head, router } from "@inertiajs/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import GuestLayout from '@/Layouts/GuestLayout';
import axios from "axios";
import { toast } from "react-hot-toast";


export default function Login() {

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

  const onSubmit = (data, e)=>{
  
    setIsLoading(true)
    e.preventDefault();

    axios.post('login', data)
    .then(() => {
      router.visit('/')
      toast.success("Logged in")
    })
    .catch(({response}) => {
      toast.error(response?.data?.message)
      // router.reload()
      // console.log(response?.data?.message)
        
    }).finally(()=> setIsLoading(false))

  }
    return (
        <GuestLayout>
            <Head title="Register" />

            <div className='
            relative
            sm:h-auto
            h-full
            w-full
            md:h-auto
            '>
            <div className='
            h-full
            translate
            duration-300'>
                <div className='
                translate 
                h-full 
                border-0 
                w-full
                relative  
                rounded-lg 
                px-4
                flex 
                flex-col 
                '>
                    {/* Header */}
                    <div className='
                    flex items-center justify-between py-4  border-b-[1px]
                    '>
                       <p className='text-lg font-semibold text-center flex-1'>Login</p> 
                    </div>
                    {/* body */}
                    <div className='my-4 h-full'>
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
                    </div>
                    {/* footer */}
                    <div className=' flex flex-col gap-2 items-center my-4 '>
                        <div className='w-full flex items-center gap-2 '>
                        <Button  
                        label={'Continue'}
                        disabled={isLoading}
                        onClick={handleSubmit(onSubmit)}
                        />
                        </div>
                        <div className='w-full flex flex-col gap-3 '>
                            {/* <Button
                            outline
                            label='Continue with Google'
                            icon={FcGoogle}
                            disabled={isLoading}
                            onClick={()=>{}}
                            /> */}
                            {/* <Button
                            outline
                            label='Continue with Github'
                            icon={AiFillGithub}
                            disabled={isLoading}
                            onClick={()=>{}}
                            /> */}
                            <div className='flex items-center justify-center py-4'>
                                <p className='text-sm text-neutral-500'>First time using Arbnb?
                                <span 
                                onClick={()=> router.visit('/register')}
                                className='font-bold pl-1 hover:underline transition cursor-pointer'>Sign up</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
            
            </div>
        </GuestLayout>
    );
}
