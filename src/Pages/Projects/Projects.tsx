import React from 'react'
import styles from './Projects.module.scss'
import PortfoliosSection from "./sections/portfolioSection/PortfoliosSection";

export default function Projects() {
  return <div className={styles.projects}>
    <PortfoliosSection/>
  </div>
}
