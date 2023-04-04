import {
  BgSuccess,
  ContainerSuccess,
  ContainerTitle,
  ContextContainer,
  ContextSuccess,
  LogoSuccess
} from './styled';
import bgHome from '@assets/bgHome.png';
import logoStalo from '@assets/logoStalo.png';
import { useNavigate } from 'react-router-dom';

export function Success() {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/');
  };

  return (
    <ContainerSuccess>
      <BgSuccess src={bgHome} />

      <ContextSuccess>
        <ContextContainer>
          <LogoSuccess src={logoStalo} alt="logo Stalo" />

          <ContainerTitle>
            <p>Dados capturado com sucesso, aguarde contato por e-mail.</p>
          </ContainerTitle>

          <button onClick={handleHome}>Enviar novo formulário</button>
        </ContextContainer>
      </ContextSuccess>
    </ContainerSuccess>
  );
}
