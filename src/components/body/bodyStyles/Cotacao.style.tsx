import styled from 'styled-components';


export const body = styled.div`
    margin-top: 150px;
`

export const search = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
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

export const form = styled.div`
    display: flex;
    flex-direction: row;
    margin: 30px auto;
    align-items: center;
    width: 50%;

    @media (max-width: 999px) {
        width: 90%;
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

export const main = styled.main`
    width: 100%;
    margin: 0 auto;
    margin-bottom: 150px;
    display: flex;
    background-color: rgba(0, 0, 0, 0.7);
    @media (max-width: 999px) {
        flex-direction: column;
    }
`

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 100vh;
    z-index: 1;
`

export const Result = styled.p`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 10px;
    text-align: center;
    flex-direction: column;
    font-size: 20px;
    color: white;
    background-color: rgba(0, 0, 0, 0.7);
    width: 300px;
    height: 300px;
    margin: 0 auto;
    border-radius: 10px;

    @media (max-width: 999px) {
        width: 70%;
    }
`

export const Span = styled.span`
    text-align: center;
    color: #00e689;
    font-weight: bolder;
    font-size: 25px;
    margin-bottom: 20px;
`