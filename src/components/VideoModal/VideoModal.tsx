import { useVideoModal } from "../../context/VideoModalContext";
import {
  getExternalPlatformLabel,
  getYouTubeId,
  isExternalPlatform,
  isLocalVideo,
} from "../../utils/videoPlayer";

function VideoPlayerContent({ url, title }: { url: string; title: string }) {
  const youtubeId = getYouTubeId(url);

  if (youtubeId) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&enablejsapi=1&rel=0&modestbranding=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  if (isLocalVideo(url)) {
    return (
      <video src={url} controls autoPlay>
        Seu navegador não suporta a tag de vídeo.
      </video>
    );
  }

  if (isExternalPlatform(url)) {
    const { platform, btnText } = getExternalPlatformLabel(url);
    return (
      <div
        className="iframe-fallback-wrapper"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0b0b10",
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <p style={{ color: "#9ca3af", fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          Este conteúdo é hospedado diretamente no <strong style={{ color: "#fff" }}>{platform}</strong>.
        </p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{ boxShadow: "0 10px 30px rgba(255,255,255,0.1)" }}
        >
          {btnText}
        </a>
      </div>
    );
  }

  return null;
}

function VideoModal() {
  const { isOpen, title, description, videoUrl, closeModal } = useVideoModal();

  return (
    <div
      id="video-modal"
      className={`video-modal-backdrop${isOpen ? " active" : ""}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
    >
      <button type="button" className="close-modal-btn" aria-label="Fechar Player" onClick={closeModal}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      <div className="video-modal-container">
        <div className="video-player-aspect" id="video-player-target">
          {isOpen && videoUrl ? <VideoPlayerContent url={videoUrl} title={title} /> : null}
        </div>
        <div className="video-modal-info" id="video-modal-info">
          <h3 className="modal-video-title" id="modal-video-title">
            {title}
          </h3>
          <p className="modal-video-desc" id="modal-video-desc">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoModal;
