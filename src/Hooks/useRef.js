import React,{ useRef } from "react";

function RefHook() {
    
    let inputRef = useRef();

    function handleClick(){
        //console.warn("abc");
        //inputRef.current.value=1000;
        //inputRef.current.focus();
        inputRef.current.style.color="red";
        //inputRef.current.style.display="none";
    }

    return(
        <div>
            <h2>useRef in React</h2>
            <input type="text" ref={inputRef} />
            <button onClick={handleClick}>Handle Click</button>
        </div>
    )
}

export default RefHook;