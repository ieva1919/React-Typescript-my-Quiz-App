import styled, { createGlobalStyle } from 'styled-components'
import background from './img/background.jpg'

export const GlobalStyle = createGlobalStyle`

html {
    height: 100%;
}

body {
    background-image: url(${background});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
}

* {
    box-sizing: border-box;
    font-family: 'Catamaran', sans-serif;
}

`

export const Wrapper = styled.div`

    .background {
        width: 700px;
        background-color: #6D4C39;
        height: 700px;
        margin: 30px;
        padding: 40px;
        opacity: 0.8;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 10px;
    }

    > p {
        color: #fff;
    }

    .score {
        font-size: 2rem;
        margin: 0;
    }

    h1 {
        font-family: Fascinate Inline, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        background-image: linear-gradient(180deg, #fff, #72CCF0);
        background-size: 100%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
        filter: drop-shadow(2px 2px white);
        font-size: 70px;
        text-align: center;
        margin: 20px;
    }

    .start, .next {
        cursor: pointer;
        background-image: linear-gradient(180deg, #fff, #A67759);
        border: 2px solid white;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        height: 50px;
        padding: 10px 40px;
    }

    .start, button {
        width: 200px;
        margin: 10px; 
    }


`
