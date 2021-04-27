import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketballBall } from "@fortawesome/free-solid-svg-icons"

import * as containerStyles from "../menu/logo.module.css"

export default function Logo() {
    return (
        <div className={containerStyles.logoContainer}>
            <FontAwesomeIcon icon={faBasketballBall} className={containerStyles.icon} />
            <span>NBA Baschet</span>
        </div>
    )
}