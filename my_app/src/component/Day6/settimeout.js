
import React, { useEffect, useState } from 'react';
 
export function SetTime() {
  const [message, setMessage] = useState('message');
 
  useEffect(() => {
    console.log("msg displayed");
    const delayedFunction = () => {
      setMessage('Message has been delayed');
    };
    const timeoutId = setTimeout(delayedFunction, 7000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <div>
      <p>{message}</p>
    </div>
  );
}
 
 