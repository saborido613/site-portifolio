import { Route, Routes } from "react-router-dom";
import App from "../../App";
import Path from "./path";

function Rotas() {
  return (
    <Routes>
      <Route path={Path.INFOS} element={<App />} />
      <Route path={Path.HOME} element={<App />} />
    </Routes>
  );
}

export default Rotas;
