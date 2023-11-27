import "./Banner.css";
import { Link } from "react-router-dom";
import CV from '../../assets/the-cv.pdf'

const Banner = () => {
	return (
		<section className="banner py-5">
			<h1 className="heading-xl">Nice to meet you</h1>
			<h1 className="heading-xl mb-5">
				I'm <span>Claudiu Szidelo</span>
			</h1>
			<p className="body mb-5">
				Based in the UK, I’m a front-end developer passionate about
				building accessible web apps that users love.
			</p>
			<div className="d-flex gap-3">
				<a
					className="btn-portfolio"
					download
					href={CV}
				>
					Download CV
				</a>
				<Link
					className="btn-portfolio btn-portfolio-light"
					to="/projects"
				>
					See Projects
				</Link>
			</div>
			
		</section>
	);
};

export default Banner;
