import React from 'react';
import Select from 'react-select';



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

const SelectType = ({options, label, value, onChange}) => {
  return (
    <Select
      value={value}
      onChange={(value)=> onChange(value)}
      options={options}
      isClearable={true}
      styles={customStyles}
      placeholder={label}
      isSearchable
    />
  );
};

export default SelectType;
