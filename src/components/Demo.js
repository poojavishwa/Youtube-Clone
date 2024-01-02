import { useMemo, useState } from "react";
import { findPrime } from "../utils/helperText";

const Demo=()=>{
    const [text,setText] = useState(0);
    const [isDarkTheam,setIsDarkTheam] = useState(false);
    const prime =useMemo(()=>findPrime(text),[text])

    // const prime = findPrime(text)
    return(
        <div className={"h-96 p-4 m-4  w-96 border border-black shadow-lg"+(isDarkTheam && " bg-gray-950 text-white")}>
            <div>
                <button className="px-4 bg-green-600 mb-3 text-white" 
                onClick={()=>setIsDarkTheam(!isDarkTheam)}>toggle</button>
            </div>
            <input className="border border-black text-black " 
            type="number" 
            value={text} 
            onChange={(e)=>setText(e.target.value)} 
            />
            <div className="m-4 p-4">
                <h1>nth prime{prime}</h1>
            </div>
        </div>
    )
}
export default Demo;