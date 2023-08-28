
import React from 'react'


const EditButton = ({
    onClick,
    disabled,
    icon : Icon
}) => {
  return (
    <button
    onClick={onClick}
    disabled={disabled}
    className={
        `transition disabled:opacity-70  disabled:cursor-not-allowed rounded-lg font-semibold
        flex items-center justify-center gap-3
        ${disabled ? "cursor-not-allowed" : ''}
        bg-green-500
        rounded-lg
        p-2
        `
    }>
    {
        Icon &&
        <div className=''>
            <Icon className="fill-white hover:rotate-45 transition duration-200" size={20} />
        </div>
    }

    </button>
  )
}

export default EditButton