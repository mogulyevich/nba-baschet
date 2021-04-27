import React from "react"

import * as containerStyles from "../footer/footer.module.css"

import FirstMenu from "./firstMenu"
import SecondMenu from "./secondMenu"
import ThirdMenu from "./thirdMenu"
import FourthMenu from "./fourthMenu"
import CopyrightArea from "./copyright"

export default function Footer() {
    return (
        <div className={containerStyles.container}>
            <div className={containerStyles.columns}>
                <FirstMenu />
                <SecondMenu />
                <ThirdMenu />
                <FourthMenu />
            </div>
            <hr></hr>
            <CopyrightArea />
        </div>
    )
}