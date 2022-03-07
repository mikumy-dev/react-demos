import React from 'react'

export default function Contact(props) {
    let item = props.item
    // if isPrivate === true, will show the default avatar and won't show the phone number element.
    return (
        <div className='contact'>
            <img className='contact-img' src={item.isPrivate ? 'image/avatar.jpg' : item.img} />
            <div className='contact-name' >{item.name}</div>
            {item.isPrivate === false && <div className='contact-phone'>{item.phone}</div>}
            <div className='contact-email'>{item.email}</div>
        </div>
    )
}
