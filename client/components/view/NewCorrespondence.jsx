import React, { useState } from 'react'
import styles from '../../../server/public/styles/NewCorrespondence.module.css'

import NavTwo from './NavTwo'

function NewCorrespondence() {
  const [form, setForm] = useState({
    recipient: '',
    subject: '',
    body: '',
  })

  function handleSubmit(event) {
    event.preventDefault()
    console.log(form)
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
      <form className={formInput}>
        <div>
          {/* <label htmlFor="recipient">Recipient</label> */}
          <input
            type="text"
            name="recipient"
            placeholder="Recipient..."
            onChange={handleChange}
            value={form.recipient}
          />
        </div>
        <div>
          {/* <label htmlFor="plate">Subject</label> */}
          <input
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
            type="text"
            name="body"
            placeholder="Message..."
            onChange={handleChange}
            value={form.body}
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
