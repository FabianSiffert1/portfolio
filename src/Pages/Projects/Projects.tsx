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
                        &#123;NowInAndroid&#125;
                    </Link> and informed by my professional experience. <br/><br/>
                    As of May 2025, it runs on a local database, which I plan to replace in the future.
                    The project hasn't been deployed yet, as it's still a work in progress.
                </>
            }
            links={[
                { title: "Github", url: "https://github.com/FabianSiffert1/inventory" }
            ]}
        />
        <Project
            projectTitle="docker-hud"
            projectDescription={
                <>
                    A hud for the docker containers running on my local server<br/><br/>
                    Build with a <Link to="https://shop.pimoroni.com/products/badger-2040?srsltid=AfmBOoqCMb0tOkZMvyGG12VLJ3naDkMUR3sO43zKV-8ED-8Im-PhuvR2" target="_blank" style={{fontWeight: 550}}>&#123;Badger 2040&#125;</Link> in mind.
                    It displays a randomly selected logo each day when everything is fine and a warning screen when a docker container is down. Also contains an overview screen of the health of my server and one for the containers.
                    The Buttons are mapped to refresh, view switching and restarting docker containers. <br/><br/>
                    Vibecoded in Python.
                </>
            }
            links={[
                { title: "Github", url: "https://github.com/FabianSiffert1/docker-hud" }
            ]}
            backgroundColor={ColorVariant.elementGreenVariant}
        />
        <Project
            projectTitle="DIY Electronics & Home Assistant"
            projectDescription={
                <>
                    Learning electronics hands-on — multimeter, soldering iron, cheap ESP32-S3 boards — by building things that plug into my Home Assistant setup. Everything runs on ESPHome, which turns a microcontroller into a native Home Assistant device from a few lines of YAML.<br/><br/>
                    <b>Sunrise Alarm</b> — an alarm clock that wakes me with light instead of noise. Currently pulls time, temperature and the alarm state from Home Assistant. Next: driving the lamp and leaving the breadboard behind.<br/><br/>
                    <b>Grundig Micro-Boy 300</b> — a shortwave pocket radio from the analogue era, brought back to life. The original electronics work again, the corroded battery holder is gone, and it now runs off my own power module. <br/> But no German station broadcasts on shortwave anymore, so the receiver has nothing left to receive. It gets a second job instead: a Home Assistant voice satellite for switching the lights, with a NeoPixel behind the dial to signal <i>I'm listening</i>.

                </>
            }
            links={[
                {title: "ESPHome", url: "https://esphome.io"}
            ]}
            backgroundColor={ColorVariant.elementPeach}
        />
        <Project projectTitle={"inv"}
                 projectDescription={"A work-in-progress™ (read: very rough, and likely never to be finished), mobile-first website that originally began as a portfolio redesign. Over time, it evolved into a Pokémon Trading Card Game platform to help me sell my childhood collection at fair prices."}
                 links={[
                     {title: "Link", url: "https://inv.siffert.io"},
                     {title: "Github", url: "https://github.com/FabianSiffert1/inv"}
                 ]}
                 backgroundColor={ColorVariant.elementPink}
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
            backgroundColor={ColorVariant.elementBlue}
        />

        <div className={styles.spacer}/>
    </div>
}
