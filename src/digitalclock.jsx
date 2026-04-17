
import React,{useState,useEffect} from "react";

function DigitalClock(){
    const [time,settime]=useState(new Date())


    useEffect(()=>{
        settime(new date)

    },[])
    function formateTime(){
        let hour=time.getHours()
        const minutes=time.getMinutes();
        const seconds=time.getSeconds();
        let tt=hour>12 ? "PM":"AM";
        hour=hour%12||12;
        return `${hour}:${minutes}:${seconds}:${tt}`;
    }
    


   return(<>
   <div className="main">
    <div className="sub">
        <h2>{formateTime()}</h2>

    </div>

   </div>



   </>)

}
export default DigitalClock;