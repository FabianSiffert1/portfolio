import styles from './Footer.module.scss'

export default function Footer() {
  return (
    // remove style tag if footer is needed
    <div className={styles.footer} style={{ display: 'none' }}>
      ©️ &nbsp;
      <a href={'https://siffert.io'}>Fabian Siffert</a>
      &nbsp;
      {new Date().getFullYear().toString()}
    </div>
  )
}
