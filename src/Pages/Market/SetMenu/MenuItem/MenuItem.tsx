import { SeriesSet } from '../SetMenu'
import styles from './MenuItem.module.scss'

export interface MenuItemProps {
  menuText: SeriesSet
  key: number
}

export default function MenuItem(props: MenuItemProps) {
  return (
    <div key={props.id} className={styles.menuItem}>
      {props.menuText}
    </div>
  )
}
