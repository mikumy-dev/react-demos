import React from 'react'
import Contact from './components/Contact'
import avatar from './image/avatar.jpg'

let contacts = [
    {
        img: avatar,
        name: 'Ellie Sexton',
        phone: '(020)1234-5555',
        email: 'ells@example.com'
    },
    {
        img: avatar,
        name: 'Freddie Gamble',
        phone: '(020)1234-5556',
        email: 'fred@example.com'
    },
    {
        img: avatar,
        name: 'Kobe Mills',
        phone: '(020)1234-5557',
        email: 'kobe@example.com'
    },
    {
        img: avatar,
        name: 'Franciszek Cote',
        phone: '(020)1234-5558',
        email: 'franc@example.com'
    },
]

export default function App() {
    let contactList = contacts.map((item) => {
        return <Contact img={item.img} name={item.name} phone={item.phone} email={item.email} />
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