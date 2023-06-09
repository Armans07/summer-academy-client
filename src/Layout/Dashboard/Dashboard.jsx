import {  NavLink, Outlet } from "react-router-dom";
import useSelected from "../../hooks/useSelected";
import MyClass from "./MyClass/MyClass";


const Dashboard = () => {

    const [selected] = useSelected()

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    <NavLink to='/dashboard/myclass'><li><a>My Selected Class {selected?.length || 0}</a></li></NavLink>
                    <NavLink><li><a>My Enrolled Class</a></li></NavLink>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;
