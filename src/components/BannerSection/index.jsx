import "../../styles/banner.css"
import banner from "../../assets/banner-img.png"
import { username } from "../../data/user.js"

export const BannerSection = () => {
    return (
        <section id="banner">
            <div>
                <span>{username}</span>
                <h1>Bem vindo ao meu portfólio</h1>
                <p>Uma frase interessante sobre mim</p>
                <button>Saiba mais</button>
            </div>
            <img src={banner} alt="Imagem Ilustrativa" />
        </section>
    )
}