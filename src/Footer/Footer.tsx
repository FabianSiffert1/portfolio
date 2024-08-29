import styles from './Footer.module.scss'

export default function Footer() {
  return (
    // remove style tag if footer is needed
    <div className={styles.footer}>
      <a href={'https://siffert.io'}>fabianSiffert</a>
      &nbsp;
      {new Date().getFullYear().toString()}
    </div>
  )
}
