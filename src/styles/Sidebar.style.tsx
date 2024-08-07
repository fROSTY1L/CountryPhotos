import styled from "styled-components";

const SidebarWrap = styled.div`
    height: calc(100% - 45px);
    width: 250px; 
    transition: display 0.2s;
    border-right: 1px solid rgba(228, 231, 237, 1)
`

const InputWrap = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 6px;
`

export { SidebarWrap, InputWrap } 