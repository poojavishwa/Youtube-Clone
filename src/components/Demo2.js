import { useRef, useState } from "react";


const Demo2=()=>{
    const [y,setY] = useState(0)
    const ref = useRef(0)
    let x=0;
    // console.log(x)
    // const prime = findPrime(text)
    return(
        <div className="h-96 p-4 m-4  w-96 border border-black shadow-lg">
           <div>  
            <button className="px-4 bg-green-600 mb-3 text-white" 
            onClick={()=>{
                x=x+1;
                console.log("x= "+x);
                }}>Increase let</button>
            <h1>let - {x}</h1>
          </div>
          <div>  
            <button className="px-4 bg-green-600 mb-3 text-white" 
            onClick={()=>{
                setY(y+1)
                }}>Increase state</button>
            <h1>state - {y}</h1>
          </div>
          <div>  
            <button className="px-4 bg-green-600 mb-3 text-white" 
            onClick={()=>{
                ref.current += 1;
                console.log("ref ="+ref.current)
                }}>Increase ref</button>
            <h1>ref - {ref.current}</h1>
          </div>
        </div>
    )
}
export default Demo2;