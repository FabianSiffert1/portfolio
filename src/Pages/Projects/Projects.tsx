import React from 'react'
import styles from './Projects.module.scss'
import Project, {ColorVariant} from "./project/Project";

export default function Projects() {
    return <div className={styles.projects}>
        <Project projectTitle={"siffert.io 2.0"}
                 projectDescription={"This is the newer of two portfolios — minimalistic and responsive, reflecting my current approach to design. However, I’m not a web developer by trade; I focus on Android development."}
                 links={[
                     {title: "Deployment", url: "https://siffert.io"},
                     {title: "Github", url: "https://github.com/FabianSiffert1/portfolio"}
                 ]}/>
        <Project projectTitle={"siffert.io 1.0"}
                 projectDescription={"This is one of two personal portfolios I’ve created.\n Built during my apprenticeship, it reflects my early exploration of web development with a focus on simplicity.\n Since then, I’ve created a second portfolio—more minimalistic in design and built with responsiveness in mind — which you’re currently viewing."}
                 links={[
                     {title: "Deployment", url: "https://old.siffert.io"},
                     {title: "Github", url: "https://github.com/FabianSiffert1/siffertio"}
                 ]}
            backgroundColor={ColorVariant.elementPink}
        />
        <Project projectTitle={"inv"}
                 projectDescription={"A work-in-progress™, mobile-first website that originally started as a portfolio redesign.\n Over time, it evolved into a Pokémon Trading Card Game platform to help me sell my childhood collection at fair prices."}
                 links={[
                     {title: "Deployment", url: "https://inv.siffert.io"},
                     {title: "Github", url: "https://github.com/FabianSiffert1/inv"}
                 ]}
                 backgroundColor={ColorVariant.elementGreenVariant2}
        />
        <div className={styles.spacer}/>
    </div>
}
