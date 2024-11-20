import React from 'react'

const Anchor = ({className, href, aText}) => {
  return (
    <a href={href} className={`${className}`}>{aText}</a>
  )
}

export default Anchor