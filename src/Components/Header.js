import { useDispatch } from "react-redux";
import { ChangeToggleMenu } from "../utils/appSlice";
import { useState, useEffect } from "react";
import { youtube_search_api } from "../utils/constants";
import { addSuggestionsToCache } from "../utils/SearchSuggestions";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Header = () => {
    const [showSearchItems, setShowSearchItems] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [serachItemsArray, setSearchItemsArray] = useState([]);
    const [showCross, setShowCross] = useState(false);
    const searchCache = useSelector(store => store.searchCache)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const toggleMenuIcon = () => {
        dispatch(ChangeToggleMenu())
    }
    useEffect(()=>{
        const timer = setTimeout(()=>{
            if(searchCache[searchQuery] === undefined) {
                getSearchQuesries();
            }
            else{
                setSearchItemsArray(searchCache[searchQuery])
            }
        },200)

        return () => {
            clearTimeout(timer)
        }
    }, [searchQuery])

    const getSearchQuesries = async() => {
        const data = await fetch(youtube_search_api+searchQuery)
        const json = await data.json();
        setSearchItemsArray(json[1]);
        dispatch(addSuggestionsToCache({[searchQuery]: json[1]}));   
    }

    const searchQueyChanged = (searchValue) => { 
        searchValue === "" ? setShowCross(false) : setShowCross(true)
        setSearchQuery(searchValue);
    }

    const navigateToSearch = (search) => {
        navigate("/results/"+search);
        setShowSearchItems(false);
        
    }

    return <div className="flex p-3 fixed bg-white">
        <div className="flex">
            <img alt="menu" onClick={toggleMenuIcon} src="https://tse3.mm.bing.net/th?id=OIP.Au0_7mpqZMtQeoRL4iFkqAHaHa&pid=Api&P=0&h=180" className="h-10 cursor-pointer"/>
            <img alt="yoytube-icon" src="https://tse3.mm.bing.net/th?id=OIP.dyCFJCFKwrC5V796-k9_BAHaHa&pid=Api&P=0&h=180" className="h-10 cursor-pointer"/>
            <div className="pt-1 font-bold text-xl">YouTube</div>
        </div>
        <div className="px-60">
            <div className="flex">
                <input type="text" placeholder="Search" className="rounded-l-full w-[500px] border border-gray-500 px-4" value={searchQuery} onChange={(e)=>searchQueyChanged(e.target.value)} onFocus={()=>{setShowSearchItems(true)}} />
                {
                    showCross && <div className="absolute right-[360px] text-2xl text-gray-500 cursor-pointer" onClick={()=>{searchQueyChanged("")}}>X</div>
                }
                <div className="border border-gray-500 rounded-r-full">
                    <img alt="search" src="https://tse3.mm.bing.net/th?id=OIP.RF8hdNm5eOnLDpG_GSu5NwHaHN&pid=Api&P=0&h=180" className="h-8 px-4 py-1"/>
                </div>
            </div>
           {
           
            showSearchItems && serachItemsArray.length > 0 && <div className="fixed bg-white border border-gray-300 rounded-lg w-[500px] p-4 m-1">
                    {
                        serachItemsArray.map(search=><div className="hover:bg-gray-300 hover: px-2 hover: rounded-lg cursor-pointer" key={search} onClick={()=>{navigateToSearch(search)}}>{search}</div>)
                    }
            </div>
           }
        </div>
        <div className="">
            <img alt = "user-icon" src="https://tse1.mm.bing.net/th?id=OIP.GJf5dUKrx-14LSV-54G8QAHaHa&pid=Api&P=0&h=180" className="h-10"/>
        </div>
    </div>
}

export default Header;