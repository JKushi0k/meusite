import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: #111122;
    width: 132px;
    height: 830px;

    display: fixed;
    justify-content: center;
    align-items: center;

    border-right: 2px #7B00FF solid
`

export const Container = styled.div`
    width: 132px;
    height: 1051px:

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    position: relative;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const IconArrow = styled.div`
    cursor: pointer;
    margin: 20px 0 30px 25px;
`

export const IconSelect = styled.a`
    cursor: pointer;
    background-color: #7B00FF;
    transform: scale(1.1);
    display: fixed;
    padding: 2px 37px 2px 30px;
    margin: 0 30px 20px 0;
    text-decoration: none;
    color: #FFFFFF;
`

export const NavIcons = styled.a`
    cursor: pointer;
    margin: 20px 0 30px 30px;
    text-decoration: none;
    color: #FFFFFF;
    transition: .5s ease-in-out;

    &:hover{
        background-color: #7B00FF;
        transform: scale(1.1);
        display: fixed;
        padding: 2px 37px 2px 30px;
        margin: 0 30px 20px 0;
    }
`