import styled from "styled-components";



export const Container = styled.main`

@media (max-width: 800px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}

@media (max-width: 700px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}

@media (max-width: 670px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}

@media (max-width: 512px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}

@media (max-width: 538px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}

@media (max-width: 530px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: space-between;
}

@media (max-width: 400px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 375px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
}

max-width: 100%;
margin-top: 150px;

display: grid;
grid-template-columns: repeat(5, 1fr);

a {
    max-width: 150px;
    margin-top: 40px;
    transition: filter 0.4s;
    background: #f0f0f5;
    border-radius: 5px;
    text-decoration: none;
    color: #000000;

    &:hover {
    filter: brightness(0.9);
    }

    img {
    max-width: inherit;
    border-radius: 5px;
    }

    p {
        margin-top: 10px;
    }
}
`