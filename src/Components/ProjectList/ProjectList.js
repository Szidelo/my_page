import "./ProjectList.css";
import ProjectCard from "../ProjectCard/ProjectCard";
import data from "../../utils/data.json";

const ProjectList = () => {
	return (
		<div className="project-list d-flex flex-column gap-5 py-5">
			
			{data.projects.map((project) => (
				<ProjectCard
					key={project.id}
					data={project}
				/>
			))}
		</div>
	);
};

export default ProjectList;
