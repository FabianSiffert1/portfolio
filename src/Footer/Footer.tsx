import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <div className={styles.footer}>
      <a href={'https://siffert.io'}>©</a>
      &nbsp;
      {new Date().getFullYear().toString()}
    </div>
  )
}
