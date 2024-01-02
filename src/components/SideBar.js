import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () =>{
    const isMenuOpen = useSelector((store) =>store.app.isMenuOpen)

    //early return
    if(!isMenuOpen) return null;
    
    return (
        <div className="w-48 p-6 space-y-5">
             <ul>
                <li className="hover:bg-gray-400">
                    <Link to="/">
                       Home
                    </Link>
                </li>
                <li className="hover:bg-gray-400">Shorts</li>
                <li className="hover:bg-gray-400">Subscriptions</li>
            </ul>
            <ul>
                <li>Library</li>
                <li>History</li>
                <li>Watch Later</li>
                <li>Liked Video</li>
            </ul>
            <div>
            <h1 className="font-bold -ml-4">Subscriptions</h1>
            <ul>
                <li>Music</li>
                <li>Games</li>
                <li>Movies</li>
                <li>Akshay Saini</li>
            </ul>
            </div>
            <div>
            <h1 className="font-bold -ml-4" >Explore</h1>
            <ul>
                <li>Trending</li>
                <li>Shopping</li>
                <li>Live</li>
                <li>News</li>
                <li>Learnings</li>
            </ul>
            </div>
            <ul>
                <li>Settings</li>
                <li>Report History</li>
                <li>Help</li>
                <li>Send Feedback</li>
            </ul>
            
        </div>
    )
}
export default SideBar;