import React, { useEffect, useRef } from 'react';
import './App.css';
import clok from './images/clock bg.jpg';

export default function Clock() {
  const hourRef = useRef(null);
  const minuteRef = useRef(null);
  const secondRef = useRef(null);

  useEffect(() => {
    function setDate() {
      const now = new Date();
      const seconds = now.getSeconds();
      const minutes = now.getMinutes();
      const hours = now.getHours();

      const secondsDegrees = (seconds / 60) * 360;
      const minutesDegrees = (minutes / 60) * 360;
      const hoursDegrees = (hours / 12) * 360; // Should be divided by 12, not 60

      if (secondRef.current) {
        secondRef.current.style.transform = `rotate(${secondsDegrees}deg)`;
      }
      if (minuteRef.current) {
        minuteRef.current.style.transform = `rotate(${minutesDegrees}deg)`;
      }
      if (hourRef.current) {
        hourRef.current.style.transform = `rotate(${hoursDegrees}deg)`;
      }
    }

    const interval = setInterval(setDate, 1000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className='love'>
      <div className='clock'>
        <div className='number'>
          <div className='twelve'>12</div>
          <div className='three'>3</div>
          <div className='six'>6</div>
          <div className='nine'>9</div>
        </div>
        <div className='arrow'>
          <div className='hour' ref={hourRef}></div>
          <div className='minute' ref={minuteRef}></div>
          <div className='seconds' ref={secondRef}></div>
        </div>
        <img src={clok} alt='clock' />
      </div>
    </div>
  );
}
