import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { postNewMessage, getAllContacts } from '../../api'
import NavTwo from './NavTwo'
import styles from '../../../server/public/styles/NewCorrespondence.module.css'

function NewCorrespondence() {
  const user = useSelector((state) => state.user)

  const [list, setList] = useState([])

  async function getContacts() {
    const contacts = await getAllContacts(user.auth0Id)
    setList(contacts)
  }
  useEffect(() => getContacts(), [])

  const [form, setForm] = useState({
    recipientUsername: undefined,
    subject: undefined,
    message: undefined,
  })

  function handleSubmit(event) {
    event.preventDefault()
    form.senderUsername = user.username
    console.log(form)
    postNewMessage(form, user.token)
  }

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  const { formInput, btn_submit } = styles

  return (
    <>
      <NavTwo />
      <form onSubmit={handleSubmit} className={formInput}>
        <div>
          {/* <label htmlFor="recipient">Recipient</label> */}
          <input
            required="required"
            type="text"
            name="recipientUsername"
            list="friendsList"
            placeholder="Recipient..."
            onChange={handleChange}
            value={form.recipientUsername}
          />
          <datalist id="friendsList">
            {list.map((n) => (
              <option key={n.id} value={n.username}></option>
            ))}
          </datalist>
        </div>
        <div>
          {/* <label htmlFor="plate">Subject</label> */}
          <input
            required="required"
            type="text"
            name="subject"
            placeholder="Subject.."
            onChange={handleChange}
            value={form.subject}
          />
        </div>
        <div>
          {/* <label htmlFor="plate">Message</label> */}
          <textarea
            required
            type="text"
            name="message"
            placeholder="Message..."
            onChange={handleChange}
            value={form.message}
          />
        </div>
        <div>
          <button className={btn_submit} type="button" onClick={handleSubmit}>
            Send
          </button>
        </div>
      </form>
    </>
  )
}

export default NewCorrespondence
