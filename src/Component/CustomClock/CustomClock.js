import React, { useEffect, useState } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

function CustomClock() {
    const [value, setValue] = useState(new Date());
  
    useEffect(() => {
      const interval = setInterval(
        () => setValue(new Date()),
        1000
      );
  
      return () => {
        clearInterval(interval);
      }
    }, []);
  
    return (
      <div className="mt-5" style={{marginLeft:'-50px'}}>
        <p className="ml-4 font-weight-bold text-black">Current time:</p>
        <Clock value={value} />
      </div>
    )
  }

export default CustomClock;