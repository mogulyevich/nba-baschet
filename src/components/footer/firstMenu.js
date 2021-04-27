import React from "react"
import { bool, func } from "prop-types"
import { useState } from "react"
import { CollapseExpand } from "../footer/responsive.styled"

import * as containerStyles from "../footer/columns.module.css"

const FirstMenuResponsive = ({ open, setOpen, ...props }) => {

    const isExpanded = open ? true : false;

    return (
        <div className={containerStyles.columns}>
            <nav>
                <CollapseExpand aria-expanded={isExpanded} open={open} onClick={() => setOpen(!open)} {...props}>
                    <span>Despre</span>
                    <li>Despre NBA</li>
                    <li>Despre NBA Baschet</li>
                </CollapseExpand>
            </nav>
        </div>
    )
}

FirstMenuResponsive.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
};

export default function FirstMenu() {
    const [open, setOpen] = useState(false);

    return (
        <FirstMenuResponsive open={open} setOpen={setOpen} />   
    )
}