import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import CountDown from '../components/CountDown';

const Birthday = ({ name, day, month }) => {
    const [state, setState] = useState({
        seconds: 0,
        minutes: 0,
        hours: 0,
        days: 0,
        isITBday: false,
    });

    if (name === undefined || day === undefined || month === undefined) {
        name = 'User';
        day = 5;
        month = 9;
    }

    const currentTime = new Date();
    const currentYear = currentTime.getFullYear();

    const isItBday = currentTime.getDate() === day && currentTime.getMonth() === month - 1;

    useEffect(() => {
        const countdown = () => {
            const dateAtm = new Date();

            let birthdayDay = new Date(currentYear, month - 1, day);
            if (dateAtm > birthdayDay) {
                birthdayDay = new Date(currentYear + 1, month - 1, day);
            } else if (dateAtm.getFullYear() === birthdayDay.getFullYear() + 1) {
                birthdayDay = new Date(currentYear, month - 1, day);
            }

            const currentTime = dateAtm.getTime();
            const birthdayTime = birthdayDay.getTime();

            const timeRemaining = birthdayDay - currentTime;

            let seconds = Math.floor(timeRemaining / 1000);
            let minutes = Math.floor(seconds / 60);
            let hours = Math.floor(minutes / 60);
            let days = Math.floor(hours / 24);

            seconds %= 60;
            minutes %= 60;
            hours %= 24;

            setState((prevState) => ({
                ...prevState,
                seconds,
                minutes,
                hours,
                days,
                isItBday,
            }));
        };

        const intervalId = setInterval(() => {
            if (!isItBday) {
                countdown();
            } else {
                setState((prevState) => ({
                    ...prevState,
                    isItBday: true,
                }));
            }
        }, 1000);

        return () => clearInterval(intervalId);
    }, [currentYear, day, month, isItBday]);

    const birth = new Date(currentYear, month - 1, day);

    const monthName = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    let monthBday = monthName[birth.getMonth()];

    return (
        <div>
            <CountDown countdownData={state} name={name} />
            {!isItBday && (
                <>
                    <div>
                        Birth Date: {day} {monthBday} {currentYear}
                    </div>
                    <Link to={'/generate'}>Generate Here</Link>
                </>
            )}
        </div>
    );
};

export default Birthday;
