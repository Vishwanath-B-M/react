
import React,{useState,useEffect} from "react";
function MyComponent(){
    const [width,setwidth]=useState(window.innerWidth)
    const [height,setheight]=useState(window.innerHeight)



   useEffect(()=> {window.addEventListener("resize",setHw);
    console.log("added")
          return () =>{
    window.removeEventListener("resize",setHw)
    console.log("removed")

   }},[]);
   useEffect(()=>{
    document.title=`size:${width}*${height}`
   },[width,height])


function setHw(){
    setwidth(window.innerWidth)
    setheight(window.innerHeight)
}



    return(<>
          <p> width:{width}px</p>
          <p> height:{height}px</p>
             
             </>)
}
export default MyComponent;