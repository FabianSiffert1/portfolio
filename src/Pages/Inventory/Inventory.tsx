import Card from '../../Components/Card'
import styles from './Inventory.module.scss'

export default function Inventory() {
  const cardAmount = 10
  const cardArray = []
  for (let i = 0; i <= cardAmount; i++) {
    cardArray.push(<Card id={i} />)
  }

  return (
    <div className={styles.inventory}>
      <div className={styles.cardList}>{cardArray}</div>
    </div>
  )
}
