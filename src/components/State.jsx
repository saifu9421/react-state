import { useState } from "react";

function State(){
              console.log("Hello World");
              
            const[counter,setCounter] = useState(0);
        
             const handleIncrement = ()=>{
                      setCounter(counter+1);
             };
             const handleDecrement = ()=>{
                      if(counter > 0){
                          setCounter(counter-1)
                      }
             };
              
      return (
            <>
               <p>Counter {counter}</p>
               <button onClick={handleIncrement}>Increment</button>
               <button onClick={handleDecrement}>Decrement</button>
             </> 
      );
};

export default  State;