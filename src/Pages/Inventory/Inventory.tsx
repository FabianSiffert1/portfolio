import React from 'react'
import DisplayPosts from '../Market/temp'
import styles from './Inventory.module.scss'

export default function Inventory() {
  return (
    <div className={styles.inventory}>
      <DisplayPosts />
    </div>
  )
}
