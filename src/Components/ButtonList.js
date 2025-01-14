const ButtonList = () => {
    const buttonsList = ["All", "Music", "News", "Live", "Telugu Cinema", "Kannada Cinema", "English Cinema", "Devotional", "Watched", "Trending", "Festival", ]
    return <div>
        {
            buttonsList.map(item => <button key={item} className="px-2 py-1 m-2 bg-gray-300 rounded">{item}</button>)
        }
    </div>
}
export default ButtonList;