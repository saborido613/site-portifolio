import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import Rotas from "./Infra/routes/index.tsx";
import "./styles/main.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <Rotas />
  </HashRouter>,
);
