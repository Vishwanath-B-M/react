import React,{useState} from "react";
function MyComponent(){
    const [tasks,setasks]=useState(["read","understand","write"])
    const [newtask,setnewtask]=useState("")
    function OnChange(event){
        setnewtask(event.target.value)

    }
    function AddTask(){
        if(newtask.trim()!==""){
        setasks(tasks=>[...tasks,newtask])
        setnewtask("")
       
        }
       

    }
    function RemoveTAsk(index){
        const remove=tasks.filter((_,i)=>i!==index)
        setasks(remove)

    }
    function MoveUp(index){
        if(index>0){
            const updated=[...tasks];
            [updated[index],updated[index-1]]=[updated[index-1],updated[index]]
            
            setasks(updated)
        }

    }
    function MoveDown(index){
        if(index<tasks.length-1){
            const updated=[...tasks];
            [updated[index],updated[index+1]]=[updated[index+1],updated[index]]
           
            setasks(updated)
        }

    }
    return(<>
    <input type="text" value={newtask} placeholder="enter the new task" onChange={OnChange}/>  <button onClick={AddTask}>Add </button>
    <ol>
        {tasks.map((task,index)=><li key={index}>{task}
            <button onClick={()=>RemoveTAsk(index)}>delete</button>
            <button onClick={()=>MoveUp(index)}>🆙</button>
            <button onClick={()=>MoveDown(index)}>⤵️</button>
        </li>)}
    </ol>
    </>)
}
export default MyComponent