import React, {useEffect, useState} from 'react';
function MyComponent(){
    const [count,addcount]=useState(0)
    //const (title())=useEffect()
    function Count(){
        addcount(count=>count+1)
    }
    useEffect(()=>{
        document.title=`count:${count}`
    },(0))

    return(<>
     <h2>{count}</h2>
     <button onClick={Count}> add</button>
    </>)
}
export default MyComponent

