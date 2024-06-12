import { useNavigate } from "react-router-dom";
import Path from "../../../Infra/routes/path";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import logo from "/img/vic_almeida_logo.png";

interface NavProps {
    color?: string
    nome?: string
    link?: string
    background?: string
}

function Nav({color, nome, link, background}:NavProps) {
    const navigate = useNavigate()
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
              {/* <h1 className="text-4xl font-extrabold">VIC ALMEIDA</h1> */}
              <img src={logo} alt="" className="h-7"/>
          </div>

          <div className='md:flex
            gap-5  
            text-2xl
            justify-center
            items-center'>

            <div>
              <span onClick={()=>navigate(link!)}
              className='cursor-pointer'>{nome}</span>
            </div>

            <div className='flex gap-5 justify-end'>
              <a href="https://www.instagram.com/vickkalmeida/"><FontAwesomeIcon icon={faInstagram}/></a>
              <a href="https://br.linkedin.com/in/vict%C3%B3ria-almeida-a2b24a19b"><FontAwesomeIcon icon={faLinkedin}/></a>
            </div>

              
          </div>
      </nav>
    )
}

export default Nav;