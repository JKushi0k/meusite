import React from "react";

import { GoArrowRight } from "react-icons/go";
import { FaHouse } from "react-icons/fa6";
import { FaVideo } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { FaClock } from "react-icons/fa";

import {
    Column,
    Container,
    Row,
    Wrapper,
    IconArrow,
    IconSelect,
    NavIcons
} from "./style"

const Sidebar = () => {
    return(
        <Wrapper>
            <Container>
                <Row>
                    <IconArrow>
                        <GoArrowRight size={70} />
                    </IconArrow>
                </Row>

                <Row>
                    <IconSelect href="/">
                        <FaHouse size={60} />
                    </IconSelect>
                </Row>
                
                <Row>
                    <NavIcons>
                        <FaVideo size={60} />
                    </NavIcons>
                </Row>

                <Row>
                    <NavIcons>
                        <SiYoutubeshorts size={60} />
                    </NavIcons>
                </Row>

                <Row>
                    <NavIcons>
                        <FaClock size={60} />
                    </NavIcons>
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Sidebar } 