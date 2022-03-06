import React from 'react'
import Contact from './components/Contact'
import dog from './image/dog-src.jpg'
import contactData from './components/contactData'

let contacts = contactData

export default function App() {
    // react can't refer the image in src by relative path
    contacts[0].img = 'image/dog-src.jpg' // not show
    // react can refer the image in public by relative path
    contacts[1].img = 'image/dog-public.jpg' // show
    // react can refer the image in src by import
    contacts[2].img = dog // show
    let contactList = contacts.map((item) => {
        return <Contact key={item.id} img={item.img} name={item.name} phone={item.phone} email={item.email} />
    })
    // contacts.forEach((item) => {
    //     contactList.push(<Contact img={item.img} name={item.name} phone={item.phone} email={item.email} />)
    // })
    return (
        <div className='contactList'>
            {contactList}
        </div>
    )
}