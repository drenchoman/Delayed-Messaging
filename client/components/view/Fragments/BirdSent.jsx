import React from 'react'
import styles from '../../../../server/public/styles/Animation.module.css'

export default function BirdSent() {
  return (
    <div className={styles.birdWrapper}>
      <img
        src={`https://media0.giphy.com/media/eJLbS0LxRS08CGuRpz/giphy.gif?cid=ecf05e47v1zizlpook4csrg09i1ncg9qdexaets3m9ek7j4s&rid=giphy.gif&ct=s`}
        alt="Bird in Flight"
      ></img>
    </div>
  )
}
