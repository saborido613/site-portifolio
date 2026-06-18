import { portfolioProjects } from "../../data/content";
import { useVideoModal } from "../../context/VideoModalContext";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import PlayIcon from "../../components/PlayIcon";

function SectionPortfolio() {
  const { openModal } = useVideoModal();

  return (
    <section className="section-portfolio">
      <div className="container">
        <SectionHeader subtitle="Seleção de Projetos" title="Um Pouco do Que Eu Faço" dark />

        <div className="portfolio-grid">
          {portfolioProjects.map((project) => (
            <button
              key={project.modalTitle}
              type="button"
              className="portfolio-card play-project-btn"
              data-video-url={project.videoUrl}
              data-title={project.modalTitle}
              onClick={() =>
                openModal(project.videoUrl, project.modalTitle, project.category, project.playlistUrl)
              }
            >
              <div className="card-image-wrapper">
                <img src={project.img} alt={project.title} loading="lazy" />
                <div className="card-overlay">
                  <div className="play-badge">
                    <PlayIcon className="play-svg" />
                  </div>
                  <div className="card-info">
                    <span className="card-category">{project.category}</span>
                    <h3 className="card-project-title">{project.title}</h3>
                    <p className="card-artist">{project.artist}</p>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SectionPortfolio;
