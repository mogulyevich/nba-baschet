import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

import * as containerStyles from "../footer/copyright.module.css"

export default function CopyrightArea() {
    return (
        <div className={containerStyles.copyrightArea}>
            <div className={containerStyles.copyrightContent}>
                <span id="text">© 2020 NBA Baschet. Toate drepturile rezervate.</span>
                <span>Politica de Confidentialitate | Termeni Si Conditii</span>
            </div>
            <div className={containerStyles.socialMedia}>
                <FontAwesomeIcon icon={faTwitter} className={containerStyles.socialMediaIcons}/>
                <FontAwesomeIcon icon={faFacebook} className={containerStyles.socialMediaIcons} />
                <FontAwesomeIcon icon={faInstagram} className={containerStyles.socialMediaIcons} />
            </div>
        </div>
    )
}