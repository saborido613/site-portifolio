import { Link } from "react-router-dom";
import globoParaisopolis from "/globo_branco.png";
import logo from "/img/vic_almeida_logo.png";

function Infos() {
  return (
      // {/* <Nav color="text-white" link={Path.HOME} nome="Home" />
      // <div className="pt-32 px-10 xl:px-96 text-white">
      //   <h1 className="font-medium text-center text-2xl lg:text-4xl">
      //     Conexão, Arte, Cultura Periférica & Audiovisual{" "}
      //   </h1>
      // </div>

      // <div className=" pt-10 px-10 xl:px-96 ">
      //   <p className="text-sm lg:text-xl text-white text-justify">
      //     <span className="text-gray-400">Victória Almeida</span>, 23 anos.
      //     Moradora de uma das maiores periferias de{" "}
      //     <span className="text-gray-400">São Paulo, Paraisópolis</span>.
      //     Formada em Relações Públicas como{" "}
      //     <span className="text-gray-400">bolsista 100%</span> pela universidade
      //     Belas Artes, se desenvolve diariamente na área audiovisual onde atua
      //     ativamente em projetos de marcas, artistas e socioculturais nas
      //     periferias, com foco na arte e cinema. Com o objetivo de vida de
      //     amplificar cada vez mais os espaços e{" "}
      //     <span className="text-gray-400">potencializar a periferia</span> de
      //     modo geral,{" "}
      //     <span className="text-gray-400">artisticamente e socialmente</span>.
      //   </p>

      //   <p className="mt-6 text-sm lg:text-xl text-white text-justify">
      //     Co-fundadora do{" "}
      //     <span className="text-gray-400">Projeto Paracine</span>{" "}
      //     <a href="https://www.instagram.com/para_cine?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
      //       (@para_cine)
      //     </a>
      //     , que tem o intuito de{" "}
      //     <span className="text-gray-400">democratizar o acesso</span> ao
      //     audiovisual para jovens e adultos de todas as favelas de São Paulo,
      //     com aulas, workshops e exibições de curtas-metragens,{" "}
      //     <span className="text-gray-400">desde 2021</span>.
      //   </p>

      //   <p className="mt-6 text-sm lg:text-xl text-white text-justify">
      //     Se destaca e leva seus conhecimentos com frequência{" "}
      //     <span className="text-gray-400">como palestrante</span> em unidades do
      //     Sesc, Senac, Fábricas de Cultura e Podcast’s, visando construir
      //     espaços de troca que sejam benéficos para a inserção de novos
      //     profissionais no{" "}
      //     <span className="text-gray-400">mercado criativo</span> e seus
      //     desafios.
      //   </p>
      // </div>

      // <CarrosselImagens /> */}

      <section className="w-full flex flex-col gap-3 mt-10" id="contatos">
        <div className="px-10 text-white flex flex-col gap-3" id="instagram">
          <h1 className="font-medium text-xl lg:text-3xl text-gray-400">
            Instagram
          </h1>
          <Link to="https://www.instagram.com/vicalmeidav" target="_blank">
            <p className="fonte-personalizada md:text-lg
            hover:text-gray-400 hover:transition-all hover:duration-300 hover:cursor-pointer hover:underline hover:decoration-red-500">
              @vicalmeidav
            </p>
          </Link>
        </div>

        <div className="px-10 text-white flex flex-col gap-3" id="email">
          <h1 className="font-medium text-xl md:text-3xl text-gray-400">Escreva-me</h1>
          <p className="fonte-personalizada md:text-lg
          hover:text-gray-400 hover:transition-all hover:duration-300 hover:cursor-pointer hover:underline hover:decoration-red-500">
            prod.vicalmeida@gmail.com
          </p>
        </div>

        <div className="px-10 py-10 flex items-center gap-3" id="globo-logo">
          <img src={globoParaisopolis} alt="Globo Vic Almeida Logo" className="w-8 md:w-16" />
          <img src={logo} alt="Vic Almeida Logo" className="max-w-[10rem] md:max-w-[14rem] md:h-10" />
        </div>
      </section>
  );
}

export default Infos;
