import React from "react"
import { bool, func } from "prop-types"
import { useState } from "react"
import { CollapseExpand } from "../footer/responsive.styled"

import * as containerStyles from "../footer/columns.module.css"

const FourthMenuResponsive = ({ open, setOpen, ...props }) => {

    const isExpanded = open ? true : false;

    return (
        <div className={containerStyles.columns}>
            <nav>
                <CollapseExpand aria-expanded={isExpanded} open={open} onClick={() => setOpen(!open)} {...props}>
                    <span>Euroliga</span>
                    <li>Despre Euroliga</li>
                    <li>Euroliga In 2020</li>
                    <li>Euroliga 2020 - 2021</li>
                </CollapseExpand>
            </nav>
        </div>
    )
}

FourthMenuResponsive.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
};

export default function FourthMenu() {
    const [open, setOpen] = useState(false);

    return (
        <FourthMenuResponsive open={open} setOpen={setOpen} />   
    )
}