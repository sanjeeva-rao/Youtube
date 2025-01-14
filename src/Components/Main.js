import { Outlet } from "react-router-dom";
import SideBar from "./SideBar"
const Main = () => {
    return <div className='flex'>
        <SideBar />
        <Outlet />
    </div>
}

export default Main;