import styled from 'styled-components';

type ICustomInputContainerProps = {
  hasError?: boolean
}

export const CustomInputContainer = styled.input<ICustomInputContainerProps>`
  border: none;
  width: 100%;
  padding-right: 2rem;
  padding-left: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  border-radius: 1rem;

  border: ${(props) => (props.hasError ? '2px solid red' : '3px solid #b4d4e4')};

  &::placeholder {
    color: ${(props) =>
    props.hasError ? '2px solid red' : 'black'};
  }
  &:focus {
    outline: ${(props) =>
    props.hasError ? 'none' : '2px solid \'black\''};
  }

  @media (max-width: 700px) {
    &::placeholder {
    font-size: 1.19rem;
  }
  }

`;
