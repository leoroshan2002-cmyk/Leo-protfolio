import React, { useState, useEffect } from 'react';

const DigitalClock = () => {
    const [time, setTime] = useState({});

    const timeZones = ['America/New_York', 'Europe/London', 'Asia/Tokyo', 'Australia/Sydney'];

    const updateClock = () => {
        const newTime = {};
        timeZones.forEach(zone => {
            const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: zone };
            newTime[zone] = new Intl.DateTimeFormat('en-US', options).format(new Date());
        });
        setTime(newTime);
    };

    useEffect(() => {
        updateClock();
        const intervalId = setInterval(updateClock, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <h2>Current Time in Multiple Time Zones</h2>
            <ul>
                {timeZones.map(zone => (
                    <li key={zone}>
                        {zone}: {time[zone]}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DigitalClock;