import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    font-family: 'Noto Sans', sans-serif;
}

.unselectable {
    -webkit-touch-callout: none; 
    -webkit-user-select: none;   
    -khtml-user-select: none;    
    -moz-user-select: none;      
    -ms-user-select: none;  
}
    
`


export default GlobalStyle