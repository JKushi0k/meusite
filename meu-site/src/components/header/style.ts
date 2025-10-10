import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: #202035;
    width: 100vw;
    height: 10vh:

    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    border-bottom: 2px #FFFFFF solid;
`

export const Container = styled.div`
    background-color: #202035;
    width: 100vw;
    height: 10.1vh;

    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;

    border-bottom: 2px #FFFFFF solid;
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

export const Img = styled.img`
    width: 63px;
    height: 63px;
    border-radius: 50%;
    border: 2px #FF00FB solid;

    margin-left: 5px;
    margin-right: 10px;
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

export const UserPicture = styled.div`
    cursor: pointer;
    margin-right: 10px;
`

export const PictureDiv = styled.div`
    width: 150px;
    height: auto;
    position: absolute;
    top: 00%;
    right: 100%;
    margin-right: 10px;
    padding: 10px;

    background-color: #000000;
    color: #FFFFFF;
    border-radius: 20%;
    border: #9900FF 3px solid;
`

export const PictureLetter = styled.a`
    font-style: normal;
    font-size: 24px;
    line-height: 25px;
    color: #FFFFFF;
    margin-bottom: 30px;
    text-decoration: none;
    transition: 0.5s ease-in-out;

    &:hover {
        color: #00B2FF;
    }
`