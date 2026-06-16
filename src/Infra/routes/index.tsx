import { Navigate, Route, Routes } from "react-router-dom";
import App from "../../App";
import Path from "./path";

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={Path.HOME} replace />} />
      <Route path={Path.HOME} element={<App />} />
      <Route path={Path.INFOS} element={<App />} />
    </Routes>
  );
}

export default Rotas;
