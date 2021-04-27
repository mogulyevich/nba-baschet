import React from "react"

import * as containerStyles from "../components/featuredPost.module.css"

export default function FeaturedPost() {
    return (
        <div className={containerStyles.container}>
            <div className={containerStyles.content}>
                <h1>Este Oficial! Cum Arata Noul Calendar NBA 2020 - 2021?</h1>
                <span>Patronatul NBA si sindicatul jucatorilor s-au inteles in privinta startului oficial al noului sezon NBA 2020 - 2021, precum si al perioadei de transferuri din inter-sezon.</span>
                <button>Citeste</button>
                <h3>Alte Stiri din NBA</h3>
                <ul>
                <li>S-au pus de acord! Cand Va Incepe Noul Sezon NBA?</li>
                <li>Baschetul de Play-off A Revenit! Ce S-a Intamplat?</li>
                <li>Cine Merge Mai Departe In Play-off-ul NBA 2020?</li>
                </ul>
            </div>
            <div className={containerStyles.imgContainer}></div>
        </div>
    )
}