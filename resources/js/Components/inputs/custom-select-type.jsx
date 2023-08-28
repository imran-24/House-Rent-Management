import React, { useEffect } from 'react';
import Select from 'react-select';



const customStyles = {
  control: (provided, state) => ({
    ...provided,
    padding: '6px 5px',
    '&:hover': {
      border: '2px solid #d1d1d1',
    },
    border: `2px solid ${state.isFocused ? '#0cb29e' : (state.isHovered ? '#0cb29e' : '#ccc')}`,
    boxShadow: state.isFocused ? 'none' : provided.boxShadow,
    
    borderRadius: 5,
    outline: '0', // Remove outline on focus
    ring: '0',
    boxShadow:  null,
    
  }),
  
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? '#0cb29e' : 'white',
    color: state.isFocused ? 'white' : 'black',
    cursor: 'pointer',
    zIndex: 10, 
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#a5a5a5',
    fontSize: 14,
    fontWeight: 500,
    
  }),
  singleValue: (provided) => ({
    ...provided,
    color: 'black',
  }),
};

const CustomSelectType = ({options, label, value, onChange}) => {
  
  return (
    <Select
      getOptionValue={option => option.name}
      getOptionLabel={option => (
        <span>
          {option.name}
        </span>
      )}
      valueKey="name"
      labelKey="name"
      value={value}
      onChange={(value)=> onChange(value)}
      // onChange={}
      options={options}
      isClearable={true}
      styles={customStyles}
      
      placeholder={label}
      
    />
  );
};

export default CustomSelectType;
