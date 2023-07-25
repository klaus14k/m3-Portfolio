import { technologies } from "../../../data/technologies.js"
import "../../../styles/techlist.css"

export const TechList = () => {
    const listItems = technologies.map((technology) =>
        <li className="techlist-item" key={technology.id}>
            <img src={technology.img} />
            <h3>{technology.name}</h3>
        </li>
    )

    return (
        <ul id="techlist">
            {listItems}
        </ul>
    )
}