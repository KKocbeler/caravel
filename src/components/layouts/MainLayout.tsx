import { Outlet } from "react-router-dom"
import Navbar from "./Navbar/Navbar"

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Outlet />
            </div>
        </>
    )
}

export default MainLayout