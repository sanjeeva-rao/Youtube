const CommentList = ({data}) => {
    
    return <div className="flex pt-4">
            <img alt = "user-icon" src="https://tse1.mm.bing.net/th?id=OIP._x2YqKMtfxOjkfT8g9xIvQHaG5&pid=Api&P=0&h=180" className="h-8 w-8 mt-2"/>
            <div className="pl-4">
                <h1 className="font-bold">@{data.name}</h1>
                <p>{data.text}</p>
                <button className="text-sm text-blue-700 mt-2 hover:bg-blue-300 hover:py-1 hover:px-2 hover:rounded" >Reply</button>
                {
                    data.replies && data.replies.map((data, index) => <CommentList data = {data} key={index} />)
                }
            </div>
        </div>
}
export default CommentList;