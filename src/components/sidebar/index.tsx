import React, { useEffect, useRef, useState } from "react";

import { GoArrowRight } from "react-icons/go";
import { FaHouse } from "react-icons/fa6";
import { FaVideo, FaClock } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";

import {
    Column,
    Container,
    Row,
    Wrapper,
    IconArrow,
    IconSelect,
    NavVideo,
    NavCrono,
    NavShorts
} from "./style"

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const divRef = useRef<HTMLDivElement>(null)
    
        useEffect(() => {
                const handleClickOutside = (event: MouseEvent) => {
                if (divRef.current && !divRef.current.contains(event.target as Node)){
                    setIsOpen(false);
                }
            };
    
            if (isOpen) {
                document.addEventListener('mousedown', handleClickOutside);
            }
    
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }, [isOpen]);

    return(
        <Wrapper isOpen={isOpen} ref={divRef}>
            <Container>
                <Row>
                    <IconArrow onClick={toggleSidebar} isOpen={isOpen}>
                        {isOpen ? <GoArrowRight size={70} /> : <GoArrowRight size={70} />}
                    </IconArrow>
                </Row>

                <Row>
                    <IconSelect isOpen={isOpen} href="/">
                        <FaHouse size={60} /> 
                        <span>Home</span>
                    </IconSelect>
                </Row>
                
                <Row>
                    <NavVideo isOpen={isOpen}>
                        <FaVideo size={60} />
                        <span>Vídeos</span>
                    </NavVideo>
                </Row>

                <Row>
                    <NavShorts isOpen={isOpen}>
                        <SiYoutubeshorts size={60} />
                        <span>Shorts</span>
                    </NavShorts>
                </Row>

                <Row>
                    <NavCrono isOpen={isOpen}>
                        <FaClock size={60} />
                        <span>Cronologia</span>
                    </NavCrono>
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Sidebar } 