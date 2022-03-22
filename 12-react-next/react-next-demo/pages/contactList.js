import React from 'react'
import Contact from '../components/Contact'
import contactData from '../components/contactData'
import contactListStyle from '../styles/contactList.module.css'
import Link from 'next/link'

export default function contactList() {
  let [contactDataList, setContactDataList] = React.useState(contactData)

  function contactDataToComponent() {
    return contactDataList.map((item) => {
      return (
        <Link key={item.id} href="/contactForm">
          <Contact
            {...item}
            // handleClick={() => showContactById(item.id)}
          />
        </Link>
      )
    })
  }

  let [contactList, setContactList] = React.useState(contactDataToComponent())

  function changeContactDataList(contact) {
    setContactDataList((prevList) => {
      let newList = prevList.map((item) => {
        return item.id === contact.id ? contact : item
      })
      return newList
    })
    setContactList(contactDataToComponent())
  }

  React.useEffect(() => {
    setContactList(contactDataToComponent())
  }, [contactDataList])

  return <div className={contactListStyle.contactList}>{contactList}</div>
}
