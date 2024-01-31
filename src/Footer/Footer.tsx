import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <div className={styles.footer}>
      ©️ &nbsp;
      <a href={'https://siffert.io'}>Fabian Siffert</a>
      &nbsp;
      {new Date().getFullYear().toString()}
    </div>
  )
}
