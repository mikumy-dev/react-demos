import React from 'react'

export default function Contact(props) {
    // if isPrivate === true, will show the default avatar and won't show the phone number element.
    return (
        <div className='contact'>
            <img className='contact-img' src={props.isPrivate ? 'image/avatar.jpg' : props.img} />
            <div className='contact-name' >{props.name}</div>
            {props.isPrivate === false && <div className='contact-phone'>{props.phone}</div>}
            <div className='contact-email'>{props.email}</div>
        </div>
    )
}
