import React from "react"
import { USER_ICON } from "../utils/constants";
const Comment = ({data})=>{
    const {name,text,reply} = data;
    return(
        <div className="flex mt-4 shadow-sm bg-gray-100">
            <img className="w-12 h-12" src={USER_ICON}/>
            <div className="px-3">
            <p className="font-bold">{name}</p>
            <p>{text}</p>
            </div>
         
        </div>
    )
}
export default Comment