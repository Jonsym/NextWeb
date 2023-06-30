import React from 'react'

const Button = ({link, text}) => {
  return (
    <a href={link} className="bnt">{text}</a>
  )
}

export default Button