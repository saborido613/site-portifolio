import Path from "../../Infra/routes/path";
import Nav from "../Componentes/Nav/nav";
import globoParaisopolis from "/img/GLOBO_PARAISOPOLIS.png";
import para_cine from "/img/PARA_CINE.png";
import sesc from "/img/sesc.png";
import fabricas_de_cultura from "/img/FABRICAS_DE_CULTURA.png";
import expo_favela from "/img/Expo-Favela-Innovation-Brasil_RGB_logo-Negativo-110x50-12 (1).png";
import CarrosselImagens from "./CarrosselImagens/carrosselImagens";


function Infos() {
    
    return(
        <div className="w-full h-full bg-black">
            <Nav color="text-white" link={Path.HOME} nome="Home"/>
            <div className="pt-40 px-10 xl:px-96 text-white">
                <h1 className="font-bold text-2xl lg:text-4xl">AUDIOVISUAL & CULTURA SÃO </h1>
                <h1 className="font-bold text-2xl lg:text-4xl">AS MINHAS PAIXÕES</h1>
            </div>
            <div className=" pt-10 px-10 xl:px-96 text-black">
            <p className='lg:text-2xl text-white text-justify'>
                    Em todo o meu processo, o significado da narrativa periferica e toda sua singularidade são presentes e ecoam.
                    Me chamo Victória, e o nome artístico Vic Almeida. 
                    Formada em 2023 em Relações Públicas, sendo bolsista 100% na faculdade Belas Artes. 
                    Atuando nas áreas da produção desde 2016, oficializando a partir de 2022. Tendo o vídeo e a foto como áreas correlatas desde muito nova.
                    E também, a área de comunicação e sua complexidade como uma das minhas paixões!
                    </p>
            </div>
            <div className="pt-12 px-10 xl:px-96 text-white">
                <h1 className="font-extrabold text-xl md:text-2xl">prod.vicalmeida@gmail.com</h1>
            </div>
            <div className=" px-10 xl:px-96 pt-10">
                <img src={globoParaisopolis} alt="" className="w-16" />
            </div>

            {/* <div className="grid grid-cols-12 pt-10">
                <div className=" col-span-12 md:row-span-1 md:col-span-2 flex justify-center">
                    <img src={imagemVic3} alt="" />
                </div>
                <div className=" col-span-12 md:row-span-1 md:col-span-4 flex justify-center">
                    <img src={imagemVic2} alt="" />
                </div>
                <div className=" col-span-12 md:row-span-1 md:col-span-4 flex justify-center">
                    <img src={imagemVic5} alt="" />
                </div>
                <div className=" col-span-12 md:row-span-1 md:col-span-2 flex justify-center">
                    <img src={imagemVic1} alt="" />
                </div>
            </div>
            <div className="grid grid-cols-12">
                <div className=" col-span-12 md:row-span-1 md:col-span-4 flex justify-center">
                    <img src={imagemVic9} alt="" />
                </div>

                <div className=" col-span-12 md:row-span-1 md:col-span-3 flex justify-center">
                    <img src={imagemVic7} alt="" />
                </div>
                <div className=" col-span-12 md:row-span-1 md:col-span-2 flex justify-center">
                    <img src={imagemVic6} alt="" />
                </div>
                <div className=" col-span-12 md:row-span-1 md:col-span-3 flex justify-center">
                    <img src={imagemVic4} alt="" />
                </div>
            </div> */}

            <CarrosselImagens/>

            {/* <div className="flex gap-12 md:gap-40 items-center justify-center py-10 bg-white">
                <div>
                    <img src={sesc} alt="" />
                </div>
                <div>
                    <img src={para_cine} alt="" />
                </div>
                <div>
                    <img src={fabricas_de_cultura} alt="" />
                </div>
                <div>
                    <img src={expo_favela} alt="" />
                </div>

            </div> */}





        </div>
    )
}

export default Infos;