import projects from "../../utils/projectContent";
import Infos from "../Infos/infos";
import LineContent from "./components/LineContent";

function Home() {
  return (
    <div className="w-full h-full bg-black">
      <section className="flex flex-col gap-3 py-10">
        <h1 className="text-white text-3xl font-bold text-center">
          Vic Almeida
        </h1>
        <h2 className="text-white text-2xl font-[300] text-center hover:text-gray-400 hover:transition-all hover:duration-300 hover:cursor-pointer hover:underline hover:decoration-red-500">
          <a href="#contatos">
            Contato
          </a>
        </h2>
      </section>
      {projects.map((project) => (
        <LineContent key={project.project} project={project} />
      ))}
      {/* <Footer /> */}
      <Infos />
    </div>
  );
}

export default Home;
