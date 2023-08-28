'use client'
import React from 'react'


const DetailItem = ({
    title,
    subtitle,
    center,
    icon: Icon,
    small
}) => {
  return (
    <div className={`flex flex-col ${center ? 'items-center justify-center' : 'items-start'}`}>
        <p className={`${small && 'text-sm '} font-extrabold `}>
            {title}
        </p>
        {
          Icon &&
          <Icon className="w-8 h-8 text-gray-500" />
        }
        <p className='text-xs text-neutral-500'>
            {subtitle}
        </p>
    </div>
  )
}

export default DetailItem