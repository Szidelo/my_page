import "./Banner.css";
import { Link } from "react-router-dom";
import CV from "../../assets/CV_Frontend_Szidelo Claudiu.pdf";

const Banner = () => {
	return (
		<section className="banner py-3 py-xl-5">
			<h1 className="heading-xl">Nice to meet you</h1>
			<h1 className="heading-xl mb-3 mb-xl-5">
				I'm <span>Claudiu Szidelo</span>
			</h1>
			<p className="body mb-5">
				Hailing from Romania, I am a passionate frontend developer with a deep love for crafting beautiful websites and web
				applications.
				<br />I am currently seeking a new entry-level position in the field of frontend development.
			</p>
			<div className="d-flex gap-3">
				<a className="btn-portfolio" download href={CV}>
					Download CV
				</a>
				<Link className="btn-portfolio btn-portfolio-light" to="/projects">
					See Projects
				</Link>
			</div>
			<div className="video-wrapper"></div>
		</section>
	);
};

export default Banner;
