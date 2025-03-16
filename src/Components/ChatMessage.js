const ChatMessage = ({name, message}) => {
    return <div className="">
        <div className="flex items-center py-2">
            <img alt = "user-icon" src="https://tse1.mm.bing.net/th?id=OIP.GJf5dUKrx-14LSV-54G8QAHaHa&pid=Api&P=0&h=180" className="h-8"/>
            <span className="px-2 font-bold">{name}</span>
            <span>{message}</span>
        </div>
    </div>
}
export default ChatMessage;