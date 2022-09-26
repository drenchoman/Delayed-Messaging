import React,{ useEffect} from 'react'
import NavTwo from './NavTwo'
import styles from '../../../server/public/styles/Dashboard.module.css'
import {getAllContacts} from '../../api'
import { useDispatch } from 'react-redux'
import { updateContactList } from '../../slices/contacts'


function DashBoard() {
  const dispatch = useDispatch()
  const { body } = styles

  async function getContacts() {
    const contacts = await getAllContacts('auth0|123')
    dispatch(updateContactList(contacts))
  }

  useEffect(() => getContacts(),[])

  return (
    <>
      <div className={styles.fade}>
        <NavTwo />
        <div className={body}></div>
      </div>
    </>
  )
}

export default DashBoard
