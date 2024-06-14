import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import logo from "/img/vic_almeida_logo.png";
import { useState } from "react";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

interface NavProps {
    color?: string
    nome?: string
    link?: string
    background?: string
}

function Nav({color, nome, link, background}:NavProps) {
    const navigate = useNavigate()
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
      setMenuOpen(!menuOpen)
    };

    return(
        <nav className={`flex
        fixed
        justify-between
        top-0
        pt-10
        px-8
        w-full
        z-10 
        ${color}
        ${background}
        items-center
        font-semibold`}>
          <div className=''>
              <img src={logo} alt="" className="h-5 md:h-7"/>
          </div>

          <div className='md:hidden'>
                <button onClick={toggleMenu}>
                    <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
                </button>
            </div>

          <div className='
            hidden
            md:flex
            gap-5  
            text-2xl
            justify-center
            items-center'>

            <div className="">
              <span onClick={()=>navigate(link!)}
              className='cursor-pointer'>{nome}</span>
            </div>

            <div className='flex gap-5 justify-end'>
              <a href="https://www.instagram.com/vickkalmeida/"><FontAwesomeIcon icon={faInstagram}/></a>
              <a href="https://br.linkedin.com/in/vict%C3%B3ria-almeida-a2b24a19b"><FontAwesomeIcon icon={faLinkedin}/></a>
            </div>

            </div>
            {menuOpen && (
              <div className='absolute top-16 right-0 w-full  flex flex-col items-end p-4 md:hidden'>
              <div className="mt-4 w-full text-right">
                  <span onClick={() => navigate(link!)} className='cursor-pointer text-xl'>{nome}</span>
              </div>

              <div className='flex flex-col gap-5 justify-start mt-4 w-full text-right'>
                  <a href="https://www.instagram.com/vickkalmeida/" className='block'><FontAwesomeIcon icon={faInstagram} /></a>
                  <a href="https://br.linkedin.com/in/vict%C3%B3ria-almeida-a2b24a19b" className='block'><FontAwesomeIcon icon={faLinkedin} /></a>
              </div>
          </div>
            
            
            )}

              
          
      </nav>
    )
}

export default Nav;