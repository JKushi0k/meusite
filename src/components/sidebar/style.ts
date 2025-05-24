import styled from "styled-components";

export const Wrapper = styled.div<{ isOpen: boolean }>`
    background-color: #111122;
    transition: width .5s ease-in-out;
    width: ${({ isOpen }) => (isOpen ? "300px" : "154px")};
    height: 89.9vh;

    display: fixed;
    justify-content: center;
    align-items: center;

    border-right: 2px #7B00FF solid
`

export const Container = styled.div`
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

export const IconArrow = styled.div<{ isOpen: boolean }>`
    cursor: pointer;
    margin: 20px 0 30px 25px;
    transition: transform .5s ease-in-out;

    transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`

export const IconSelect = styled.a<{ isOpen: boolean }>`
    cursor: pointer;
    background-color: #7B00FF;
    transform: scale(1.1);
    display: fixed;
    transition: .5s ease-in-out;
    padding: ${({ isOpen }) => (isOpen ? "2px 115px 2px 30px" : "2px 37px 2px 30px")};
    margin: ${({ isOpen }) => (isOpen ? "0 115px 20px 0" : "0 30px 20px 0")};
    text-decoration: none;
    color: #FFFFFF;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    span{
        front-size: 20px;
        white-space: nowrap;
        transition: .5s ease-in-out;

        opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
        transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(30px)")};
        width: ${({ isOpen }) => (isOpen ? "auto" : "0")};
        overflow: hidden;
        pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
    }
`

export const NavVideo = styled.a<{ isOpen: boolean }>`
    cursor: pointer;
    margin: 20px 0 30px 30px;
    text-decoration: none;
    color: #FFFFFF;
    transition: .5s ease-in-out;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    &:hover{
        background-color: #7B00FF;
        transform: scale(1.1);
        display: fixed;
        padding: ${({ isOpen }) => (isOpen ? "2px 104px 2px 30px" : "2px 37px 2px 30px")};
        margin: ${({ isOpen }) => (isOpen ? "0 104px 20px 0" : "0 30px 20px 0")};
    }

    span{
        front-size: 20px;
        white-space: nowrap;
        transition: .5s ease-in-out;

        opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
        transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(30px)")};
        width: ${({ isOpen }) => (isOpen ? "auto" : "0")};
        overflow: hidden;
        pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
    }
`

export const NavShorts = styled.a<{ isOpen: boolean }>`
    cursor: pointer;
    margin: 20px 0 30px 30px;
    text-decoration: none;
    color: #FFFFFF;
    transition: .5s ease-in-out;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    &:hover{
        background-color: #7B00FF;
        transform: scale(1.1);
        display: fixed;
        padding: ${({ isOpen }) => (isOpen ? "2px 100px 2px 30px" : "2px 37px 2px 30px")};
        margin: ${({ isOpen }) => (isOpen ? "0 100px 20px 0" : "0 30px 20px 0")};
    }

    span{
        front-size: 20px;
        white-space: nowrap;
        transition: .5s ease-in-out;

        opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
        transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(30px)")};
        width: ${({ isOpen }) => (isOpen ? "auto" : "0")};
        overflow: hidden;
        pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
    }
`

export const NavCrono = styled.a<{ isOpen: boolean }>`
    cursor: pointer;
    margin: 20px 0 30px 30px;
    text-decoration: none;
    color: #FFFFFF;
    transition: .5s ease-in-out;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    &:hover{
        background-color: #7B00FF;
        transform: scale(1.1);
        display: fixed;
        padding: ${({ isOpen }) => (isOpen ? "2px 62px 2px 30px" : "2px 37px 2px 30px")};
        margin: ${({ isOpen }) => (isOpen ? "0 62px 20px 0" : "0 30px 20px 0")};
    }

    span{
        front-size: 20px;
        white-space: nowrap;
        transition: .5s ease-in-out;

        opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
        transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(30px)")};
        width: ${({ isOpen }) => (isOpen ? "auto" : "0")};
        overflow: hidden;
        pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
    }
`