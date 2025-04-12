import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height : 91px;

    display: flex;
    justify-content: space-between;
    align-items: center;
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

export const Wrapper = styled.div`
    background-color: #202035;
    width: 100%
    height: 91px:

    display: flex;
    justify-content: center;
    align-items: center;

    border-bottom: 2px #FFFFFF solid
`

export const Img = styled.img`
    width: 63px;
    height: 63px;
    border-radius: 50%;
    border: 2px #FF00FB solid;

    margin-left: 5px;
    margin-right: 10px;

    cursor: pointer;
`

export const MenuRight = styled.a`
    font-style: normal;
    font-size: 24px;
    line-height: 25px;
    color: #00B2FF;
    margin-right: 12px;
    margin-bottom: 30px;
    text-decoration: none;
`

export const Menu = styled.a`
    font-style: normal;
    font-size: 24px
    line-height: 25px;
    color: #ffffff;
    margin-right: 12px;
    text-decoration: none
`

export const UserPicture = styled.div`
    cursor: pointer;
    margin-right: 10px;
`