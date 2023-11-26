import ProjectList from "../Components/ProjectList/ProjectList"
import { Link } from "react-router-dom"

const Projects = () => {
    return (
        <div className="py-5 bg-black">
            <div className="d-flex justify-content-between align-items-center pe-4">
				<h1 className="heading-xl">Projects</h1>
				<Link
					to="/contact"
					className="btn-portfolio"
				>
					Contact me
				</Link>
			</div>
            <ProjectList/>
        </div>
    )
}

export default Projects