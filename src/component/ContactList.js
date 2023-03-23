import React from 'react'
import { useSelector } from 'react-redux'
import Contactitem from './Contactitem'
import SearchBox from './SearchBox'

const ContactList = () => {
  const contactList = useSelector((state) => state.contactList);
  return (
    <div>
      <SearchBox/>
       {contactList.map((item)=>(
        <Contactitem item={item} />
       ))}
    </div>
  )
}

export default ContactList;
