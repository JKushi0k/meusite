import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: #241868;
    width: 975px;
    height: 422px;

    display: flex;
    justify-content: center;
    align-items: center;

    border: 2px #FFFFFF solid;
    border-radius: 50px;
`

export const Container = styled.div`
    background-color: #241868;
    width: 975px;
    height: 422px;
    max-height: 422px;
    overflow-y: auto;

    display: flex;
    justify-content: center;
    align-items: start;

    border: 2px #FFFFFF solid;
    border-radius: 50px;
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

export const SugesTitle = styled.p`
    font-size: 50px;
    color: #FFFFFF

    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 10px;
`

export const Barra = styled.input`
    background-color: #111122;
    width: 709px;
    height: 45px;
    color: #ffffff;
    font-size: 24px;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-right: 20px;
    padding-left: 8px;

    border: 2px #FFFFFF solid;
    border-radius: 50px; 
`

export const BarraTwo = styled.input`
    background-color: transparent;
    width: 600px;
    height: 45px;
    color: #ffffff;
    font-size: 24px;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-right: 20px;
    padding-left: 8px;

    border-bottom: 2px #FFFFFF solid;
    border-top: none;
    border-left: none;
    border-right: none;
`

export const Button = styled.button`
    background-color: #686DE0;
    width: 122px;
    height: 45px;
    color: #FFFFFF;
    font-size: 20px;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    border-radius: 8px;
    transition: .3s ease-in-out;

    &:hover{
        width: 140px;
        height: 60px;
    }
`

export const ButtonTwo = styled.button`
    background-color: transparent;
    width: 122px;
    height: 45px;
    color: #FFFFFF;
    font-size: 20px;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    border: 2px #FFFFFF solid;
    border-radius: 8px;
    transition: .3s ease-in-out;

    &:hover{
        background-color: #686DE0;
    }
`

export const InputContainer = styled.div`
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;    
`

export const Textarea = styled.textarea`
    flex: 1;
    padding: 1rem;
    border-radius: 10px;
    border: 1px solid #ccc;
    resize: none;
    height: 80px;
    font-size: 1rem;
`

export const Comentario = styled.div`
    width: 900px;
    padding: 12px;
    margin-bottom: 10px;
    background-color: transparent;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,10);
`

export const ComentarioTwo = styled.div`
    width: 800px;
    padding: 12px;
    margin-bottom: 10px;
    background-color: transparent;
    border-bottom: 2px #FFFFFF solid;
`

export const Foto = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 12px;
    align-self: flex-start;
`

export const Conteudo = styled.div`
    flex: 1;
`

export const Nome = styled.div`
    font-weight: bold;
`

export const Texto = styled.div`
    margin: 0.3rem 0;
`

export const Acoes = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    margin-top: 0.5rem;
    width: 840px;
`

export const Acao = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    color: #fff;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    gap: 5px;

    &:hover {
        color: #444;
    }
`

export const AcoesTwo = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    margin-top: 0.5rem;
    width: 750px;
`

export const AcaoTwo = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    color: #fff;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    gap: 5px;

    &:hover {
        color: #444;
    }
`