
import React,{useState,useContext,useEffect,useRef} from "react";

function StopWatch(){

  const [isrunning,setisrunning]=useState(false)
  const [elapsetime,setelapstime]=useState(0)
  const intervalref=useRef(null)
  const starttimeref=useRef(0)

useEffect(()=>{
    if(isrunning){
    intervalref.current=setInterval(()=>{
    setelapstime(Date.now()-starttimeref.current)}
,1000)
}
return ()=>{
  clearInterval(intervalref.current)
};
},[isrunning])

  function start(){
    setisrunning(true)
    starttimeref.current=(Date.now()-elapsetime)

  }
  function stop(){
    setisrunning(false)
  }
  function reset(){
    setisrunning(false)
    setelapstime(0)

  }
function formatting(){
    let hours=Math.floor((elapsetime/(1000*60*60)))
    let minutes=Math.floor(elapsetime/(1000*60)%60)
    let seconds=Math.floor(elapsetime/(1000)%60)
    let miliseconds=Math.floor((elapsetime%1000)/10)

hours=String(hours).padStart(2,"0")
minutes=String(minutes).padStart(2,"0")
seconds=String(seconds).padStart(2,"0")
miliseconds=String(miliseconds).padStart(2,"0")

  return `${hours}:${minutes}:${seconds}:${miliseconds}`
}
return(<>
<title>StopWatch</title>
<div className="main">
  <div className="sub">
        <h1 className="clock"> {formatting()} </h1>
        <div className="button">
        <button className="start" onClick={start}>start</button>
        <button className="stop" onClick={stop}>stop</button>
        <button className="reset" onClick={reset}>reset</button>
        </div>
  </div>
</div>
</>)

}
export default StopWatch;