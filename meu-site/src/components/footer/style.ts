import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100vw;
    height: 10vh:

    display: flex;
    justify-content: center;
    align-items: center;
    margin: 6.7rem 0 0 0;
`

export const Container = styled.div`
    background-color: #202035;
    width: 91.4vw;
    height: 13.8vh;

    display: flex;
    justify-content: start;
    align-items: start;
    margin: 0 auto;
    padding-left: 10rem;
    position: relative;

    border-top: 2px #FFFFFF solid;
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

export const SocialIcon = styled.a`
    margin-right: 1rem;
    margin-top: 1rem;
    text-decoration: none;
    cursor: pointer;
    color: #fff;
    transition: 0.5s ease-in-out;

    &:hover {
        color: #00B2FF;
    }
`

export const SocialText = styled.p`
    font-size: 1.5rem;
    position: absolute;
    bottom: 0rem;
`