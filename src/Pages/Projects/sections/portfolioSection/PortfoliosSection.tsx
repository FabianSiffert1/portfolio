import styles from './PortfoliosSection.module.scss'
import Section from "../../../../ui/components/Section";
import {Link} from "react-router-dom";

export default function PortfoliosSection() {
    return (
        <div className={styles.portfoliosSection}>
            <Section title={"siffert.io 1.0"}>
                <div className={styles.project}>
                <div className={styles.description}>
                    This is one of two personal portfolios I’ve created.
                    Built during my apprenticeship, it reflects my early exploration of web development with a focus on
                    simplicity.
                    Since then, I’ve created a second portfolio—more minimalistic in design and built with
                    responsiveness in mind—which you’re currently viewing.
                </div>
                <div className={styles.links}>
                    <Link to={'https://old.siffert.io'} target={'_blank'}>
                        Deployment
                    </Link>
                    <Link to={'https://github.com/FabianSiffert1/siffertio'} target={'_blank'}>
                        Github
                    </Link>
                </div>
            </div>
            </Section>
        </div>
    )
}
