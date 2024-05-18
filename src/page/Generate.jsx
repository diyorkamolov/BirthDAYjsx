import React, { useState } from 'react';

const Generate = () => {
    const [name, setName] = useState('');
    const [day, setDay] = useState(1);
    const [month, setMonth] = useState('');
    const [link, setLink] = useState('')
  
const generateLink = () => {
    setLink(`/${name}/${day}/${month}`)
}

    return (
        <div>
            <h1>Generate</h1>
            <div className='form'>
                <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                <input type="number" placeholder='Day' value={day} min={1} max={31} onChange={(e) => setDay(e.target.value)} />
                <select value={month} onChange={(e) => setMonth(e.target.value)}>
                    <option value="">Select Month</option>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                </select>
                <button onClick={() => generateLink()}>Generate Link</button>
            </div>
        </div>
    );
};

export default Generate;
