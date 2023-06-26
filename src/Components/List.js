import React, { useState } from 'react';

function List() {
    const [currentname, setCurrentName] = useState("");
    const [currentemail, setCurrentEmail] = useState("");
    const [currentData, setCurrentData] = useState([]);
    const setName = (event) => setCurrentName(event.target.value);
    const setEmail = (event) => setCurrentEmail(event.target.value);
    const createList = () => {
        let personDetails = [...currentData, { currentname, currentemail }];// always create a copy of original array
        setCurrentData(personDetails);
        setCurrentName("");
        setCurrentEmail("");
    }

    return <>
        <input type='text' value={currentname} placeholder='Enter Name' onChange={setName} />
        <input type='text' value={currentemail} placeholder='Enter Email' onChange={setEmail} />
        <button onClick={createList}>Submit</button>
        <ul>
            {currentData.map(function(item, index) {
                return <li className='group-of-list' key={index}>{item.currentname} {item.currentemail}</li>;
            })}
        </ul>
        {JSON.stringify()}
    </>

}

export default List;