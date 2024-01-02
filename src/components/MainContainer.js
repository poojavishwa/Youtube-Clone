import ButtonList1 from "./ButtonList1";
import VideoContainer from "./VideoContainer";

const MainContainer = () =>{

    const list = ["All","Music","Mixes","Dramedy","Live",
             "Ceremonies","Thrillers","Bollywood Music","Javascript","Mantras",
            "Recently uploaded","Watched",
            "New to you","News","Lo-fi", "Filmi"
        ] 
    return (
        <div>
            {/* <div className="w-[1000px] m-5">
            
            </div> */}
            {/* <ButtonList1 list={list} /> */}
            <VideoContainer/>
        </div>
    )
}
export default MainContainer;