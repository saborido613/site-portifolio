import { Route, Routes } from "react-router-dom";
import Path from "./path";
import Home from "../../Pages/Home/Home";
import Infos from "../../Pages/Infos/infos";

function Rotas() {
    return(
        <Routes>
            <Route
                path={Path.HOME}
                element={<Home/>}
            />
            <Route
                path={Path.INFOS}
                element={<Infos/>}
            />
        </Routes>
    )
}

export default Rotas;