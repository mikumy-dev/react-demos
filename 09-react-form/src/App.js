import React from 'react'

export default function App() {
  let [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    comment: '',
    isHuman: true,
  })

  function handleChange(event) {
    console.log(formData)
    const { name, value, type, checked } = event.target
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: type === 'checkbox' ? checked : value,
      }
    })
  }

  function handleSubmit() {
    console.log(formData)
  }

  return (
    <form>
      <input
        type="text"
        onChange={handleChange}
        name="firstName"
        value={formData.firstName}
      />
      <input
        type="text"
        onChange={handleChange}
        name="lastName"
        value={formData.lastName}
      />
      <input
        type="email"
        onChange={handleChange}
        name="email"
        value={formData.email}
      />
      <textarea
        name="comment"
        onChange={handleChange}
        value={formData.comment}
      />
      <div>
        <input
          type="checkbox"
          id="isHuman"
          onChange={handleChange}
          name="isHuman"
          checked={formData.isHuman}
        />
        <label htmlFor="isHuman">Are you a human?</label>
      </div>

      <button type="button" onClick={handleSubmit}>
        submit
      </button>
    </form>
  )
}
