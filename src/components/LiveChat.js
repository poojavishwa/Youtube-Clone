import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomNames, makeRandomMessage } from "../utils/helperText";


const LiveChat=()=>{

    const [liveMessage,setLiveMessage] = useState("");

    const dispatch = useDispatch();
    const chatMessages = useSelector((store)=>store.chat.message);
    useEffect(()=>{
        const i = setInterval(()=>{
            dispatch(
                addMessage({
                    name:generateRandomNames(),
                    message:makeRandomMessage(20),
                })
            )
        },3000);
        return ()=>clearInterval(i);
    },[])

    return(
        <>
        <div className="border-black h-[500px] rounded-xl p-3 ml-2 w-full bg-slate-100 overflow-y-scroll flex flex-col-reverse"> 
            {chatMessages.map((c,index)=><ChatMessage key={index} name={c.name} message={c.message}/>)}
        </div>
        <form className="w-full ml-2 p-2 " 
        onSubmit={(e)=>{
            e.preventDefault();
            dispatch(addMessage({
                name:"pooja",
                message:liveMessage,
            }))
            }}>
            <input 
            className="w-80 p-1  bg-gray-200 rounded-full" 
            type="text"
            value={liveMessage}
            onChange={(e)=>{
                setLiveMessage(e.target.value);
            }}
            />
            <button className="px-2 mx-2 bg-gray-100 rounded-md">send</button>
        </form>
        </>
    )
}
export default LiveChat