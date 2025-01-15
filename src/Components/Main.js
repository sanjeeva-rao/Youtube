import { Outlet } from "react-router-dom";
import SideBar from "./SideBar"
const Main = () => {
    return <div className='flex py-16'>
        <SideBar />
        <Outlet />
    </div>
}

export default Main;