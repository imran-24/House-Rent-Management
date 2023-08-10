import React from 'react'

const FilterBox = ({label, icon: Icon}) => {
  return (
    <div className='border-2 border-teal-600 bg-teal-100/50 rounded-lg flex items-center gap-3 px-2 py-1 cursor-pointer'>
        <div className='text-[10px] text-neutral-700 font-semibold'>{label}</div>
        <Icon size={20} className="fill-neutral-700"/>
    </div>
  )
}

export default FilterBox