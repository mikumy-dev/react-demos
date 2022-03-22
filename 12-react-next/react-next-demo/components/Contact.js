import React from 'react'
import Image from 'next/image'
import contactStyle from '../styles/contact.module.css'
// use next Image component instead using img
export default function Contact(props) {
  // if isPrivate === true, will show the default avatar and won't show the phone number element.
  return (
    <div
      className={contactStyle.contact}
      // onClick={() => props.handleClick(props.id)}
    >
      <Image
        className={contactStyle['contact-img']}
        src={props.isPrivate ? '/image/avatar.jpg' : props.img}
        height={150}
        width={150}
      />
      <div className={contactStyle['contact-name']}>{props.name}</div>
      {props.isPrivate === false && (
        <div className="contact-phone">{props.phone}</div>
      )}
      <div className="contact-email">{props.email}</div>
    </div>
  )
}
