import React from "react"
import styled from "styled-components"
import { useState } from "react"

import Logo from "../menu/logo"
import MenuLinks from "../menu/menuLinks"

import * as containerStyles from "../menu/responsiveMenu.module.css"

const Toggle = styled.div`
    display: none;
    height: 100%;
    cursor: pointer;

    @media (max-width: 800px) {
        display: flex;
    }
`

const MobileMenu = styled.div`
    background-color: #fff;
    width: 30px;
    height: 3px;
    align-self: center;
    transition: all .3s linear;
    position: relative;
    z-index: 9;
    transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

    ::before,
    ::after {
        width: 30px;
        height: 3px;
        background-color: #fff;
        content: "";
        position: absolute;
        transition: all 0.3s linear;
    }

    ::before {
        transform: ${props => 
        props.open ? "rotate(-90deg) translate(-10px, 0)" : "rotate(0deg)"};
        top: -10px;
    }

    ::after {
        opacity: ${props => (props.open ? "0" : "1")};
        transform: ${props => (props.open ? "rotate(90deg)" : "rotate(0deg)")};
        top: 10px;
    }
`

const Responsive = styled.div`
    display: flex;
    height: 100%;
    justify-content: flex-end;
    align-items: center;

    @media (max-width: 800px) {
        flex-direction: column;
        position: fixed;
        padding-top: 10vh;
        width: 100%;
        justify-content: flex-start;
        background-color: #051c2d;
        transition: all 0.3s ease-in;
        left: ${props => (props.open ? "-100%" : "0")};
    }
`

export default function Menu() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className={containerStyles.container}>
            <Logo />
            <Toggle 
                menuOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)}
            >   
                {menuOpen ? <MobileMenu open /> : <MobileMenu />}
            </Toggle>
            {menuOpen ? (
                <Responsive>
                    <MenuLinks />
                </Responsive>
            ) : (
                <Responsive open>
                    <MenuLinks />
                </Responsive>
            )}
        </div>
    )
}