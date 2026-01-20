import React from 'react'
import "./Tooltip2.css"

const Tooltip2 = () => {
  return (
  <>
  <div className='container'>
    <button>Hover Over Me</button>
    <div className="tooltip-text">
        <span>I am the tooltip-text</span>
    </div>
  </div>
  </>
  )
}

export default Tooltip2