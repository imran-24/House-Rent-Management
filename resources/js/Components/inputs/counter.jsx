'use client'

import React, { useCallback } from 'react'
import Heading from '../Heading'
import { HiMinus, HiPlus } from 'react-icons/hi'



const Counter = ({
    title,
    subtitle,
    value,
    onChange
}) => {

  const onAdd = useCallback(()=>{
    onChange(value + 1)
  },[value, onChange])

  const onRemove = useCallback(()=>{
    if(value == 1) return null
    onChange(value - 1)
    
  },[value, onChange])
  return (
    <div className='flex items-center justify-between gap-3'>
        <Heading
        title={title}
        subtitle={subtitle}
        />
        <div className='flex items-center '>
            <div 
            onClick={onRemove}
            className='border-2 border-teal-600 hover:bg-neutral-200 cursor-pointer transition rounded-full p-2'>
                <HiMinus size={18} className='fill-teal-600'/>
            </div>
            <div 
            className='w-[40px] text-center font-semibold text-neutral-500'>
                {value}
            </div>
            <div 
            onClick={onAdd}
            className='border-2 border-teal-600 hover:bg-neutral-200 cursor-pointer transition rounded-full p-2'>
                <HiPlus size={18} className='fill-teal-600'/>
            </div>
        </div>
    </div>
  )
}

export default Counter