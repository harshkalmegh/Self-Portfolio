import React from 'react'
import { useLocation } from 'react-router-dom';
import Index from './Navigation/Index'

function Contact() {
    const search = useLocation().search;
  const name = new URLSearchParams(search).get('name');
    return (
        <div>
            <Index />
            <p>Contact</p>
            <p> {name} </p>
        </div>
    )
}

export default Contact
