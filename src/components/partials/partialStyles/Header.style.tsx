import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 20px 0;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.7);
    top: 0;
    z-index: 2;
`




export const ContainerNav = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
`

export const Logo = styled.span`
    font-size: 30px;
    margin-left: 20px;
    font-weight: bolder;
    color: whitesmoke;
`

export const Router = styled.li`
    display: block;
`

export const Link = styled.span`
    font-weight: bolder;
    color: #787878;
    font-size: 20px;
    &:hover{
        color: white;
        transition: 0.5s;
    }

    @media (max-width: 999px) {
        font-size: 17px;
    }
`

export const Nav = styled.nav`
    width: 100%;
`

export const Routers = styled.ul`
    display: flex;
    justify-content: space-around;
    width: 100%
`