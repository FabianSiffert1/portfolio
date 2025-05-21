import React from 'react'
import styles from './Projects.module.scss'
import Project, {ColorVariant} from "./project/Project";
import {Link} from "react-router-dom";

export default function Projects() {
    return <div className={styles.projects}>
        <Project
            projectTitle="Inventory"
            projectDescription={
                <>
                    A simple, Android-only investment tracker.<br/><br/>
                    This is the project I'm currently working on, built using best practices recommended by Google's{" "}
                    <Link to="https://github.com/android/nowinandroid" target="_blank" style={{fontWeight: 550}}>
                    NowInAndroid
                    </Link> and informed by my professional experience. <br/><br/>
                    As of May 2025, it runs on a local database, which I plan to replace in the future.
                    The project hasn't been deployed yet, as it's still a work in progress.
                </>
            }
            links={[
                { title: "Github", url: "https://github.com/FabianSiffert1/inventory" }
            ]}
        />
        <Project projectTitle={"inv"}
                 projectDescription={"A work-in-progress™ (read: very rough, and likely never to be finished), mobile-first website that originally began as a portfolio redesign. Over time, it evolved into a Pokémon Trading Card Game platform to help me sell my childhood collection at fair prices."}
                 links={[
                     {title: "Link", url: "https://inv.siffert.io"},
                     {title: "Github", url: "https://github.com/FabianSiffert1/inv"}
                 ]}
                 backgroundColor={ColorVariant.elementPeach}
        />
        <Project projectTitle={"siffert.io 2.0"}
                 projectDescription={"This is my current portfolio—more minimalistic in design and built with responsiveness in mind."}
                 links={[
                     {title: "Link", url: "https://siffert.io"},
                     {title: "Github", url: "https://github.com/FabianSiffert1/portfolio"}
                 ]} backgroundColor={ColorVariant.elementGreenVariant}/>
        <Project projectTitle={"siffert.io 1.0"}
                 projectDescription={"This is the first of two personal portfolios I’ve created.\n Built during my apprenticeship, it reflects my early exploration of web development with a focus on simplicity.\n"}
                 links={[
                     {title: "Link", url: "https://old.siffert.io"},
                     {title: "Github", url: "https://github.com/FabianSiffert1/siffertio"}
                 ]}
            backgroundColor={ColorVariant.elementPink}
        />

        <div className={styles.spacer}/>
    </div>
}
