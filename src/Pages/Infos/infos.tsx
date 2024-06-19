import Path from "../../Infra/routes/path";
import Nav from "../Componentes/Nav/nav";
import globoParaisopolis from "/img/globo_branco.png";
import CarrosselImagens from "./CarrosselImagens/carrosselImagens";

function Infos() {
  return (
    <div className="w-full h-full bg-black">
      <Nav color="text-white" link={Path.HOME} nome="Home" />
      <div className="pt-32 px-10 xl:px-96 text-white">
        <h1 className="font-medium text-center text-2xl lg:text-4xl">
          Conexão, Arte, Cultura Periférica & Audiovisual{" "}
        </h1>
      </div>

      <div className=" pt-10 px-10 xl:px-96 ">
        <p className="text-sm lg:text-xl text-white text-justify">
          <span className="text-gray-400">Victória Almeida</span>, 23 anos.
          Moradora de uma das maiores periferias de{" "}
          <span className="text-gray-400">São Paulo, Paraisópolis</span>.
          Formada em Relações Públicas como{" "}
          <span className="text-gray-400">bolsista 100%</span> pela universidade
          Belas Artes, se desenvolve diariamente na área audiovisual onde atua
          ativamente em projetos de marcas, artistas e socioculturais nas
          periferias, com foco na arte e cinema. Com o objetivo de vida de
          amplificar cada vez mais os espaços e{" "}
          <span className="text-gray-400">potencializar a periferia</span> de
          modo geral,{" "}
          <span className="text-gray-400">artisticamente e socialmente</span>.
        </p>

        <p className="mt-6 text-sm lg:text-xl text-white text-justify">
          Co-fundadora do{" "}
          <span className="text-gray-400">Projeto Paracine</span> (@para_cine),
          que tem o intuito de{" "}
          <span className="text-gray-400">democratizar o acesso</span> ao
          audiovisual para jovens e adultos de todas as favelas de São Paulo,
          com aulas, workshops e exibições de curtas-metragens,{" "}
          <span className="text-gray-400">desde 2021</span>.
        </p>

        <p className="mt-6 text-sm lg:text-xl text-white text-justify">
          Se destaca e leva seus conhecimentos com frequência{" "}
          <span className="text-gray-400">como palestrante</span> em unidades do
          Sesc, Senac, Fábricas de Cultura e Podcast’s, visando construir
          espaços de troca que sejam benéficos para a inserção de novos
          profissionais no{" "}
          <span className="text-gray-400">mercado criativo</span> e seus
          desafios.
        </p>
      </div>

      <CarrosselImagens />

      <div className="px-10 xl:px-96 text-white mt-12">
        <h1 className="font-medium text-2xl lg:text-4xl">Contatos</h1>
      </div>

      <div className="px-10 xl:px-96 text-white mt-8 flex flex-col gap-3">
        <h1 className="font-medium text-xl lg:text-3xl text-gray-400">
          Instagram
        </h1>
        <p className="fonte-personalizada md:text-lg">@vickkalmeida</p>
      </div>

      <div className="pt-10 px-10 xl:px-96 text-white flex flex-col gap-3">
        <h1 className="font-medium text-xl md:text-3xl text-gray-400">Email</h1>
        <p className="fonte-personalizada md:text-lg">
          prod.vicalmeida@gmail.com
        </p>
      </div>

      <div className="px-10 xl:px-96 py-10">
        <img src={globoParaisopolis} alt="" className="w-8 md:w-16" />
      </div>
    </div>
  );
}

export default Infos;
