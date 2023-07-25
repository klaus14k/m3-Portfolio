import { projects } from "../../../data/projects"
import git from "../../../assets/git-icon.png"
import "../../../styles/projectlist.css"

export const ProjectList = () => {
    const listItems = projects.map((project) =>
        <li className="projectlist-items" key={project.id}>
            <div>
                <h3>{project.name}</h3>
                <img src={git} alt="Git Icon"/>
            </div>
            <p>{project.description}</p>
            <a>Saiba Mais</a>
        </li>
    )

    return (
        <ul id="projectlist">
            {listItems}
        </ul>
    )
}