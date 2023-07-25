import "../../styles/header.css"
import logo from "../../assets/portfolio.png"

export const Header = () => {
    return (
        <header>
            <img src={logo} alt="Portfólio Logo" />
            <div>
                <h4>Sobre</h4>
                <h4>Stacks</h4>
                <h4>Projetos</h4>
            </div>
            <button>Contato</button>
        </header>
    )
}