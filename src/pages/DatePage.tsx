import React, { useState, useEffect, useRef } from 'react';
import { Button } from '../components';

export function DatePage() {
  const [date, setDate] = useState(new Date());
  const [inputValue, setInputValue] = useState(new Date());
  const [isTimerActive, setIsTimerActive] = useState(true);
  const intervalRef = useRef<number | undefined>();

  useEffect(() => {
    intervalRef.current = isTimerActive
      ? setInterval(() => {
          setDate(new Date());
        }, 1000)
      : undefined;

    return () => clearInterval(intervalRef.current);
  }, [isTimerActive]);

  function formatDate(date: Date): string {
    return date.toISOString().split('T')[0];
  }

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue((prevInputValue) => new Date(event.target.value || prevInputValue));
  };

  const handlePushButton = () => {
    setIsTimerActive(false);
    const newDate = new Date(inputValue);
    newDate.setHours(0, 0, 0, 0);
    setDate(newDate);
  };

  return (
    <div className="page-container">
      <h1>Date page</h1>
      <p className="date">{date.toLocaleTimeString()}</p>
      <p className="date" role="dateOutput">{date.toLocaleDateString()}</p>
      <p className="page__description">Wanna change it? Set your date below and click "Push it"</p>
      <div className="date-nav">
        <input
          role="dateInput"
          className="date-input"
          value={formatDate(inputValue)}
          onChange={handleDateChange}
          type="date"
        />
        <Button onClick={handlePushButton} text="Push it" />
        <Button onClick={() => setIsTimerActive(true)} text="Reset" />
      </div>
    </div>
  );
}
