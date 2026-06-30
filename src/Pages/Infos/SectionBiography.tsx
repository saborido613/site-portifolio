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
          <h1 className="bio-main-title">Produção, Criatividade e Gestão</h1>
        </div>

        <div className="bio-content">
          <p className="lead-text">
            Moradora de uma das maiores periferias de São Paulo, Paraisópolis.
          </p>

          <p className="normal-text">
          Formada em Relações Públicas como bolsista 100% pela universidade Belas Artes, se desenvolve diariamente na área audiovisual onde atua ativamente em projetos de marcas, artistas e socioculturais, com foco especial na arte e audiovisual. 
          </p>

          <p className="normal-text">
          Um de seus objetivos é amplificar cada vez mais os espaços e potencializar a periferia de modo geral, artisticamente e socialmente.
          </p>

          <p className="normal-text">
          É co-fundadora do Projeto Paracine (@para_cine), que tem o intuito de democratizar o acesso ao audiovisual para jovens e adultos de todas as favelas de São Paulo, de forma 100% gratuita.
          </p>

          <p className="normal-text">
          Compartilha seus conhecimentos com frequência como palestrante em unidades renomadas como: Belas Artes, ESPM, Fecap, Sesc, Senac, Fundação Casa, Fábricas de Cultura, eventos diversos e podcasts, visando construir espaços significativos de troca que abordem sobre os desafios e bastidores do mercado criativo.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SectionBiography;
