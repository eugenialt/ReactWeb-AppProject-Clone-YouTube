import { useState } from "react";

import React from 'react'

const Form = ({title, handleClick}: {title:string, handleClick:any}) => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

  return (
    <div>
        <input 
        type="email"
        value={email}
        onChange={(event)=> setEmail(event.target.value)}
        placeholder="email"
        />
        <input
        type="password"
        value={pass}
        onChange={(event)=> setPass(event.target.value)}
        placeholder="pass"
       />
       <button 
       onClick={handleClick}
       >
        {title}
       </button>
    </div>
  )
}

export default Form