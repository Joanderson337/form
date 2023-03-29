import { ReactNode } from 'react';
import { ContainerButton } from './styled';

interface IButton {
  children: ReactNode
}

export function Button({children}: IButton){
  return(
    <ContainerButton data-testid="button">
      {children}
    </ContainerButton>
  );
}
