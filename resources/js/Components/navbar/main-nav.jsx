import { Link } from '@inertiajs/react'
import React from 'react'



const routes = [
    {
      href: `/admin/dashboard`,
      label: 'Overview',
    //   active: pathname === `/${params.storeId}`
    },
    {
        href: `/admin/dashboard`,
        label: 'Property',
      //   active: pathname === `/${params.storeId}`
    },
    {
        href: `/admin/dashboard`,
        label: 'Category',
      //   active: pathname === `/${params.storeId}`
    },
]

const MainNav = () => {
  const pathname = window.location.pathname;

  return (
    <div className='flex items-center space-x-4 lg:space-x-6 '>
        {
            routes.map(route=>(
                <Link 
                    key={route.href}  
                    href={route.href}
                    className='text-sm font-medium transition hover:text-primary text-muted-foreground'>
                    {route.label}
                </Link>
            ))
        }
    </div>
  )
}

export default MainNav