import { Route, Routes } from "react-router-dom"
import { HomePage, ErrorPage } from "../pages/index.jsx"

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="*" element={<ErrorPage/>} />
        </Routes>
    )
}