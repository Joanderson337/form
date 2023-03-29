import { BgHome, ContainerHome, ContainerTitle, ContextContainer, ContextHome, LogoHome } from './styled';
import bgHome from '@assets/bgHome.png';
import logoStalo from '@assets/logoStalo.png';
import { useNavigate } from 'react-router-dom';

export function Home() {

  const navigate = useNavigate();

  function handleForm(){
    navigate('/form');
  }


  return (
    <ContainerHome>

      <BgHome src={bgHome} />

      <ContextHome>
        <ContextContainer>
          <LogoHome  src={logoStalo}  />

          <ContainerTitle>
            <p>Bem-vindo! É um prazer ter você aqui.</p>
            <span>Briefing de customização e cadastro no subadquirente parceiro.</span>
          </ContainerTitle>

          <button onClick={handleForm} >Iniciar</button>
        </ContextContainer>
      </ContextHome>


    </ContainerHome>
  );
}
