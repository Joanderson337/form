import styled from 'styled-components';

export const ContainerHome = styled.div`
  display: flex;

  @media (max-width: 600px) {
    padding: 0 20px;
  }
`;

export const BgHome = styled.img`
  height: 100vh;
  width: 100%;
  max-width: 50%;

  @media (max-width: 1300px) {
    max-width: 30%;
  }

  @media (max-width: 980px) {
    display: none;
  }
`;

export const ContextHome = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 50%;

  background-color: ${({ theme }) => theme.WHITE_100};

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1300px) {
    max-width: 70%;
  }

  @media (max-width: 980px) {
    max-width: 100%;
  }
`;

export const ContextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  width: 100%;
  max-width: 485px;

  > button {
    width: 110px;
    height: 38px;
    border-radius: 6px;

    background-color: ${({ theme }) => theme.GREEN_100};
    color: ${({ theme }) => theme.WHITE_100};

    font-size: 15px;
    font-weight: bold;
  }

`;

export const LogoHome = styled.img`
  width: 100%;
  max-width: 150px;
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  > p {
    color: ${({ theme }) => theme.GREEN_100};
    font-size: 40px;
    font-weight: bold;
  }

  > span {
    color: ${({ theme }) => theme.GRAY_100};
    color: black;
    font-size: 15px;
    font-weight: bold;
  }

`;
