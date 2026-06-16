import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import VideoModal from "./components/VideoModal/VideoModal";
import { VideoModalProvider } from "./context/VideoModalContext";
import Path from "./Infra/routes/path";
import Home from "./Pages/Home/Home";
import Infos from "./Pages/Infos/infos";

function PageTransition() {
  const location = useLocation();
  const [visiblePath, setVisiblePath] = useState(location.pathname);
  const [activeFade, setActiveFade] = useState(true);

  useEffect(() => {
    if (location.pathname === visiblePath) return;

    setActiveFade(false);
    const timer = window.setTimeout(() => {
      setVisiblePath(location.pathname);
      window.scrollTo({ top: 0, behavior: "smooth" });
      requestAnimationFrame(() => setActiveFade(true));
    }, 400);

    return () => window.clearTimeout(timer);
  }, [location.pathname, visiblePath]);

  const isInfos = visiblePath === Path.INFOS;

  return (
    <>
      <div
        id="section-home"
        className={`page-section fade-in${!isInfos && activeFade ? " active-fade" : ""}`}
        style={{ display: isInfos ? "none" : "block" }}
      >
        <Home />
      </div>
      <div
        id="section-infos"
        className={`page-section${isInfos && activeFade ? " active-fade" : ""}`}
        style={{ display: isInfos ? "block" : "none" }}
      >
        <Infos />
      </div>
    </>
  );
}

function App() {
  return (
    <VideoModalProvider>
      <div className="ambient-glow glow-1" />
      <div className="ambient-glow glow-2" />
      <Navbar />
      <PageTransition />
      <VideoModal />
    </VideoModalProvider>
  );
}

export default App;
