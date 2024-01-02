import { USER_ICON } from "../utils/constants";

const ChatMessage=({name,message})=>{
    return (
        <div className="flex space-x-2 shadow-sm">
            <img className="h-8" src={USER_ICON}/>
            <span className="font-bold">{name}</span>
            <span>{message}</span>
        </div>
    )
}
export default ChatMessage;