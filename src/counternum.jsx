import React, {useState} from "react";
function Counter(){
const [count,setcount]=useState(0);

const increment=()=>{
    setcount(count+1)
}
const decrement=()=>{
    setcount(count-1)
}
const reset=()=>{
    setcount(0)
}

return(
    <>
    <p>count={count}</p>
    <button onClick={increment}>increment count </button>
    <button onClick={decrement}> decrement count</button>
    <button onClick={reset}> reset </button>
    </>
)
}
export default Counter;