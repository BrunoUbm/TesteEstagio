import styled from 'styled-components'

export const footer = styled.footer`
    width: 100%;
    padding: 5px 0;
    display: flex;
    justify-content: end;
    position: fixed;
    bottom: 0;
    z-index: 2;
    background-color: transparent;
    backdrop-filter: blur(5px);
`

export const author = styled.span`
    color: white;
    margin-right: 20px;
`