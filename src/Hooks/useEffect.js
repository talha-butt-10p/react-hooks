import React,{ useEffect, useState } from "react";

const UseEffect = () => {
    
    const [count, setCount] = useState(10);
    const [data, setData] = useState(100)

    const onCounter = () => {
        setCount(count+1);
    }

    const onData = () => {
        setData(data+1);
    }

    useEffect(()=>{
        console.warn("Clicked Data");
    },[data])

    useEffect(()=>{
        console.warn("Clicked Counter");
    },[count])

    return(
        <div>
            <h1>Using useEffect Method</h1>
            
            <h3>{count}</h3>
            <h3>{data}</h3>

            <button onClick={onCounter}>Update Counter</button>
            <button onClick={onData}>Update Data</button>

        </div>
    )
}

export default UseEffect;