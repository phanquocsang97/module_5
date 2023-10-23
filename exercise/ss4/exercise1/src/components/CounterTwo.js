import {useIncrease} from "./Counter";
import React from "react";

export const CounterTwo = () => {
    const [count2, setCount2] = useIncrease(2);
    const handleIncrement = () => {
        setCount2(2);
    }
    return (
        <>
            <p>{count2}</p>
            <button onClick={handleIncrement}>Add 2</button>
        </>
    )
}