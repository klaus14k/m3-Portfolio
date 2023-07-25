import { Header } from "./components/Header/index.jsx";
import { BannerSection } from "./components/BannerSection/index.jsx";
import { AboutMeSection } from "./components/AboutMeSection/index.jsx";
import { TechSection } from "./components/TechSection/index.jsx";
import { ProjectSection } from "./components/ProjectSection/index.jsx";
import { Footer } from "./components/Footer/index.jsx";
import "./styles/reset.css"
import "./styles/app.css";

function App() {

  return (
    <>
      <Header />
      <BannerSection />
      <AboutMeSection />
      <TechSection />
      <ProjectSection />
      <Footer />
    </>
  )
}

export default App
