import React from 'react'
import styles from '../../../../server/public/styles/Buttons.module.css'
import { deleteMessage, archiveMessage } from '../../../api'
import { useSelector } from 'react-redux'
export default function LetterBtn({ id }) {
  const user = useSelector((state) => state.user)
  function handleDelete() {
    deleteMessage({ id: id }, user.token)
  }

  function handleArchive() {
    archiveMessage({ id: id }, user.token)
  }
  return (
    <div className={styles.letterBtnWrap}>
      <button onClick={handleDelete} className={styles.letterBtn}>
        Delete
      </button>
      <button onClick={handleArchive} className={styles.letterBtn}>
        Archive
      </button>
    </div>
  )
}
