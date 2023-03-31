import styled from 'styled-components';

export const ContainerHome = styled.div`
  background-color: ${({ theme }) => theme.GRAY_300};
  height: 170vh;
`;

export const ContainerForm = styled.div`
  display: flex;
  justify-content: center;
`;

export const HeaderHome = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px;
`;

export const Logo = styled.img`
    width: 145px;
    height: 25px;
`;
