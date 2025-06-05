import styles from './SkillsSection.module.scss'
import Section from '../../../../ui/components/Section'

export default function SkillsSection() {
    return <div className={styles.skillsSection}>

        <div className={styles.mainProgrammingSkills}>
            <Section title='Main Skills:'>
                <div className={styles.mainProgrammingSkillsList}>
                    <div className={styles.android}>Android</div>
                    <div className={styles.kotlin}>Kotlin</div>
                    <div className={styles.jetpackCompose}>Jetpack Compose</div>
                </div>
            </Section>
        </div>
        <div className={styles.secondaryProgrammingSkills}>
            <Section title='Also:'>
                <div className={styles.secondaryProgrammingSkillsList}>
                    <div className={styles.react}>React</div>
                    <div className={styles.typeScript}>Type- & JavaScript</div>
                    <div className={styles.sass}>Css & Sass</div>
                    <div className={styles.java}>Java</div>
                </div>
            </Section>
        </div>
        <div className={styles.softSkills}>
            <Section title={'and:'}>
                <div className={styles.softSkillsList}>
                    <div className={styles.scrum}>Scrum</div>
                    <div className={styles.po}>Product Owner Certificate*</div>
                    <div className={styles.pottery}>Pottery</div>
                    <div className={styles.bouldering}>Bouldering</div>
                    <div className={styles.deprecated}>* Expired Dec. 2024</div>
                </div>
            </Section>
        </div>
    </div>
}

const SkillsSectionContent = (
    <div className={styles.skillsSection}>

        <div className={styles.mainProgrammingSkills}>
            <Section title='mainly:'>
                <div className={styles.android}>Android</div>
                <div className={styles.kotlin}>Kotlin</div>
                <div className={styles.jetpackCompose}>Jetpack Compose</div>
            </Section>
        </div>
        <div className={styles.secondaryProgrammingSkills}>
            <Section title='Also:'>
                <div className={styles.react}>React</div>
                <div className={styles.typeScript}>Type- & JavaScript</div>
                <div className={styles.sass}>Css & Sass</div>
                <div className={styles.java}>Java</div>
            </Section>
        </div>
        <div className={styles.softSkills}>
            <Section title={'and:'}>
                <div className={styles.scrum}>Scrum</div>
                <div className={styles.po}>Product Owner Certificate*</div>
                <div className={styles.pottery}>Pottery</div>
                <div className={styles.bouldering}>Bouldering</div>
                <div className={styles.deprecated}>* Expired Dec. 2024</div>
            </Section>
        </div>
    </div>
)
