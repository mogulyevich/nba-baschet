import React from "react"
import { bool, func } from "prop-types"
import { useState } from "react"
import { CollapseExpand } from "../footer/responsive.styled"

import * as containerStyles from "../footer/columns.module.css"

const SecondMenuResponsive = ({ open, setOpen, ...props }) => {

    const isExpanded = open ? true : false;

    return (
        <div className={containerStyles.columns}>
            <nav>
                <CollapseExpand aria-expanded={isExpanded} open={open} onClick={() => setOpen(!open)} {...props}>
                    <span>Legendele NBA</span>
                    <li>Kobe Bryant</li>
                    <li>Michael Jordan</li>
                    <li>Magic Si Larry</li>
                </CollapseExpand>
            </nav>
        </div>
    )
}

SecondMenuResponsive.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
};

export default function SecondMenu() {
    const [open, setOpen] = useState(false);

    return (
        <SecondMenuResponsive open={open} setOpen={setOpen} />   
    )
}