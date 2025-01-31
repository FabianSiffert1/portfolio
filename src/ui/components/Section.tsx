import styles from './Section.module.scss'
import React from 'react'


interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export default function Section({ title, children }: SectionProps) {
  return (
    <div className={styles.section}>
      <div className={styles.sectionTitle}>{title}</div>
      <div className={styles.sectionContent}>{children}</div>
    </div>
  );
}
