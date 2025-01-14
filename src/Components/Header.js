import { useDispatch } from "react-redux";
import { ChangeToggleMenu } from "../utils/appSlice";
const Header = () => {
    const dispatch = useDispatch();
    const toggleMenuIcon = () => {
        dispatch(ChangeToggleMenu())
    }
    return <div className="flex shadow-lg p-3">
        <div className="flex">
            <img alt="menu" onClick={toggleMenuIcon} src="https://tse3.mm.bing.net/th?id=OIP.Au0_7mpqZMtQeoRL4iFkqAHaHa&pid=Api&P=0&h=180" className="h-10 cursor-pointer"/>
            <img alt="yoytube-icon" src="https://tse3.mm.bing.net/th?id=OIP.dyCFJCFKwrC5V796-k9_BAHaHa&pid=Api&P=0&h=180" className="h-10 cursor-pointer"/>
            <div className="pt-1 font-bold text-xl">YouTube</div>
        </div>
        <div className="flex px-60">
            <input type="text" placeholder="Search" className="rounded-l-full w-[500px] border border-gray-500 px-4"/>
            <div className="border border-gray-500 rounded-r-full">
                <img alt="search" src="https://tse3.mm.bing.net/th?id=OIP.RF8hdNm5eOnLDpG_GSu5NwHaHN&pid=Api&P=0&h=180" className="h-8 px-4 py-1"/>
            </div>
        </div>
        <div className="">
            <img alt = "user-icon" src="https://tse1.mm.bing.net/th?id=OIP.GJf5dUKrx-14LSV-54G8QAHaHa&pid=Api&P=0&h=180" className="h-10"/>
        </div>
    </div>
}

export default Header;