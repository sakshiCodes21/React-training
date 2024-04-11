
import React, { useState, useEffect } from 'react';
 
export function SetInterval() {
  const [currentTime, setCurrentTime] = useState(new Date());
 
 
  useEffect(() => {
   
    const updateTime = () => {
      setCurrentTime(new Date());
    };
    updateTime();
    const intervalId = setInterval(updateTime, 3000);
 
   
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div>
      <h1>Current Time:</h1>
      <p>{currentTime.toLocaleDateString()}</p>
    </div>
  );
}
 