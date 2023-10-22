import React, {useState} from "react";


function Counter() {
    const [counterFirst, setCounterFirst] = useState(1);
    const [counterSecond, setCounterSecond] = useState(2);

    const increaseOne = () => {
        setCounterFirst(counterFirst + 1);
    }

    const increaseTwo = () => {
        setCounterSecond(counterSecond + 2);
    }

    return (
        <div className="App">
            <h1>Count : {counterFirst}</h1>
            <button onClick={increaseOne}>
                Add 1
            </button>
            <br/>
            <h1>Count : {counterSecond}</h1>
            <button onClick={increaseTwo}>
                Add 2
            </button>
        </div>
    );
}

export default Counter;