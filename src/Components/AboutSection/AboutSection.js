import "./AboutSection.css";
import portrait from "../../assets/portrait.jpg";
import { Link } from "react-router-dom";
import TechnologyCard from "./TechnologyCard";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";

const techStack = [
    { name: 'HTML', description: 'Building block of web development', category: 'Frontend', icon: <FaHtml5 /> },
    { name: 'CSS', description: 'Stylesheet language for web design', category: 'Frontend', icon: <FaCss3 /> },
    { name: 'Bootstrap', description: 'CSS framework for responsive design', category: 'Frontend', icon: <FaBootstrap /> },
    { name: 'JavaScript', description: 'Programming language for web development', category: 'Frontend/Backend', icon: <IoLogoJavascript /> },
    { name: 'TypeScript', description: 'Superset of JavaScript with static typing', category: 'Frontend/Backend', icon: <SiTypescript /> },
    { name: 'React', description: 'JavaScript library for building user interfaces', category: 'Frontend', icon: <FaReact /> },
    { name: 'Vue.js', description: 'JavaScript framework for building interactive web interfaces', category: 'Frontend', icon: <FaVuejs /> },
  ];

const AboutSection = () => {
	return (
		<section className="about">
			<div className="row py-5">
				<div className="col-12 col-xxl-4">
					<div className="about__img-conatiner">
						<img
							className="img-fluid"
							src={portrait}
							alt="portrait"
						/>
					</div>
				</div>
				<div className="col-12 col-xxl-8">
					<div className="p-3 pt-5 py-lg-4 ps-lg-5">
						<h2 className="heading-l me-auto mb-5"><span className="underline">About me</span></h2>
						<div className="d-flex flex-column justify-content-between">
							<p className="body mb-5">
								I am a self-taught individual with a perpetual
								drive to enhance my knowledge and skills, aiming
								to contribute positively to the projects I
								engage in. Currently, I am undergoing training
								in JavaScript at the Software Development
								Academy, where I am building a robust foundation
								in HTML, CSS, and gaining insights into the
								workings of JavaScript. This foundation has
								spurred my exploration of Object-Oriented,
								structured, and functional programming in
								JavaScript, along with proficiency in frameworks
								like React and Vue.js. Concurrently, I am
								familiarizing myself with Agile methodologies.
								This broad spectrum of knowledge enables me to
								craft user-friendly web applications that are
								not only responsive and engaging but also
								written with a focus on clean code practices.
								Moreover, I am committed to refining my
								problem-solving skills, delving into algorithms,
								and challenging myself with logical problems
								from platforms such as CodeWars and HackerRank.
								In addition to my expertise in JavaScript, I
								also leverage TypeScript in conjunction with
								Vue.js to enhance my development capabilities.
							</p>
							<Link
								className="btn-portfolio align-self-start"
								to="/contact"
							>
								Contact me
							</Link>
						</div>
					</div>
				</div>
			</div>
            <div className="mt-5">
                <div className="row w-100 pb-5 px-3 mb-5">
                <h2 className="heading-l">Technologies</h2>
                    {techStack.map((techCard, index) => (

                    <TechnologyCard key={index} name={techCard.name} icon={techCard.icon} desc={techCard.description} />
                    ))}
                </div>
            </div>
		</section>
	);
};

export default AboutSection;
