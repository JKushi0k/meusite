import React, { useEffect, useRef } from "react";
import Logo from "../../assets/logo.png";

import { FaUser } from "react-icons/fa";
import { useState } from "react";


import {
    Container,
    Img,
    MenuRight,
    Row,
    UserPicture,
    Wrapper,
    PictureDiv,
    PictureLetter,
    Column
} from "./style"

const Header = () => {
    const [mostrarDiv, setMostrarDiv] = useState(false);
    const [logado, setLogado] = useState(false);

    const divRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
            const handleClickOutside = (event: MouseEvent) => {
            if (divRef.current && !divRef.current.contains(event.target as Node)){
                setMostrarDiv(false);
            }
        };

        if (mostrarDiv) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [mostrarDiv]);
    

    return (
        <Wrapper>
            <Container>
                <Row>
                    <Img src={Logo.src} alt="Logo do site" />
                
                    <MenuRight href="/">Kushilin</MenuRight>
                </Row>

                <Row>
                    <UserPicture onClick={() => setMostrarDiv(!mostrarDiv)}><FaUser size={40}/></UserPicture>
                    
                    {mostrarDiv && (
                        <PictureDiv ref={divRef}>
                            {!logado && (
                                <>
                                    <PictureLetter href="#">Criar Conta</PictureLetter>
                                    <br />
                                    <PictureLetter href="#">Entrar</PictureLetter>
                                </>
                            )}

                            {logado && (
                                <>
                                    <PictureLetter href="#">Editar Perfil</PictureLetter>
                                    <br />
                                    <PictureLetter href="#">Sair</PictureLetter>
                                </>
                            )}                            
                        </PictureDiv>
                    )}
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header }