import React from "react"
import { bool, func } from "prop-types"
import { useState } from "react"
import { CollapseExpand } from "../footer/responsive.styled"

import * as containerStyles from "../footer/columns.module.css"

const ThirdMenuResponsive = ({ open, setOpen, ...props }) => {

    const isExpanded = open ? true : false;

    return (
        <div className={containerStyles.columns}>
            <nav>
                <CollapseExpand aria-expanded={isExpanded} open={open} onClick={() => setOpen(!open)} {...props}>
                    <span>NBA</span>
                    <li>Sezonul NBA 2020 - 2021</li>
                    <li>NBA Restart 2020</li>
                    <li>Sezoanele Precedente</li>
                </CollapseExpand>
            </nav>
        </div>
    )
}

ThirdMenuResponsive.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
};

export default function ThirdMenu() {
    const [open, setOpen] = useState(false);

    return (
        <ThirdMenuResponsive open={open} setOpen={setOpen} />   
    )
}