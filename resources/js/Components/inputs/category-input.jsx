import React from 'react'

const CategoryInput = ({
    onClick,
    selected,
    label,

}) => {
  return (
    <div 
    onClick={()=> onClick(label)}
    className={`
    flex 
    items-center 
    justify-center
    px-3 
    py-2
    border-2
    transition
    cursor-pointer
    rounded-full
    gap-2
    hover:text-neutral-800
   \
    ${selected ? 'border-teal-600' : 'border-neutral-300'}
    ${selected ? 'text-teal-600' : 'text-neutral-500'}
    
    `}>
        {/* <Icon size={18} /> */}
        <div className={`text-[10px] 
            ${selected ? 'font-bold' : 'font-medium'}
            `}>
            {label}
        </div>
    </div>
  )
}

export default CategoryInput