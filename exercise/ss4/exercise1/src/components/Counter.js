import {useState} from 'react'

export const useIncrease = (props) => {
    const [count, setCount] = useState(props);
    const changeCount = number => {
        setCount(pre => pre + props);
    };
    return [count, changeCount];
}