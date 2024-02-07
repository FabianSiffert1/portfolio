import styles from './SetMenu.module.scss'

interface SetMenuProps {
  currentlySelectedPokemonSeries: string
  toggleSetMenu: () => void
}

export default function SetMenu(props: SetMenuProps) {
  return <div className={styles.setMenu}>Set: {props.currentlySelectedPokemonSeries}</div>
}
