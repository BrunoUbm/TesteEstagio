import styled from 'styled-components';


export const Body = styled.div`
    margin-top: 150px;
`

export const main = styled.main`
    margin-bottom: 200px;
`

export const Form = styled.div`
    margin-top: 30px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Main = styled.div`
    display: flex;
    flex-direction: row;
    margin: 30px auto;
    align-items: center;
    width: 50%;

    @media (max-width: 999px) {
        width: 90%;
    }
`

export const Type = styled.h1`
    font-size: 40px;
    font-weight: bolder;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: white;

    @media (max-width: 999px) {
        font-size: 30px;
    }
`

export const Inp = styled.input`
    width: 100%;
    padding: 10px 10px;
    font-size: 20px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
`

export const Btn = styled.button`
    font-size: 20px;
    padding: 12px;
    border: none;
    background-color: rgba(0, 0, 0, 0.7);
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    color: white;
`

export const Socios = styled.div`
    overflow-x: auto;
    width: 90%;
    display: flex;
    margin: 50px auto;
    justify-content: center;

    @media (max-width: 999px) {
        width: 100%;
    }
`

export const Table = styled.table`
    background-color: #1c2b37;
    border-radius: 5px;
    font-size: 15px;
    padding: 5px 0;
    width: 100%;
`

export const HdrTable = styled.tr`
    color: #d6d6d6;
`

export const HrdName = styled.td`
    font-size: 17.5px;
    padding: 0 10px;
    text-align: center;
    padding: 10px 0;
`

export const td = styled.td`
    color: #717171;
    text-align: center;
    padding: 30px 0;

`


export const Infos = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

export const About = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    padding: 30px;
    border-radius: 5px;
    margin: 30px;
    background-color: #1c2b37;

    @media (max-width: 999px) {
        width: 90%;
        margin: 30px 0;
    }
`

export const Address = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    padding: 30px;
    border-radius: 5px;
    margin: 30px;
    background-color: #1c2b37;

    @media (max-width: 999px) {
        width: 90%;
        margin: 30px 0;
    }
`

export const Height = styled.footer`
    height: 500px;
`

export const Empresa = styled.h1`
    font-size: 25px;
    font-weight: bolder;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: white;
`

export const padding = styled.div`
    width: 5px;
    height: 13px;
    margin-left: 10px;
    margin-right: 5px;
    background-color: #6a6a6a;
`

export const att = styled.p`
    color: #6a6a6a;
    margin-top: 15px;
    margin-bottom: 30px;
    font-size: 13px;
    display: flex;
`

export const geral = styled.table`
    margin: 20px 0;
`
export const txtGeral = styled.td`
    text-align: center;
    font-size: 17px;
    padding: 10px 0;
    color: #cdcdcd;
`

export const HdrGeral = styled.tr`
    text-align: center;
`

export const GeralName = styled.td`
    font-weight: bolder;
    font-size: 23px;
    color: #ebebeb;
`