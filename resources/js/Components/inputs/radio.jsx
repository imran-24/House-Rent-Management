import {BiDollar} from 'react-icons/bi'
// import { error } from 'console';

const RadioInput = ({
   id,
   label, 
   type,
   formatPrice,
   required,
   disabled,
   register,
   small,
   value,
   errors
}) => {
    
    
  return (
    <div 
        className="w-full relative ">
            
            <input
                type={'radio'}
                id={id}
                disabled={disabled}
                {...register(id, {required})}
                value={value}
                className={`
                   peer
                   ${small ? 'min-w-[350px]' : 'w-full'}
                   p-3
                   pt-4
                   bg-white
                   border-2
                   ${type == 'checkbox' && 'text-teal-500 p-0'}
                   ${type == 'radio' && 'text-teal-500 p-0'}
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
                `} 
                />
               
    </div>
        
    
  )
}

export default RadioInput