import { Link } from "react-router-dom";
import Path from "../../Infra/routes/path";

function SectionBiography() {
  return (
    <section className="section-biography">
      <div className="container-narrow">
        <Link to={Path.HOME} className="back-home-btn">
          <svg className="icon-back" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Voltar para Home
        </Link>

        <div className="bio-header">
          <span className="bio-tag">Quem Sou Eu</span>
          <h1 className="bio-main-title">Conexão, Arte, Cultura Periférica &amp; Audiovisual</h1>
        </div>

        <div className="bio-content">
          <p className="lead-text">
            Moradora de uma das maiores periferias de <span className="highlight-text">São Paulo</span>, Paraisópolis.
          </p>

          <p className="normal-text">
            Formada em Relações Públicas como <span className="highlight-text">bolsista 100%</span> pela prestigiada
            universidade Belas Artes, se desenvolve diariamente na área audiovisual onde atua ativamente em projetos de
            marcas, artistas e socioculturais nas periferias, com foco especial na arte e cinema. Seu objetivo de vida é
            amplificar cada vez mais os espaços e <span className="highlight-text">potencializar a periferia</span> de modo
            geral, <span className="highlight-text">artisticamente e socialmente</span>.
          </p>

          <p className="normal-text">
            É co-fundadora do <span className="highlight-text">Projeto Paracine</span>{" "}
            <a
              className="inline-link"
              href="https://www.instagram.com/para_cine?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
            >
              (@para_cine)
            </a>
            , que tem o nobre intuito de <span className="highlight-text">democratizar o acesso</span> ao audiovisual para
            jovens e adultos de todas as favelas de São Paulo através de aulas, workshops gratuitos e exibições de
            curtas-metragens <span className="highlight-text">desde 2021</span>, de forma 100% gratuita e inclusiva.
          </p>

          <p className="normal-text">
            Compartilha seus conhecimentos com frequência como <span className="highlight-text">palestrante</span> em
            unidades renomadas como: Belas Artes, ESPM, Fecap, Sesc, Senac, Fundação Casa, Fábricas de Cultura, eventos diversos e podcasts, visando construir
            espaços significativos de troca que abordem sobre os desafios e bastidores do <span className="highlight-text">mercado criativo</span>.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SectionBiography;
