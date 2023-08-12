import { NavLink, Outlet } from "react-router-dom";
import useSelected from "../../hooks/useSelected";
import useAdmin from "../../hooks/useAdmin";
import useInstructors from "../../hooks/useInstructors";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { AiTwotoneHome } from "react-icons/ai";
import { ImArrowRight } from "react-icons/im";


const Dashboard = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const [selected] = useSelected()

    // const isAdmin = true;
    const [isAdmin] = useAdmin()
    const [isInstructors] = useInstructors()
    console.log(isAdmin, isInstructors)

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </div>
            <div className="drawer-side border-e-2 border-orange-700">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">

                    <div>
                        <div className="flex justify-center">
                            <div className="avatar online">
                                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ">
                                    <img src={user.photoURL} />
                                </div>
                            </div>
                        </div>

                        <div className="my-2">
                            <h2 className="text-center font-bold text-xl">{user.displayName}</h2>
                            <h2 className="text-center text-lg">{user.email}</h2>
                        </div>
                        <hr className="font-extrabold text-orange-700 w-60" />
                    </div>
                    <NavLink to='/'><li className="my-5 hover:bg-orange-400 rounded-lg flex items-center pe-5"><a className="text-xl font-semibold hover:bg-orange-400"><AiTwotoneHome className=" text-orange-700"></AiTwotoneHome>Home</a></li></NavLink>
                    {
                        (!isAdmin && !isInstructors) && <div>
                            <NavLink to='/dashboard/myclass'>
                                <li className="hover:bg-orange-400 rounded-e-lg">
                                    <a className="text-lg font-semibold">My Selected Class <ImArrowRight></ImArrowRight></a>
                                </li></NavLink>
                            <NavLink to='/dashboard/enrolledclass'>
                                <li className="hover:bg-orange-400 rounded-e-lg">
                                    <a className="text-lg font-semibold">My Enrolled Class <ImArrowRight></ImArrowRight></a>
                                </li></NavLink>
                        </div>
                    }
                    {
                        isAdmin && <div>
                            <NavLink to='/dashboard/manegeclass'><li><a className="text-lg font-semibold"> Manage Classes <ImArrowRight></ImArrowRight></a></li></NavLink>
                            <NavLink to='/dashboard/manegeuser'><li><a className="text-lg font-semibold"> Manage Users <ImArrowRight></ImArrowRight></a></li></NavLink>
                        </div>
                    }
                    {
                        isInstructors && <div>
                            <NavLink to='/dashboard/addclass'><li><a className="text-lg font-semibold">Add Class  <ImArrowRight></ImArrowRight></a></li></NavLink>
                            <NavLink to='/dashboard/instructoradded'><li><a className="text-lg font-semibold">Add An Class  <ImArrowRight></ImArrowRight></a></li></NavLink>
                        </div>
                    }

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;
