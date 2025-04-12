import React from "react";
import Logo from "../../assets/logo.png";

import { FaUser } from "react-icons/fa";


import {
    Container,
    Img,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper,
} from "./style"

const Header = () => {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <Img src={Logo.src} alt="Logo do site" />
                
                    <MenuRight href="/">EasyGaming</MenuRight>
                    <Menu>ALT + F4</Menu>
                </Row>

                <Row>
                    <UserPicture><FaUser size={40}/></UserPicture>
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header }