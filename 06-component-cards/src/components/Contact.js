import React from 'react'

export default function Contact(prop) {
    return (
        <div className='contact'>
            <img className='contact-img' src={prop.img} />
            <div className='contact-name' >{prop.name}</div>
            <div className='contact-phone'>{prop.phone}</div>
            <div className='contact-email'>{prop.email}</div>
        </div>
    )
}
