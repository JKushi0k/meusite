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
    NavItem,
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
        <>
            <Wrapper $isOpen={isOpen} ref={divRef}>
                <Container>
                    <Row>
                        <IconArrow onClick={toggleSidebar} $isOpen={isOpen}>
                            {isOpen ? <GoArrowRight size={70} /> : <GoArrowRight size={70} />}
                        </IconArrow>
                    </Row>

                    <Row>
                        <IconSelect $isOpen={isOpen} href="/">
                            <FaHouse size={60} /> 
                            <span>Home</span>
                        </IconSelect>
                    </Row>
                    
                    <Row>
                        <NavItem $isOpen={isOpen} href="#">
                            <FaVideo size={60} />
                            <span>Vídeos</span>
                        </NavItem>
                    </Row>

                    <Row>
                        <NavItem $isOpen={isOpen} href="#">
                            <SiYoutubeshorts size={60} />
                            <span>Shorts</span>
                        </NavItem>
                    </Row>

                    <Row>
                        <NavItem $isOpen={isOpen} href="#">
                            <FaClock size={60} />
                            <span>Timeline</span>
                        </NavItem>
                    </Row>
                </Container>
            </Wrapper>
        </>
    )
}

export { Sidebar } 