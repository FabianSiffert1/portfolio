import styles from './Section.module.scss'
import React from 'react'

interface SectionProps {
  title: string
  children: React.ReactNode
  headingLevel?: 2 | 3
}

export default function Section({ title, children, headingLevel = 2 }: SectionProps) {
  const Heading = `h${headingLevel}` as const
  return (
    <section className={styles.section}>
      <Heading className={styles.sectionTitle}>{title}</Heading>
      <div className={styles.sectionContent}>{children}</div>
    </section>
  )
}
