import React,{useState} from 'react';

function Food(){

const [foods,setfoods]=useState(["apple","bannana","orange"])
function AddFoods(){
const addfood=document.getElementById("addfood").value;
 document.getElementById("addfood").value="";
 setfoods([...foods,addfood]);
    

}
function RemoveFoods(index){
        setfoods(foods.filter((element,i)=>i!==index))
}
return(<>
        <h1> list of foods</h1>
        <ul> {foods.map((food,index)=><li key={index} onClick={()=>RemoveFoods(index)}>{food}</li>)}</ul>
        <input type="text" id="addfood" placeholder='enter the food'/>
        <button onClick={AddFoods}>Add Food</button>
       </>)
}
export default Food;