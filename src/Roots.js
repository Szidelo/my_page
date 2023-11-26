import { Outlet } from "react-router-dom";
import Navbar from "./Components/NavBar/NavBar";

const Roots = () => {
    return (
        <div className="d-flex bg-black">
				<div className="bar-wrapper px-3">
					<Navbar/>
				</div>
				<div className="content-wrapper px-5">
					<Outlet/>
					
				</div>
			</div>
    )
}

export default Roots