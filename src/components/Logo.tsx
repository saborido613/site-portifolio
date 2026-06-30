import LogoVicAlmeida from "/img/globo_branco.png";

interface LogoProps {
  className?: string;
}

function Logo({ className }: LogoProps) {
  return (
    <img src={LogoVicAlmeida} alt="Logo Vic Almeida" className={className} />
  )
}

export default Logo