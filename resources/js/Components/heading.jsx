'use client'
import React from 'react'


const Heading = ({
    title,
    subtitle,
    center,
    small
}) => {
  return (
    <div className={`flex flex-col ${center ? 'items-center justify-center' : 'items-start'}`}>
        <p className={`${small && 'text-sm '} font-extrabold `}>
            {title}
        </p>
        <p className='text-xs text-neutral-500'>
            {subtitle}
        </p>
    </div>
  )
}

export default Heading