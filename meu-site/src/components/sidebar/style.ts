import styled from "styled-components";

export const Wrapper = styled.div<{ $isOpen: boolean }>`
    background-color: #111122;
    transition: width .4s ease-in-out;
    width: ${({ $isOpen }) => ($isOpen ? "300px" : "154px")};
    height: 100vh;

    position: fixed;
    top: 93px;
    left: 0;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    border-right: 2px #7B00FF solid;
    z-index: 100;
`

export const Container = styled.div`
    height: 100vh;

    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 0 auto;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const IconArrow = styled.div<{ $isOpen: boolean }>`
    cursor: pointer;
    margin: 100px 0 20px 25px;
    
    transition: transform .5s ease-in-out;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`

export const IconSelect = styled.a<{ $isOpen: boolean }>`
    cursor: pointer;
    background-color: #7B00FF;
    transform: scale(1.1);
    transition: padding .4s ease-in-out;
    padding: ${({ $isOpen }) => ($isOpen ? "2px 124px 2px 30px" : "0px 37px 0px 30px")};
    margin: 0 30px 20px 0;
    text-decoration: none;
    color: #FFFFFF;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    span{
        font-size: 20px;
        white-space: nowrap;
        transition: .5s ease-in-out;

        opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
        transform: ${({ $isOpen }) => ($isOpen ? "translateX(0)" : "translateX(30px)")};
        width: ${({ $isOpen }) => ($isOpen ? "auto" : "0")};
        overflow: hidden;
        pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};
    }
`

export const NavItem = styled.a<{ $isOpen: boolean }>`
    cursor: pointer;
    margin: 20px 0 30px 30px;
    text-decoration: none;
    color: #FFFFFF;
    transition: .5s ease-in-out;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    padding: ${({ $isOpen }) => ($isOpen ? "2px 115px 2px 30px" : "2px 37px 2px 30px")};
    margin: ${({ $isOpen }) => ($isOpen ? "0 104px 20px 0" : "0 30px 20px 0")};

    &:hover{
        background-color: #7B00FF;
        transform: scale(1.1);
    }

    span{
        font-size: 20px;
        white-space: nowrap;
        transition: .5s ease-in-out;

        opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
        transform: ${({ $isOpen }) => ($isOpen ? "translateX(0)" : "translateX(30px)")};
        width: ${({ $isOpen }) => ($isOpen ? "auto" : "0")};
        overflow: hidden;
        pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};
    }
`