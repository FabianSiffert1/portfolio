import React, { useContext, useEffect } from 'react'
import { HeaderContext } from '../../Header/HeaderProvider'
import DisplayPosts from '../Market/temp'
import styles from './Inventory.module.scss'

export default function Inventory() {
  const headerContext = useContext(HeaderContext)
  useEffect(() => {
    headerContext.setHeaderItem(<></>)
  }, [])
  return (
    <div className={styles.inventory}>
      <DisplayPosts />
    </div>
  )
}
