import RedSpan from "../../components/RedSpan"
import "./index.scss"

const ProjectPreview = () => {
    return (
        <div className="w-64 h-64 border border-sky-500">
            <h1></h1>
        </div>
    )
}

const ProjectsPage = () => {

    return (
        <>
            <RedSpan><h1>Projetos</h1></RedSpan>
            <div className="w-100 border border-red-700 p-4">
                <ProjectPreview />
            </div>
        </>
    )
}

export default ProjectsPage