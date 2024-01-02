import { useDispatch, useSelector } from "react-redux";
import { HAMBURGER, LOGO, SEARCH, USER_ICON, YOUTUBE_SEARCH_API } from "../utils/constants";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
// import { wait } from "@testing-library/user-event/dist/utils";
import { cacheResults } from "../utils/searchSlice";

const Header = () =>{
    const dispatch = useDispatch();
    const [searchQuery,setSearchQuery] = useState("");
    const [suggestions,setSuggestions] = useState([]);
    const [showSuggestions ,setShowSuggestions] = useState(false);

    const searchCache = useSelector((store)=>store.search);

    
    useEffect(()=>{
        //make an API call after every key press
        //but   if the d/f b/w 2 api calls <200ms 
        // decline the api call 
      const timer = setTimeout(() => {
        if(searchCache[searchQuery]){
            setSuggestions(searchCache[searchQuery])
        }else{
            getSearchSuggestions();
        }
        }, 200);

        return()=>{
            clearTimeout(timer);
        }
    },[searchQuery])

    const getSearchSuggestions= async()=>{
        // console.log("API call - "+searchQuery);
        const data = await fetch(YOUTUBE_SEARCH_API+searchQuery);
        const json = await data.json();
        // console.log(json[1]);
        setSuggestions(json[1])
        dispatch(cacheResults({
            [searchQuery]:json[1],
        }))
    }

    const handleToggleMenu=()=>{
        dispatch(toggleMenu())
    }
    return (
        <div className="grid grid-flow-col p-5 space-x-20">
            <div className="flex col-span-1 space-x-3">
                <img 
                src={HAMBURGER} 
                onClick={()=>{handleToggleMenu()}}
                alt="menu"
                className="h-12"
                />
                <img
                src={LOGO}
                alt="logo"
                className="h-12"
                />
            </div>
            <div className="col-span-10">
                <div className="flex">
                <input
                className="w-7/12 p-2 border border-gray-200 rounded-l-2xl"
                type="text"
                placeholder="search"
                value={searchQuery}
                onChange={(e)=>setSearchQuery(e.target.value)}
                onFocus={()=>{setShowSuggestions(true)}}
                onBlur={()=>{setShowSuggestions(false)}}
                />
                <button className="border hover:bg-transparent border-gray-200 px-8 rounded-r-2xl bg-gray-200">
                    <img className="h-5" src={SEARCH}/>
                </button>
                </div>
               {showSuggestions && <div className="absolute  bg-white py-2 px-4 w-[31rem] rounded-md ">
                    <ul>
                        {suggestions.map((s)=>
                        <li key={s} className="py-2 hover:bg-gray-100">🔍{s}</li>
                        )}
                        
                    </ul>
                </div>}
            </div>
            <div className="col-span-1">
                <img className="h-10" src={USER_ICON} alt="user" />
            </div>
        </div>
    )
}
export default Header;
