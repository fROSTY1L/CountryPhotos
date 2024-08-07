import styled from "styled-components";

const HeaderWrap = styled.div`
    position: relative;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 45px;
    font-size: clamp(1rem, 2.5vw, 20px);
    font-weight: 900;
    color: rgba(96, 98, 102, 1);
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
    z-index: 1;

` 
const MenuButton = styled.div`
    position: absolute; 
    left: 1vw; 
    top: 16px;
    z-index: 2;
`

const HeaderTitle = styled.div`

`

export {HeaderWrap, HeaderTitle, MenuButton}