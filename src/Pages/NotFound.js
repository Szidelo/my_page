import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <main className="error-page bg-black d-flex flex-column justify-content-center align-items-center gap-5">
            <h1 className="heading-xl">Errod 404 Page Not Found</h1>
            <Link to="/" className="btn-portfolio">Back to homepage</Link>
        </main>
    )
}

export default NotFound