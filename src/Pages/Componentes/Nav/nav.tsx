import { useNavigate } from "react-router-dom";
import Path from "../../../Infra/routes/path";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

interface NavProps {
    color?: string
    nome?: string
    link?: string
}

function Nav({color, nome, link}:NavProps) {
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
        items-center
        font-semibold`}>
          <div className='w-5 md:w-auto'>
              <h1 className="text-4xl">VIC ALMEIDA</h1>
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