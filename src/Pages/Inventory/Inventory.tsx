import Card from '../../Components/Card'
import styles from './Inventory.module.scss'

export default function Inventory() {
  return (
    <div className={styles.inventory}>
      <div className={styles.cardList}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}
