import React from 'react'

export default function App() {
  let [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    comment: '',
    isHuman: true,
    employment: '',
    gender: '',
  })

  // console.log(formData.employment)
  function handleChange(event) {
    const { name, value, type, checked } = event.target
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: type === 'checkbox' ? checked : value,
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
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

      <fieldset>
        <legend>Current employment status</legend>
        <input
          type="radio"
          id="unemployed"
          name="employment"
          value="umemployed"
          onChange={handleChange}
          checked={formData.employment === 'umemployed'}
        />
        <label htmlFor="unemployed">unemployed</label>
        <br />
        <input
          type="radio"
          id="part-time"
          name="employment"
          value="part-time"
          onChange={handleChange}
          checked={formData.employment === 'part-time'}
        />
        <label htmlFor="part-time">part-time</label>
        <br />
        <input
          type="radio"
          id="full-time"
          name="employment"
          value="full-time"
          onChange={handleChange}
          checked={formData.employment === 'full-time'}
        />
        <label htmlFor="full-time">full-time</label>
      </fieldset>

      <div>
        <label htmlFor="gender">Gender: </label>
        <select
          id="gender"
          name="gender"
          onChange={handleChange}
          value={formData.gender}
        >
          <option value="">-- choose --</option>
          <option value="male">male</option>
          <option value="female">female</option>
          <option value="other">other</option>
        </select>
      </div>

      <button>submit</button>
    </form>
  )
}
