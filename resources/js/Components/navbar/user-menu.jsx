import React, { useCallback, useState } from 'react'
import Avater from '../avater'
import { AiOutlineMenu } from 'react-icons/ai'
import MenuItem from './MenuItem';
import useRentModal from '@/hooks/useRentModal';
import useLoginModal from '@/hooks/useLoginModal';
import useRegisterModal from '@/hooks/useRegisterModal';
import { Link, usePage } from '@inertiajs/react';


const UserMenu = ({currentUser}) => {
    const [isOpen, setIsOpen] = useState(false);
    const rentModal = useRentModal()
    const loginModal = useLoginModal()
    const registerModal = useRegisterModal()

    const toggleAction = useCallback(()=>{
      setIsOpen((value) => !value)
    },[])
  return (
    <div className='relative'>
        <div className='flex items-center gap-3'>
            
            {currentUser &&
            <div 
                onClick={()=> rentModal.onOpen()}
                className='
                    font-bold 
                    text-sm 
                    hidden 
                    md:flex 
                    hover:bg-neutral-100 
                    cursor-pointer 
                    transition 
                    rounded-full 
                    px-4 py-3'>
                Add New Property
            </div>}
            <div
                onClick={toggleAction}
                className='
                flex items-center gap-3
                border 
                rounded-full 
                p-4
                md:px-2
                md:py-1
                shadow-sm
                cursor-pointer 
                hover:shadow-md 
                transition 
                '>
                <AiOutlineMenu />
                <div className='hidden md:flex'>
                    <Avater />
                </div>
            </div>
        </div>
        {isOpen && 
        <div className='absolute top-12 right-0 shadow-lg w-[200px] transition duration-150 ease-out rounded-xl  bg-white'>
            {!currentUser ? 
                <>
                <MenuItem onclick={()=> loginModal.onOpen()}  title='Log in'/>
                <MenuItem onclick={()=> registerModal.onOpen()} title='Sign up'/>
                </>
                : 
                <>
                
                <MenuItem onclick={()=> {}} title='My favourites'/>
                <MenuItem onclick={()=> {}}  title='My properties'/>
                
                <MenuItem onclick={rentModal.onOpen}  title='Add new property'/>
                <hr />
                <Link href="/logout" as="button" method="post">
                    <MenuItem onclick={()=>{}} title='Sign out'/>
                </Link>
                </>

            }
        </div>}
    </div>
  )
}

export default UserMenu