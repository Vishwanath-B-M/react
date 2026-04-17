import React,{useState} from "react";

function MyComponent(){
    const [tasks,settasks]=useState(["read","understand","then write"])
    const [newtasks,setnewtasks]=useState("")

  function InPutChange(event){
    setnewtasks(event.target.value)

  }
  function Add(){
    if(newtasks.trim()!==""){


settasks(tasks=>[...tasks,newtasks])
    setnewtasks("")

    }
  }
  function DeleteTask(index){
    const updatedtasks=tasks.filter((_,i)=>i!==index)
    settasks(updatedtasks);



  }
  function MoveUp(index){
    if(index>0){
    const updated=[...tasks]
    ;[updated[index],updated[index-1]]=
    [updated[index-1],updated[index]]
    settasks(updated)
    }
    
  }
  function moveDown(index){
    if(index<tasks.length-1)

{
      const updated=[...tasks]
      ;[updated[index],updated[index+1]]=
      [updated[index+1],updated[index]]
      settasks(updated)
      }
      

  }


return(<>
<div className="box1">
<input className="input"type="text" value={newtasks} placeholder="enter the new task" onChange={InPutChange}/>
<button onClick={Add} className="add"> add </button>
</div>
<div className="container">
<ol>
  {tasks.map((task,index)=>
    <li className="li" key={task+index}>{task}
    <div className="buttons">
    <button className="delete" onClick={()=>DeleteTask(index)}>delete</button>
    <button className="up" onClick={()=>MoveUp(index)}>🆙</button>


    <button className="down"onClick={()=>moveDown(index)}>⤵️</button>
    </div>
    </li>)}
    </ol>
    </div>

   </>)
}
export default MyComponent;