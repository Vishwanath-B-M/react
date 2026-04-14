import React,{useState} from 'react';

function Eventchange(){
    const [name,setname]=useState("")
 function changeinputname(event){
    setname(event.target.value)
 }

 const [quantity,setquantity]=useState("0")
 function settingquantity(event){
   setquantity(event.target.value)
 }
 
 return(
    <>
    <input value={name} onChange={changeinputname}/>
    <p> name:{name}</p>

    <input value={quantity} onChange={settingquantity}/>
    <p>quantity:{quantity}</p>
    </>
 )
}
export default Eventchange;