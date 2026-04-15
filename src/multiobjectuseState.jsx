import React,{useState} from 'react';
function Car(){
    const[cars,setcars]=useState([]);
    const[caryear,setcaryear]=useState(new Date().getFullYear())
    const[carmake,setcarmake]=useState("");
    const[carmodel,setcarmodel]=useState("");
function AddCarAarry(){
    const newcar={year:caryear,make:carmake,model:carmodel}
    setcars(cars=>[...cars,newcar])
    setcaryear(new Date().getFullYear())
    setcarmake("")
    setcarmodel("")

}
function RemoveArray(index){
    setcars(cars.filter((_,i)=>i!=index))

}
function HandleYear(event){
    setcaryear(event.target.value)


}
function HandleMake(event){
    setcarmake(event.target.value)

}
function HandleModel(event){
    setcarmodel(event.target.value)

}
return(<>
     <h2>list of your car</h2>
     <ul>{cars.map((car,index)=><li key={index} onClick={()=>RemoveArray(index)}> {car.year} {car.make} {car.model}</li>)}</ul>
     <input type='number' value={caryear} placeholder='enter the year'onChange={HandleYear}/>
     <input type='text' value={carmake} placeholder='enter the maker' onChange={HandleMake}/>
     <input type='text' value={carmodel} placeholder='enter the model' onChange={HandleModel}/>
     <button onClick={AddCarAarry}>Add Car </button>
   </>)





}
export default Car;