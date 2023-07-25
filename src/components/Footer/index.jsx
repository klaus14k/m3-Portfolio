import "../../styles/footer.css"
import whatsapp from "../../assets/whatsapp-icon.png"
import linkedin from "../../assets/linkedin-icon.png"
import github from "../../assets/github-icon.png"

export const Footer = () => {
    return (
        <footer>
            <div>
                <h2>Contato</h2>
                <div>
                    <img src={whatsapp} alt="Whatsapp Logo" />
                    <img src={linkedin} alt="Linkedin Logo" />
                    <img src={github} alt="GitHub Logo" />
                </div>
            </div>
            <p>Todos os direitos reservados - José da Silva</p>
        </footer>
    )
}