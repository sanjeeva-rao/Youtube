import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { search_results_api } from "../utils/constants";
import { useState } from "react";
import VideoBackground from "./VideoBackground";
import DisplaySearchResults from "./DisplaySearchResults";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addSearchVideosToCache } from "../utils/SearchSuggestions";
const SearchResults = () => {
    const [searchQuery] = useState(useParams().resQuery);
    const [searchResults, setSearchResults] = useState([]);
    const searchVideosList = useSelector(store => store.searchCache.videos);
    const dispatch = useDispatch();

    useEffect(()=>{
        console.log("use effect");
        searchVideos();
    }, [searchQuery])

    const searchVideos = async () => {
        console.log("search videos");
        
        if(searchVideosList[searchQuery]) {
            setSearchResults(searchVideosList[searchQuery]);
        }
        else{
            const data = await fetch(search_results_api.pre_api+searchQuery+search_results_api.post_api);
            const json = await data.json();
            setSearchResults(json.items);
            dispatch(addSearchVideosToCache({[searchQuery]:json.items}));
        } 
    }

    return <div className="py-4 pl-36">
        {
            
            searchResults && searchResults.map((video, index)=><DisplaySearchResults key={index} data= {video}/>)
        }
    </div>
}
export default SearchResults;