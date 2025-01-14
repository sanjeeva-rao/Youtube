import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const SideBar = () => {
    const navigate = useNavigate();
    const toggleMenuValue = useSelector(store=>store.app.toggleMenuValue);

    const toggleHome = () => {
        navigate("/")
    }
    
    if(!toggleMenuValue) return;
    
    return <div className="p-4 shadow-xl h-screen">
        <div>
            <img alt="home-icon" src="https://tse4.mm.bing.net/th?id=OIP.gUFOcWkBJqJzZ6xCyf3EswHaHM&pid=Api&P=0&h=180" className="h-8 w-8" onClick={toggleHome}/>
            <div>Home</div>
        </div>
        <div className="py-8">
            <img alt="shorts-icon" src="https://img.icons8.com/?size=48&id=ajczeHCWXbyR&format=png" className="h-8 w-8" />
            <div>shorts</div>
        </div>
        <div>
            <img alt="subscription-icon" src="https://tse2.mm.bing.net/th?id=OIP.XvY6LA8rPbB-skw9mjqnyQAAAA&pid=Api&P=0&h=180" className="h-8 w-8"/>
            <div>Subscriptions</div>
        </div>
        <div className="py-8">
            <img alt="user-icon" src="https://tse1.mm.bing.net/th?id=OIP.GJf5dUKrx-14LSV-54G8QAHaHa&pid=Api&P=0&h=180" className="h-8 w-8"/>
            <div>You</div>
        </div>
    </div>
}
export default SideBar;