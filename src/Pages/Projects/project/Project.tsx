import React, {JSX} from "react";
import styles from "./Project.module.scss";
import {Link} from "react-router-dom";
import Section from "../../../ui/components/Section";
interface ProjectLink {
    title: string;
    url: string;
}

interface ProjectSectionProps {
    projectTitle: string;
    projectDescription: string | JSX.Element;
    links: ProjectLink[];
    backgroundColor?: ColorVariant,
}

export enum ColorVariant {
    elementPink = "elementPink",
    elementPeach = "elementPeach",
    elementGreenVariant =  "elementGreenVariant",
    elementBlue = "elementBlue"
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ projectTitle, projectDescription, links, backgroundColor = ColorVariant.elementBlue}) => {
    const backgroundStyle = {
        backgroundColor: `color-mix(in srgb, var(--${backgroundColor}) 35%, transparent)`,
    };
    return (
        <Section title={projectTitle}>
            <div className={styles.project} style={backgroundStyle}>
                <div className={styles.description}>
                    {typeof projectDescription === "string" ? (
                        projectDescription.split("\n").map((line, idx) => (
                            <React.Fragment key={idx}>
                                {line}
                                <br />
                            </React.Fragment>
                        ))
                    ) : (
                        projectDescription
                    )}
                </div>
                <div className={styles.links}>
                    {links.map((link, index) => (
                        <Link key={index} to={link.url} target="_blank" style={backgroundStyle}>
                            {link.title}
                        </Link>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default ProjectSection;