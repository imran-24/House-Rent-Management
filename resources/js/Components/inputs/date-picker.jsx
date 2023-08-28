import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the stylesheet
import './css/date-picker.css'; //
const CustomDatePicker = ({label, value, onChange, id, errors}) => {
  // console.log(errors[id])
  // const [selectedDate, setSelectedDate] = useState(null);
  // console.log(value);
  // const handleDateChange = (date) => {
  //   console.log(typeof(date))
  //   setSelectedDate(date);
  //   onChange(date)
  // };
  const [startDate, setStartDate] = useState(new Date());

  const handleChange = (date) => {
    setStartDate(date)
    onChange(date)
  }

  return (
    <div className="react-datepicker-popper w-full ">
      
      {/* <DatePicker
        id={id}
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
        placeholderText={label}
        // showTimeSelect={false}
        className={`
        placeholder:text-sm 
        placeholder:font-medium 
        placeholder:text-neutral-400 
        focus:outline-none 
        focus:ring-0 
        focus:border-teal-500
        ${errors[id] ? 'border-rose-500' : 'border-neutral-300'}
        ${errors[id] ? 'focus:border-rose-500' : 'focus:border-teal-600'}`}
        // showMonthDropdown
        // showYearDropdown
        dropdownMode="select"
        // className="custom-date-picker" // Add a custom class
      /> */}

    <DatePicker selected={startDate} onChange={handleChange} />

    </div>
  );
};

export default CustomDatePicker;
