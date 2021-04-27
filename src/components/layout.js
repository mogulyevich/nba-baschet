import React from "react"

import * as containerStyles from "../components/layout.module.css"

import Menu from "../components/menu/responsiveMenu"
import Footer from "../components/footer/footer"

export default function Layout({ children }) {
    return (
        <>
            <Menu />
            <div className={containerStyles.adSpace}></div>
            {children}
            <div className={containerStyles.adSpace}></div>
            <Footer />
        </>
    )
}