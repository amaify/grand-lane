import React, { useState } from "react";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export function DateSelect() {
  const [date, setDate] = useState(new Date());
  const handleChange = date => setDate(date);

  return (
    <DatePicker
      selected={date}
      onChange={handleChange}
      dateFormat="MMMM d, yyyy"
      className="date"
      required
    />
  );
}

export function TimeSelect() {
  const [time, setTime] = useState(new Date());
  const handleChange = date => setTime(date);

  return (
    <DatePicker
      selected={time}
      onChange={handleChange}
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={15}
      timeCaption="Time"
      dateFormat="h:mm aa"
      className="time"
      required
    />
  );
}
