import { Link } from "react-router-dom";

interface ProjectItem {
  project: string;
  thumbnail?: string;
  marca: string;
  title: string;
  type: string;
  functions: string;
  videos: VideoItem[];
}

interface VideoItem {
  src: string;
  type: string;
}

function LineContent({ project }: { project: ProjectItem }) {
  return (
    <div className="w-full h-auto px-4 flex gap-4 text-white items-center justify-center relative" id="line-content" >
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-10
        md:static md:flex md:flex-col md:items-end md:justify-end md:w-[33.33%]">
        <h1 className="text-2xl font-bold text-end">{project.marca}</h1>
        <h1 className="text-2xl whitespace-nowrap">{project.title}</h1>
      </div>
      <div className={`grid grid-cols-${project.videos.length} w-full md:w-[90%] opacity-40 md:opacity-100`}>
        {
          project.videos.map((video: VideoItem, index: number) => (
            <div key={index} className="hover:border-red-500 hover:border-b-2 hover:cursor-pointer">
              {
                video.type !== "video/mp4" ? (
                  <Link to={video.src}>
                    <img src={project.thumbnail} alt={`imagem do projeto ${project.title}`} className="w-full h-[12rem] object-cover" />
                  </Link>
                ) : (
                  <video className="w-full h-[12rem] object-cover" autoPlay muted loop playsInline>
                    <source src={video.src} type={video.type} />
                    Your browser does not support the video tag.
                  </video>
                )
              }
            </div>
          ))
        }
      </div>
      <div className="hidden md:flex md:flex-col md:w-[33.33%]">
        <h1 className="text-2xl font-bold whitespace-nowrap">{project.type}</h1>
        <h1 className="text-2xl whitespace-nowrap">{project.functions}</h1>
      </div>
    </div>
  )
}

export default LineContent