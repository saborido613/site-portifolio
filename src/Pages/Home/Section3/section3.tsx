import Anitta_Hitmaker from '/img/Anitta - NU (feat. HITMAKER).png'
import Anitta_RyanSp from '/img/Anitta - VAI VENDO [feat. Mc Ryan SP].png'
import Arana_Livinho from '/img/AMOR É MENTIRA -  MC Livinho, DJ Arana e DJ Jeeh FDC.png'
import Beijo_Adolescente from '/img/Beijo_Adolescente_HBO_MAX.jpg'
import Deezer from '/img/Deezer_1.png'
import Hotwhells from '/img/Hotwhells_SBT_1.png'
import Negao_Original from '/img/MC Negão Original Espaço de Voz.png'
import Pedro_Sampaio from '/img/PEDRO SAMPAIO, MC Tato - JOIA RARA.png'
import Ze_Felipe from '/img/ZÉ FELIPE EP Coloca O Capacete.png'


function Section3() {
    return(
        <div className="flex
        flex-col
        w-full
        pt-10
        bg-black"
        id='section3'>
            <div className="font-bold text-2xl md:text-4xl text-center text-white ">
                <h1>O QUE EU FAÇO</h1>
            </div>

            <div className="grid grid-cols-2 pt-10 h-auto">
           
                <div className='flex 
                justify-center 
                relative 
                custom-after
                selection-item-image
                text-xs
                md:text-xl' id='beijo_adolescente'>
                    <img src={Beijo_Adolescente} alt="" />
                </div>
                <div className='flex 
                justify-center 
                relative 
                custom-after
                selection-item-image
                text-xs
                md:text-xl' id='ze_felipe'>
                    <img src={Ze_Felipe} alt="" />
                </div>
                <div className='flex 
                justify-center 
                relative 
                custom-after
                selection-item-image
                text-xs
                md:text-xl' id='negao_original'>
                    <img src={Negao_Original} alt="" />
                </div>
                <div className='flex 
                justify-center 
                relative 
                custom-after
                selection-item-image
                text-xs
                md:text-xl' id='deezer'>
                    <img src={Deezer} alt="" />
                </div>
                <div className='flex 
                justify-center 
                relative 
                custom-after
                selection-item-image
                text-xs
                md:text-xl' id='arana_livinho'>
                    <img src={Arana_Livinho} alt="" />
                </div>
                <div className='flex 
                justify-center 
                relative 
                custom-after
                selection-item-image
                text-xs
                md:text-xl' id='pedro_sampaio'>
                    <img src={Pedro_Sampaio} alt="" />
                </div>
                <div className='flex 
                justify-center 
                relative 
                custom-after
                selection-item-image
                text-xs
                md:text-xl' id='hotwhells'>
                    <img src={Hotwhells} alt="" />
                </div>
                <div className='flex 
                justify-center 
                relative 
                custom-after
                selection-item-image
                text-xs
                md:text-xl' id='anitta_hitmaker'>
                    <img src={Anitta_Hitmaker} alt="" />
                </div>
                <div className='flex 
                justify-center 
                relative 
                custom-after
                selection-item-image
                text-xs
                md:text-xl' id='anitta_ryan'>
                    <img src={Anitta_RyanSp} alt="" />
                </div>
            </div>
        </div>

    )
}

export default Section3;