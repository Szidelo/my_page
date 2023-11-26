import "./Header.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";

const Header = () => {
	return (
		<header className="bg-black">
			<div>
				<a
					href="/"
					className="page-logo"
				>
					c.szidelo
				</a>
                
			</div>
			<div className="header-links">
				<a href="https://github.com/Szidelo">
					<FaGithub className="header-icon"/>
				</a>
				<a href="https://www.linkedin.com/in/claudiu-szidelo-671b1324a/">
					<FaLinkedin className="header-icon"/>
				</a>
				<a href="https://www.frontendmentor.io/profile/Szidelo">
					<SiFrontendmentor className="header-icon"/>
				</a>
			</div>
		</header>
	);
};

export default Header;
