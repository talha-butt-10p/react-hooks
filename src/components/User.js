import React,{ useEffect } from "react";

const UseEffect = (props) => {
 
    useEffect(()=>{
        alert ("Count is: "+ props.count)
    },[props.count])

    useEffect(()=>{
        alert("Data is"+ props.data);
    },[props.data])

    return(
        <div>
            <h3>Count Props: {props.count}</h3>
            <h3>Data Props: {props.data}</h3>
        </div>
    )
}

export default UseEffect;