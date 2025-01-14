const VideoCard = ({data}) => {
    console.log(data, "data");
    const {snippet, statistics} = data;
    
    return <div className="p-2 m-2 w-60 h-72">
        <img alt="thubnail"src={snippet.thumbnails.medium.url} />
        <div className="font-bold">{snippet.channelTitle}</div>
        <div>{snippet.title}</div>
        <div>{statistics.viewCount} Views</div>
    </div>
}
export default VideoCard;