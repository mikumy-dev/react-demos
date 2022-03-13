import React from 'react'
import Contact from './components/Contact'
import contactData from './components/contactData'
import ContactForm from './components/ContactForm'

export default function App() {
  let [mainContent, setMainContent] = React.useState(<div></div>)
  let [contactDataList, setContactDataList] = React.useState(contactData)

  function changeContactDataList(contact) {
    setContactDataList((prevList) => {
      let newList = prevList.map((item) => {
        return item.id === contact.id ? contact : item
      })
      return newList
    })
    showContactList()
  }

  function showContactList() {
    let contactList = contactDataList.map((item) => {
      return (
        <Contact
          key={item.id}
          {...item}
          handleClick={() => showContactById(item.id)}
        />
      )
    })
    setMainContent(<div className="contactList">{contactList}</div>)
  }

  React.useEffect(() => {
    showContactList()
  }, [contactDataList])

  function showContactById(id) {
    let contactDetail
    contactDataList.forEach((item) => {
      if (item.id === id) {
        contactDetail = item
      }
    })
    setMainContent(
      <ContactForm
        contact={contactDetail}
        back={showContactList}
        submit={changeContactDataList}
      />
    )
  }

  return <>{mainContent}</>
}
