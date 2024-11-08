import React from 'react'
import styles from './ImageLink.module.scss'


export interface ImageLinkProps {
  name: string;
  icon: string;
  url: string;
}

export default function ImageLink(props: ImageLinkProps) {

  return (
    <div className={styles.imageLink}>
      <img
        src={props.icon}
        alt={props.name+ ' icon'}
      />
      {props.name}
    </div>
  )
}