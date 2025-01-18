import SideBar from "./SideBar"
import Body from "./Body";
import { Outlet } from "react-router-dom";
const Main = () => {
    return <div className='flex py-16'>
        <SideBar />
        <Outlet />
    </div>
}

export default Main;