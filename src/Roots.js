import { Outlet } from "react-router-dom";
import Navbar from "./Components/NavBar/NavBar";

const Roots = () => {
    return (
        <div className="d-flex bg-black content">
				<div className="bar-wrapper">
					<Navbar/>
				</div>
				<div className="content-wrapper px-2 px-sm-3 px-lg-5">
					<Outlet/>
					
				</div>
			</div>
    )
}

export default Roots