
import React,{useState} from 'react';
function ColorPicker(){
    const [color,setcolor]=useState("");
    function handleColorPicker(event){
        setcolor(event.target.value)
    }
    return( <>
    <div>
        <h1> color picker </h1>
        <div style={{ backgroundColor:color , width:"300px",height:"300px",paddingBottom:"10px",marginBottom:"10px"}}> 
            <p> selected color:{color}</p>
        </div>
        <div style={{ backgroundColor:color , width:"300px",height:"300px",marginTop:"5px"}}>
            <label> select a color </label>
        <input type="color" value={color} onChange={handleColorPicker}/>
        </div>
        </div>
        </>
    
    )
}
export default ColorPicker;