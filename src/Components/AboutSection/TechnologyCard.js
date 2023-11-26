import React from "react";
import "./AboutSection.css";

const TechnologyCard = ({ icon, name, desc }) => {
	return (
		<div className="tech-card col-12 col-xl-6 col-xxl-4 p-4">
			<div className="tech-item p-4">
				<div className="tech-item-img d-flex">{icon}</div>
				<div className="tech-item-content">
					<h3 className="heading-m">{name}</h3>
					<p className="body">{desc}</p>
				</div>
			</div>
		</div>
	);
};

export default TechnologyCard;
