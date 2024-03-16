import React, { useContext, useEffect } from 'react'
import { HeaderContext } from '../../Header/HeaderProvider'
import styles from './Inventory.module.scss'

export default function Inventory() {
  const headerContext = useContext(HeaderContext)
  useEffect(() => {
    headerContext.setHeaderItem(<></>)
  }, [])
  return (
    <div className={styles.inventory}>
      A Placeholder for a Inventory that holds all cards, preferably with condition, price at time of purchase and current price pulled from
      an API.
    </div>
  )
}
