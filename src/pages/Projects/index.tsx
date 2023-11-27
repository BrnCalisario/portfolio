import "./index.scss"
import ProjectSlider, { ProjectInfo } from "../../components/Slider"


export const ProjectsPage = () => {

    const projects: ProjectInfo[] = [{
        name: 'Plug-it'
    }, {
        name: 'Chatbot'
    }, {
        name: 'Tictactoe-ia'
    }, {
        name: 'Deep-Learning'
    }]

    return (
        <div className="mb-5">
            <h1 className="text-right underline">Projetos</h1>
            <div className="w-100 border p-5">
                <ProjectSlider items={projects} />
            </div>
        </div >
    )
}

export default ProjectsPage