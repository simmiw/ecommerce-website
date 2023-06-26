import React, { useState } from 'react';

// state
// we have to use a hook - useState
function Message() {
    const [name, setName] = useState("test");
    const [email, setEmail] = useState("");
    const [counter, setCounter] = useState(0);
    function listItems() {
        console.log("My Name is Simmi", name, email);
    }
    const onNameChange = (event) => setName(event.target.value + "  ");
    const onEmailChange = (event) => setEmail(event.target.value + "  v ");

    const increment = () => {
        setCounter(counter + 1);
    }

    const decrement = () => {
        setCounter(counter - 1);
    }

    return <>
        <input type='text' value={name} placeholder='Enter Name' onChange={onNameChange} />
        <input type='text' placeholder='Enter Email' onChange={onEmailChange} />
        <div>Name: {name}</div>
        <div>Email: {email}</div>
        <button onClick={listItems}>Submit</button>
        <div>
            <button onClick={increment}>+</button>
            {counter}
            <button onClick={decrement}>-</button>
        </div>
    </>
}

export default Message;