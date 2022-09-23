import React, { useState } from 'react'

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

  return (
    <form>
      <div>
        <label htmlFor="recipient">Recipient</label>
        <input
          type="text"
          name="recipient"
          placeholder="Recipient..."
          onChange={handleChange}
          value={form.recipient}
        />
      </div>
      <div>
        <label htmlFor="plate">Subject</label>
        <input
          type="text"
          name="subject"
          placeholder="Subject.."
          onChange={handleChange}
          value={form.subject}
        />
      </div>
      <div>
        <label htmlFor="plate">Message</label>
        <textarea
          type="text"
          name="body"
          placeholder="Message..."
          onChange={handleChange}
          value={form.body}
        />
      </div>
      <div>
        <button type="button" onClick={handleSubmit}>
          Send
        </button>
      </div>
      <p style={{ whiteSpace: 'pre-line' }}>{form.body}</p>
    </form>
  )
}

export default NewCorrespondence
