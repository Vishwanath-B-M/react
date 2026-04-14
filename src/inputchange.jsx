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

const [payment,setpayment]=useState("")
function handlepayment(event){
   setpayment(event.target.value)
}
const [delevery,setdelevery]=useState("")
function handledelevery(event){
   setdelevery(event.target.value)
}
 
 return(
    <>
    <input value={name} onChange={changeinputname}/>
    <p> name:{name}</p>

    <input value={quantity} onChange={settingquantity}/>
    <p>quantity:{quantity}</p>

    <select onChange={handlepayment}>
      <option>visa</option>
      <option>cash</option>
      <option>american express</option>
    </select>
    <p> payment:{payment}</p>
    <label>
      <input type="radio" value="delevery" checked={delevery==="delevery"} 
      onChange={handledelevery}/>
      delevery
    </label>
    <br></br>
    <label>
      <input type='radio' value='pick up'
   checked={delevery==="pick up"}
         onChange={handledelevery}/>
         pick up
    </label>
    <h4> shpping:{delevery}</h4>
    </>
 )
}
export default Eventchange;