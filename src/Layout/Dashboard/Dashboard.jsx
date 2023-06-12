import { NavLink, Outlet } from "react-router-dom";
import useSelected from "../../hooks/useSelected";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/UseInstructor";
import useInstructors from "../../hooks/useInstructors";


const Dashboard = () => {

    const [selected] = useSelected()

    // const isAdmin = true;
    const [isAdmin] = useAdmin()
    const [isInstructors] = useInstructors()
    console.log(isAdmin ,isInstructors)

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

                    {
                        (!isAdmin && !isInstructors) && <div>
                            <NavLink to='/dashboard/myclass'><li><a>My Selected Class {selected?.length || 0}</a></li></NavLink>
                            <NavLink to='/dashboard/enrolledclass'><li><a>My Enrolled Class </a></li></NavLink>
                        </div>
                    }
                    {
                        isAdmin && <div>
                            <NavLink to='/dashboard/manegeclass'><li><a> Manage Classes</a></li></NavLink>
                            <NavLink to='/dashboard/manegeuser'><li><a> Manage Users</a></li></NavLink>
                        </div>
                    }
                    {
                        isInstructors && <div>
                            <NavLink to='/dashboard/addclass'><li><a>Add Class</a></li></NavLink>
                            <NavLink to='/dashboard/instructoradded'><li><a>Add An Class</a></li></NavLink>
                        </div>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;
