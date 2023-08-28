import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the stylesheet
import './css/date-picker.css'; //
const CustomYearPicker = ({label, value, onChange}) => {
  const [startDate, setStartDate] = useState(value || new Date());
  
  useEffect(()=>{
    onChange(startDate)
  },[startDate])

  return (
    <div className="react-datepicker-popper w-full">
      <DatePicker
        selected={startDate}
        className='placeholder:text-sm placeholder:font-medium placeholder:text-neutral-400 focus:outline-none focus:ring-0 focus:border-teal-500 '
        onChange={(date) => setStartDate(date)}
        showYearPicker
        placeholderText={label}
        dateFormat="yyyy"
        yearItemNumber={9}
      />
    </div>
  );
};

export default CustomYearPicker;
