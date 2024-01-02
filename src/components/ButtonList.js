import React from "react";
import Button from "./Button";


const list = ["All","Music","Mixes","Dramedy","Live",
             "Ceremonies","Thrillers","Bollywood Music","Javascript","Mantras",
            "Recently uploaded","Watched",
            "New to you","News","Lo-fi", "Filmi"
        ] 
                

const ButtonList = () =>{
    const btnList =list.map((btns,index)=>(
        <Button key={index} name={btns}/>
    ))
    return(
        <div className="flex  justify-center  ">
            {btnList}
            </div>
    )
}
export default ButtonList;  

