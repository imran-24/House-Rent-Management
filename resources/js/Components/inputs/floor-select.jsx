import React from 'react';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();



const customStyles = {
    control: (provided, state) => ({
      ...provided,
      padding: '6px 5px',
      border: `2px solid ${state.isFocused ? '#0cb29e' : (state.isHovered ? '#0cb29e' : '#ccc')}`,
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
      zIndex: 20, 
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
  
export default function FloorSelect({label, options, value, onChange}) {
  return (
    <Select
      className='w-full'
      value={value}
      onChange={(value)=> onChange(value)}
      closeMenuOnSelect={false}
      components={animatedComponents}
      styles={customStyles}
      isSearchable
      placeholder={label}
      isMulti
      options={options}
    />
  );
}