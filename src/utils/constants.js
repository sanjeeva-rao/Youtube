const YOUR_API_KEY = "AIzaSyCth_xe0ZlPPxa55JrwTiwK9kilFFqFzaA"
export const youtube_api_key = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&&maxResults=50&chart=mostPopular&regionCode=IN&key="+YOUR_API_KEY
export const youtube_search_api = '/api/complete/search?client=firefox&ds=yt&q=';
export const search_results_api = {
    pre_api: "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=",
    post_api: "&key="+YOUR_API_KEY
}