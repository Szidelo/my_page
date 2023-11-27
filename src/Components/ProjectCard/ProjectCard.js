import "./ProjectCard.css";
import { useState, useEffect } from "react";

const ProjectCard = ({ data }) => {
    const [tech, setTech] = useState('technologies used')

    useEffect(() => {
        setInterval(() => {
            const getRandom = (item) => {
                
                const randomIndex = Math.floor(Math.random() * item.length);
                return item[randomIndex]
            } 
            setTech(getRandom(data.tech))
        }, 2500)
    }, [data.tech])

	return (
		<div className="project-card row my-4">
			<div className=" col-12 col-lg-6 col-xxl-4">
				<div className="project-card__img-wrapper">
					<a
						href={data.demo}
						target="_blank"
						rel="noreferrer"
					>
						<img
							className="project-img image-fluid"
							src={data.img}
							alt=""
						/>
					</a>
				</div>
			</div>
			<div className="col-12 col-lg-6 col-xxl-8">
				<div className="project-card__info col-12 col-xl-8 d-flex flex-column align-items-end justify-content-end position-relative">
					<h1 className="title-large heading-xl">{data.name}</h1>
					<h2 className="heading-l mt-3">{data.name}</h2>
					<p className="tech-info body">{tech}</p>
					<p className="body text-end mb-4">{data.desc}</p>
					<a
						href={data.source}
						target="_blank"
						rel="noreferrer"
						className="btn-portfolio mt-auto mt-xl-2"
					>
						Source Code
					</a>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
