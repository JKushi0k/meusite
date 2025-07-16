import styled from "styled-components";

interface ListItemProps {
    $status: 'atingida' | 'atual' | 'futura'
}

export const Wrapper = styled.div`
    background-color: #241868;
    width: 469px;
    height: 422px;

    display: flex;
    justify-content: center;
    align-items: center;

    border: 2px #FFFFFF solid;
    border-radius: 10%;
`

export const Container = styled.div`
    width: 100%;
    max-width: 469px;
    height: 422px;

    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 10%;

    & > div:nth-child(2) {
        display: flex;
        flex-direction: row;
        gap: 40px;
    }
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

export const ListTitle = styled.p`
    font-size: 50px;
    color: #FFFFFF

    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 10px;
`

export const ListText = styled.p`
    font-size: 35px;
    color: #fff;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #000;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const ListItem = styled.li<ListItemProps>`
    color: ${({ $status }) =>
    $status === 'atingida' ? 'green' :
    $status === 'atual' ? 'dodgerblue' :
    'red'};
    font-size: 24px;
    margin-bottom: 20px;
`