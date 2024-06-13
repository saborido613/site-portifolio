import CafeRoyal from '/img/CAFE_ROYAL_1.png'
import CRZN from '/img/CORAZON_1.png'
import Globolay from '/img/GLOBOPLAY_1.png'
import Gullane from '/img/GULLANE_1.png'
import HM from '/img/HUNGRY_MAN_1.png'
import HypeBeast from '/img/HYPEBEAST_1.png'
import LoveFunk from '/img/LOVE_FUNK_1.png'
import Max from '/img/MAX_1.png'
import Netflix from '/img/NETFLIX_1.png'
import Hotwhells from '/img/HOT_WHELLS.png'
import iFood from '/img/ifood.png'
import PizzaHut from '/img/pizza_hut.png'
import Versão1 from '/img/Versão 1.png'
import Volkswagen from '/img/volkswagen_logo.png'
import Claro from '/img/claro_logo.png'
import Google from '/img/google_logo.png'
import Honda from '/img/honda_logo.png'
import IGC from '/img/igc_partners_logo.png'
import KLM from '/img/KLM_logo.png'
import O2 from '/img/o2_filmes_logo.png'
import Pedigree from '/img/pedigree_logo.png'
import Deezer from '/img/deezer.png'



function Section2() {
    return(
        <div id='section2' className="
        w-full
        bg-white">
            {/* <div className='text-center
                py-10
                px-24
                bg-black
                '>
                    <p className='text-2xl text-archivo font-bold text-white'>
                    Em todo o meu processo, o significado da narrativa periferica e toda sua singularidade são presentes e ecoam.
                    Me chamo Victória, e o nome artístico Vic Almeida. 
                    Formada em 2023 em Relações Públicas, sendo bolsista 100% na faculdade Belas Artes. 
                    Atuando nas áreas da produção desde 2016, oficializando a partir de 2022. Tendo o vídeo e a foto como áreas correlatas desde muito nova.
                    E também, a área de comunicação e sua complexidade como uma das minhas paixões!
                    </p>
            </div> */}

            <div className="text-center
            pt-20
            text-4xl
            font-bold
            text-black">
                <h2>EMPRESAS QUE ACREDITARAM NO MEU TRABALHO</h2>
            </div>

            <div className='grid
            md:grid-cols-3 
            lg:grid-cols-7 
            justify-center 
            place-items-stretch 
            gap-20 
            items-center 
            px-12 
            py-20' >
                <div className='flex justify-center'>
                    <img src={Netflix} alt=""  />
                </div>

                <div className='flex justify-center'>
                    <img src={Gullane} alt=""  />
                </div>

                <div className='flex justify-center'>
                    <img src={CRZN} alt=""  />
                </div>

                <div className='flex justify-center'>
                    <img src={Max} alt=""  />
                </div>


                <div className='flex justify-center'>
                    <img src={LoveFunk} alt="" />
                </div>

                <div className='flex justify-center'>
                    <img src={HypeBeast} alt="" />
                </div>

                <div className='flex justify-center'>
                    <img src={CafeRoyal} alt="" />
                </div>

                <div className='flex justify-center'>
                    <img src={Globolay} alt="" />
                </div>

                <div className='flex justify-center'>
                    <img src={HM} alt="" />
                </div>
                <div className='flex justify-center'>
                    <img src={Claro} alt="" />
                </div>
                <div className='flex justify-center'>
                    <img src={Deezer} alt="" />
                </div>
                <div className='flex justify-center'>
                    <img src={Google} alt="" />
                </div>
                <div className='flex justify-center'>
                    <img src={Honda} alt="" />
                </div>
                <div className='flex justify-center'>
                    <img src={IGC} alt="" />
                </div>
                <div className='flex justify-center'>
                    <img src={KLM} alt="" />
                </div>
                <div className='flex justify-center'>
                    <img src={O2} alt="" />
                </div>
                <div className='flex justify-center'>
                    <img src={Pedigree} alt="" />
                </div>
                <div className='flex justify-center'>
                    <img src={iFood} alt="" />
                </div>
                <div className='flex justify-center'>
                    <img src={PizzaHut} alt="" />
                </div>
                <div className='flex justify-center'>
                    <img src={Versão1} alt="" />
                </div>
                <div className='flex justify-center'>
                    <img src={Volkswagen} alt="" />
                </div>
            </div>
        </div>

    )
}

export default Section2;

                



            
            


            

            

