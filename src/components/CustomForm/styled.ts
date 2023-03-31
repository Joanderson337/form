import styled from 'styled-components';

export const Form = styled.form``;

export const ContextoStep = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100rem;
`;

export const ConatinerStep = styled.div`
  padding: 20px 60px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.WHITE_900};


  width: 920px;

  @media (max-width: 980px) {
    width: 620px;
  }

  @media (max-width: 700px) {
    width: 320px;
    padding: 20px ;
  }
`;

export const ContentTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  > h1 {
    text-align: center;
    color: ${({ theme }) => theme.GREEN_100};
    font-size: 40px;
    font-weight: 700;
  }

  > p {
    margin-bottom: 40px;
    color: ${({ theme }) => theme.VIOLET_100};
    font-size: 16px;
    font-weight: 500;
  }

  @media (max-width: 700px) {
    h1 {
      font-size: 25px;
    }
    p {
      font-size: 12px;
      margin-bottom: 20px;
    }
  }
`;

export const ContentInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;

  > label {
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.GRAY_200};
  }

  > p {
    color: ${({ theme }) => theme.RED_100};
  }

  @media (max-width: 700px) {
    label {
      font-size: 12px;
    }

    p{
      font-size: 12px;
    }
  }
`;

export const ContentBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  margin-top: 40px;

  @media (max-width: 700px) {
    justify-content: center;
    margin-top: 30px;
  }
`;

export const Button = styled.button`
  width: 110px;
  height: 38px;
  border-radius: 6px;

  background-color: ${({ theme }) => theme.GREEN_100};
  color: ${({ theme }) => theme.WHITE_100};

  font-size: 15px;
  font-weight: bold;

  @media (max-width: 700px) {
    width: 100px;
    height: 30px;
    font-size: 14px;
  }
`;
