import React from "react";

import { FaYoutube } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import {
    Wrapper,
    Container,
    Column,
    Row,
    SocialIcon,
    SocialText

} from "./style"

const Footer = () => {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <SocialIcon href="https://www.youtube.com/@kushilin"><FaYoutube /> Youtube</SocialIcon>
                    <SocialIcon href="https://www.twitch.tv/kushilin"><FaTwitch /> Twitch</SocialIcon>
                    <SocialIcon href="https://www.instagram.com/ph.pablogiyuu/"><FaInstagram /> Instagram</SocialIcon>
                </Row>

                <Row>
                    <SocialText>©Copyright. Kushilin. Todos os direitos reservados</SocialText>
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Footer }