import styled from "styled-components";

export const Header = styled.header`
  @media (max-width: 690px) {
    flex-direction: column;
  }
  @media (max-width: 418px) {
    h1 {
      flex-direction: column;
    }
  }
  @media (max-width: 450px) {
    div {
      margin-top: 50px;
      margin-left: 0;
      padding: 0.2rem;

      input {
        width: 100%;
      }
    }
  }

  width: 100%;
  display: flex;
  padding-right: 4rem;
  justify-content: space-between;
  color: #fff;

  h1 {
    margin-top: 20px;
    margin-left: 20px;
    font-size: 50px;
    font-weight: 400;
    display: flex;
    svg {
      margin-right: 50px;
    }
  }
  form {
    div {
      margin-top: 20px;
      border-radius: 5px;
      background: #fff;
      display: flex;
      padding: 1rem;
      margin-left: 20px;

      svg {
        color: #000;
      }

      input {
        border: 0;
        outline: 0;
        font-size: 16px;
        margin-left: 10px;
      }
    }
  }
`;
