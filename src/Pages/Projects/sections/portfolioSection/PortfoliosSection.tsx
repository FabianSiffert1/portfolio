import styles from './PortfoliosSection.module.scss'
import Project from "./project/Project";

export default function PortfoliosSection() {
    return (
        <div className={styles.portfoliosSection}>
            <Project projectTitle={"siffert.io 1.0"}
                     projectDescription={"This is one of two personal portfolios I’ve created.\n Built during my apprenticeship, it reflects my early exploration of web development with a focus on simplicity.\n Since then, I’ve created a second portfolio—more minimalistic in design and built with responsiveness in mind — which you’re currently viewing."}
                     links={[
                         {title: "Deployment", url: "https://old.siffert.io"},
                         {title: "Github", url: "https://github.com/FabianSiffert1/siffertio"}
                     ]}/>
        </div>
    )
}
