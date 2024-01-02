const VideoCard=({info})=>{
    if (!info) {
        return null; 
    }

    const {snippet,statistics}=info;
    const{channelTitle,title,thumbnails}=snippet;
    return (
        <div className="m-4 w-52 flex-wrap">
            <img  className="rounded-lg" src={thumbnails.medium.url}/>
            <div>
                <h1 className="font-bold">{title}</h1>
                <p>{channelTitle}</p>
                <p>{statistics.viewCount} view</p>
            </div>
           
        </div>
    )
}
export default VideoCard;