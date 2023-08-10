import Select from 'react-select'





const PlaceSelect = ({
    value, 
    disabled,
    onChange
}) => {
  
  return (
    <div>
        <Select
            placeholder='Anywhere'
            isClearable
            isDisabled={!disabled}
            options={value}
            value={value}
            onChange={e => onChange(e.target.value)}
            // formatOptionLabel={(option)=>(
            //     <div className='flex flex-row items-center gap-3'>
            //         {/* <div>{option.flag}</div>
            //         <div className='text-sm'>
            //             {option.label}
            //             <span className='text-neutral-500 ml-1'>
            //                 {option.region}
            //             </span>
            //         </div> */}
            //     </div>
            // )}
            classNames={{
                control: () => 'p-2 border-2',
                input: () => 'text-lg',
                option: ()=> 'text-lg'
            }}
            theme={(theme)=> ({
                ...theme,
                borderRadius: 6,
                colors:{
                    ...theme.colors,
                    primary: 'black',
                    primary25: '#ffe4e6'
                }
            })}
        />
    </div>
  )
}

export default PlaceSelect