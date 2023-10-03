import React,{ useState } from "react";
import User from "../components/User";

const UseEffectProps = () => {
    
    const [count, setCount] = useState(10);
    const [data, setData] = useState(100)

    const onCounter = () => {
        setCount(count+1);
    }

    const onData = () => {
        setData(data+1);
    }

     
    return(
        <div>
            <h1>Using useEffect with Props</h1>
            
            <User count={count} data={data} />

            <button onClick={onCounter}>Update Counter</button>
            <button onClick={onData}>Update Data</button>

        </div>
    )
}

export default UseEffectProps;