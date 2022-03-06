import React from 'react'

export default function Contact(props) {
    return (
        <div className='contact'>
            <img className='contact-img' src={props.img} />
            <div className='contact-name' >{props.name}</div>
            <div className='contact-phone'>{props.phone}</div>
            <div className='contact-email'>{props.email}</div>
        </div>
    )
}
