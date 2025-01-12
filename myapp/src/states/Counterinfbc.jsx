import { useState } from "react";

const  CounterInFbc =()=>{ 
      let [count ,setCount] =useState(0);
      let increment = () =>{
        if (count < 10){
            setCount (count +1);
        } else {
            setCount("limt exceed please refresh the page 🙂")
        };
       };
      let decrement = () =>{
        if(count>0){
            setCount(count -1);
        }
      };
      let reset = () =>{
        setCount( 0)
    
      };
    return(
        <div>
            <h1> i am counterInFbc</h1>
            <h2>counter {count}</h2>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>derement</button>
            <button onClick={reset}>reset</button>
        </div>
    );
};
export default CounterInFbc;