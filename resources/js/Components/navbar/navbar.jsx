import React from 'react'
import Container from '../container'
import Logo from './logo'
import Search from './search'
import UserMenu from './user-menu'
import Filters from './filters'
import { usePage } from '@inertiajs/react'

const Navbar = () => {
  const  currentUser = usePage().props.auth.user;
  console.log(currentUser)
  return (
    <div className='w-full fixed bg-white shadow-sm z-50 '>
    <div className='py-3 border-b-[1px]'>
        <Container>
            <div className='flex-1  flex items-center justify-between gap-3'>
                <div className='flex flex-1 md:flex-auto items-center gap-10'>
                <Logo />
                <Search />
                </div>
                <UserMenu currentUser={currentUser}/>
            </div>
        </Container>
    </div>
    
</div>
  )
}

export default Navbar