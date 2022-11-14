import styled from "styled-components";

export const ContainerMessages = styled.div`
  display: flex;
  padding: 1rem;

  &::-webkit-scrollbar-track {
    background-color: #f4f4f4;
  }
  &::-webkit-scrollbar {
    width: 10px;
    background: #f5f5f5;
  }
  &::-webkit-scrollbar-thumb {
    background: #dad7d7;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 10px;
  }

  div {
    flex-direction: column;
    flex: 1;
    padding: 0 1rem 0 1rem;

    p {
      word-break: break-all;
      margin-top: 10px;
    }
  }

  button {
    background: transparent;
    border: 0;
    svg {
      color: #f0f0f5;
      transition: 0.2s;

      &:hover {
        color: #a8a8b3;
      }
    }
  }
`;
