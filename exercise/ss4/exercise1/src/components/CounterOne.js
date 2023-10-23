import {useIncrease} from "./Counter";
import React from "react";

export const CounterOne = () => {
    const [count1, setCount1] = useIncrease(1);
    const handleIncrement = () => {
        setCount1(1);
    }
    return (
        <>
            <p>{count1}</p>
            <button onClick={handleIncrement}>Add 1</button>
        </>
    )
}