import React, { useEffect, useState } from 'react'

function Alert({type, message, duration = 3000}) {
    const [isVisible, setIsVisible]= useState(true)
    useEffect(()=>{
        if(duration){
            setTimeout(()=>{
                setIsVisible(false)
            }, duration)
            return ()=> clearTimeout(timer) 
        };
    }, [duration]);
    const AlertStyles={
        success:{backgroundColor: "#d4edda", color: "#155724"},
        error:{backgroundColor: "#f8d7da", color: "#721c24"},
        warning:{backgroundColor: "#fff3cd", color: "#856404"},
    };
    const baseStyle={
        padding:"15px",
        borderRadius: "5px",
        margin: "10px",
        dispalay: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    }
    const currentStyle = AlertStyles[type]

    if(!isVisible) return null;

  return (
    <div style={{...baseStyle, ...currentStyle}}>
        <span>
            {type==="success"}
            {type==="error"}
            {type==="warning"}
            {message}
        </span>
          <button
          onClick={()=> setIsVisible(false)}
          style={{background:'none', border:'none', cursor:'pointer',fontSize:'16px'}}
          ><CircleX /></button>
    </div>
  );
};

export default Alert