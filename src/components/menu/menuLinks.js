import React from "react"
import { Link } from "gatsby"

import { } from "../menu/menuLinks.module.css"

export default function MenuLinks() {
    return (
        <ul>
            <li><Link to="#">Despre NBA</Link></li>
            <li><Link to="#">Sezonul NBA 2020</Link></li>
            <li><Link to="#">Sezonul NBA 2021</Link></li>
            <li><Link to="#">Istoria NBA</Link></li>
        </ul>
    )
}