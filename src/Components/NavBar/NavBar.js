import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState, useEffect } from "react";

const Navbar = () => {
	const locationPath = useLocation()
	const [location, setLocation] = useState(locationPath);

	const links = [
		{
			path: "/",
			text: "home",
			icon: <AiOutlineHome />,
		},
		{
			path: "/about",
			text: "about",
			icon: <AiOutlineUser />,
		},
		{
			path: "/projects",
			text: "projects",
			icon: <BiBook />,
		},
		{
			path: "/contact",
			text: "contact",
			icon: <BiMessageSquareDetail />,
		},
	];

	useEffect(() => {
		setLocation(locationPath.pathname)
	}, [locationPath.pathname])

	return (
		<nav className="nav-bar">
			<ul className="p-2">
				{links.map((link, index) => (
					<li key={index}>
						<Link
							onClick={() => setLocation(link.path)}
							to={link.path}
							className="link-item d-flex justify-content-start align-items-center gap-2 py-0 py-lg-3"
						>
							<div
								className={
									location === link.path
										? "icon-wrapper active"
										: "icon-wrapper"
								}
							>
								{link.icon}
							</div>
							<p
								className={
									location === link.path
										? "body active-para m-0"
										: "body m-0"
								}
							>
								{link.text}
							</p>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
