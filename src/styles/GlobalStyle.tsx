import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import '~antd/dist/antd.css';

body {
    margin: 0;
    padding: 0;
    font-family: 'Noto Sans', sans-serif;
    box-sizing:border-box;
}
.App {
  width: 100%;
  height: 100vh;
}
.unselectable {
    -webkit-touch-callout: none; 
    -webkit-user-select: none;   
    -khtml-user-select: none;    
    -moz-user-select: none;      
    -ms-user-select: none;  
}

.section {
    scrollbar-width: thin;
}

.menu-container {
  height: calc(100vh - 90px); 
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #888 #f1f1f1;
}

.menu-container::-webkit-scrollbar {
  width: 8px;
}

.menu-container::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.menu-container::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 10px;
  border: 2px solid #f1f1f1;
}

.menu-container::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}

`


export default GlobalStyle