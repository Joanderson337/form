import { CustomForm } from '@/components/CustomForm/customForm';
import { ContainerForm, ContainerHome, HeaderHome, Logo } from './styled';
import logoStalo from '@assets/logoStaloBranca.png';

export function Form() {
  return (
    <>
      <ContainerHome>
        <HeaderHome>
          <Logo src={logoStalo} alt="logo Stalo" />
        </HeaderHome>
        <ContainerForm>
          <CustomForm />
        </ContainerForm>
      </ContainerHome>
    </>
  );
}
