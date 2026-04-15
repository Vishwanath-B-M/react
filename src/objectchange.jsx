import react,{useState} from 'react';
function ObjectChange(){
    const [car,setcar]=useState({year:2024,make:"apple",model:"matchMedia"})
  
    function HandleYear(event){
       setcar(c=>({...c,year: event.target.value}))
    }
    function HandleMake(event){
        setcar(c=>({...c,make:event.target.value}))
    }
    function HandleModel(event){
        setcar(c=>({...c,model:event.target.value}))
    }




    return(
        <>
        <div>
        <p>your fauvrate car year:{car.year} {car.make} {car.model} </p>
        <input type="number" value={car.year} onChange={HandleYear}/>
        <input type="text" value={car.make} onChange={HandleMake}/>
        <input type="text" value={car.model} onChange={HandleModel}/>              
        </div>
        </>
    )
}
export default ObjectChange;