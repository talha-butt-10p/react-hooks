import React,{ useState } from "react"

const StateCounter = () => {

    const [count, setCount] = useState(0);

    const onCounter = () => {
        setCount(count+1);
    }
    
    return(
        <div>
            <p>{count}</p>
            <button onClick={onCounter}>Increment count is {count}</button>
        </div>
    )
}

export default StateCounter;