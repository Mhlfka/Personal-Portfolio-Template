import React from 'react'
import { useEffect, useState } from 'react'

function WorldClock() {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);


    const getTime = (zone) => {
        return time.toLocaleString("en-US", {
            timeZone: zone,
            hour:"2-digit",
            minute:"2-digit",
            second:"2-digit",
        });
    };
    return (
    <div className='flex justify-between flex-col sm:flex-col md:flex-row lg:flex-row font-brunoAce text-black text-md sm:text-lg md:text-xl lg:text-2xl px-[5.7%] py-[5%] text-center'>
        <p>Tashkent:<br/>{getTime("Asia/Tashkent")}</p>
        <p>Tokyo:<br/>{getTime("Asia/Tokyo")}</p>
        <p>London:<br/>{getTime("Europe/London")}</p>
        <p>Paris:<br/>{getTime("Europe/Paris")}</p>
    </div>
  )
}

export default WorldClock