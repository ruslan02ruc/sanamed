import { useState } from 'react'
import './CardWrapper.scss'

function CardWrapper({title, children}) {
  const[open, useOpen] = useState(false)

  const openHandle = (value) => {
    useOpen(value)
  }

  return (
    <div className="card-wrapper">
      <div className="card-wrapper__top">
        <p className="card-wrapper--title">{title}</p>
        <button className={`card-wrapper--btn ${open ? "open" : ""}`} onClick={()=>openHandle(!open)} type='button'><img src="/icon/arrow-up-2-light-blue.svg" alt="alt" /></button>
      </div>
      <div className={`card-wrapper__content ${open ? "open" : ""}`}>
        {children}
      </div>
    </div>
  )
}

export default CardWrapper