import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
}

input, button {
    border: 0;
}

button {
    cursor: pointer;
}

#root {
    max-width: 1120px;
    height: 100vh;
    margin: 0 auto;
    background: #29292e;
    padding: 2rem;
}
`