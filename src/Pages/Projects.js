import ProjectList from "../Components/ProjectList/ProjectList"
import { Link } from "react-router-dom"

const Projects = () => {
    return (
        <main className="py-5 bg-black">
            <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-4">
				<h1 className="heading-xl">Projects</h1>
				<Link
					to="/contact"
					className="btn-portfolio"
				>
					Contact me
				</Link>
			</div>
            <ProjectList/>
        </main>
    )
}

export default Projects