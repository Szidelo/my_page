import "./ProjectList.css";
import ProjectCard from "../ProjectCard/ProjectCard";
import data from "../../utils/data.json";

const ProjectList = () => {
	const fixedOrderIds = ["project9", "project6", "project7", "project3"];

	const fixedProjects = data.projects.filter((project) => fixedOrderIds.includes(project.id));

	const randomProjects = data.projects.filter((project) => !fixedOrderIds.includes(project.id)).sort(() => Math.random() - 0.5); // amestecă restul

	const sortedProjects = [...fixedProjects, ...randomProjects];

	return (
		<div className="project-list d-flex flex-column gap-5 py-5 mb-5">
			{sortedProjects.map((project) => (
				<ProjectCard key={project.id} data={project} />
			))}
		</div>
	);
};

export default ProjectList;
