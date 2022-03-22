import React from 'react'

export default function ContactForm(props) {
  let [contact, setContact] = React.useState(props.contact)
  function handleChange(event) {
    const { name, value, type, checked } = event.target
    setContact((prevData) => {
      return {
        ...prevData,
        [name]: type === 'checkbox' ? checked : value,
      }
    })
  }
  return (
    <form>
      <div>
        <label htmlFor="id">id:</label>
        <input type="number" name="id" value={contact.id} id="id" readOnly />
      </div>
      <div>
        <label htmlFor="name">name:</label>
        <input
          type="text"
          name="name"
          value={contact.name}
          id="name"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="phone">phone:</label>
        <input
          type="text"
          name="phone"
          value={contact.phone}
          id="phone"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">email:</label>
        <input
          type="email"
          name="email"
          value={contact.email}
          id="email"
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="checkbox"
          name="isPrivate"
          checked={contact.isPrivate}
          id="isPrivate"
          onChange={handleChange}
        />
        <label htmlFor="isPrivate">isPrivate</label>
      </div>
      <button type="button" onClick={() => props.back()}>
        back
      </button>
      <button type="button" onClick={() => props.submit(contact)}>
        submit
      </button>
    </form>
  )
}
