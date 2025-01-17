import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Navbar = () => {

    const { user, logOut,loading } = useContext(AuthContext)
    // const [success, setSuccess] = useState("")
    // const [errorMessage, setErrorMessage] = useState("")

    const handleSignOut = () => {

        logOut()
            .then(() => {
                console.log("Logged Out")
            })
            .catch(error => {
                console.log(error.message)
            })
    }



    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/all-craft">All Art & craft Items</NavLink></li>
        <li><NavLink to="/add-craft">Add Craft Item</NavLink></li>
        <li><NavLink to={`/my-craft/${user?.email}`}>My Art & Craft List</NavLink></li>
    </>

if(loading){
    return <p>Loading</p>
}

    return (
        <div className="navbar bg-base-100">

            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">ArtisanVista</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end mx-auto gap-6">
                {user ?
                    <div className="flex items-center gap-4">
                        <div className="">
                            <div className="tooltip tooltip-left" data-tip={user.displayName}>
                                <img className="rounded-full h-10 w-10" src={user.photoURL} alt="" />
                            </div>
                        </div>
                        <button className="btn btn-sm bg-[#D2B48C]" onClick={handleSignOut}>Sign out</button>
                    </div> :
                    <div className="flex items-center gap-4">
                        <Link to={"/login"}>
                            <button className="btn btn-sm bg-[#D2B48C]">Login</button>
                        </Link>
                        <Link to={"/register"}>
                            <button className="btn btn-sm bg-[#D2B48C]">Register</button>
                        </Link>
                        <div className="">
                            <img className="rounded-full h-10 w-10" src="/blank-user.jpg" alt="" />
                        </div>
                    </div>

                }
            </div>
        </div>
    );
};

export default Navbar;