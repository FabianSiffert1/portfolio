import { PokemonCard } from '../../../../../util/api/pokemonTGC/model/PokemonCard'
import styles from './CardDetail.module.scss'

interface CardDetailProps {
  card: PokemonCard
}

export function CardDetail(props: CardDetailProps) {
  return <div className={styles.cardDetailContainer}>{props.card.name}</div>
}
