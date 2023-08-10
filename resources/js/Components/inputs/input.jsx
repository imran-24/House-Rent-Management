import {BiDollar} from 'react-icons/bi'
// import { error } from 'console';

const Input = ({
   id,
   label, 
   type,
   formatPrice,
   required,
   disabled,
   register,
   errors
}) => {
  
  return (
    <div 
        className="w-full relative ">
            {
                formatPrice && 
                (<BiDollar size={20} className='
                    text-neutral-500 absolute top-4 left-2' />)
            }
            <input
                type={type}
                id={id}
                disabled={disabled}
                {...register(id, {required})}
                placeholder=' '
                className={`
                   peer
                   w-full
                   p-3
                   pt-4
                   bg-white
                   border-2
                   rounded-md
                   outline-none
                   focus:border-opacity-80
                   transition
                   disabled:opacity-70
                   disabled:cursor-not-allowed
                   ring-0
                   focus:ring-0
                   ${formatPrice ? 'pl-9' : 'pl-4'}
                   ${errors[id] ? 'border-rose-500' : 'border-neutral-300'}
                   ${errors[id] ? 'focus:border-rose-500' : 'focus:border-teal-600'}
                `} />
                <label
                    className={`
                    text-sm
                    font-medium
                    absolute
                    top-4
                    ${formatPrice ? 'left-7' : 'left-4'}
                    text-neutral-400
                    z-10
                    transition
                    transform
                    -translate-y-[12px]
                    peer-placeholder-shown:scale-100
                    peer-placeholder-shown:translate-y-0
                    peer-focus:-translate-y-3
                    ${errors[id] ? 'peer-placeholder-shown:text-rose-500' : 'peer-placeholder-shown:text-neutral-400'}
                    ${errors[id] ? 'peer-focus:text-rose-500' : 'peer-focus:text-neutral-400'}
                    peer-focus:font-bold
                    peer-focus:scale-75
                `}>
                    {label}
                </label>
    </div>
        
    
  )
}

export default Input