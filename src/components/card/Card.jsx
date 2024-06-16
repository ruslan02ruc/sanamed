import Button from '../button/Button'
import './Card.scss'

function Card(props) {
  return (
    <div className={`card ${props.vertical ? 'vertical' : ''}${props.style ? props.style : ''}`}>
      <img src="/pictures.svg" alt="card" />
      <p>{props.text}</p>
      {
        props.vertical && <a href="/doctor" className="card-link">Перейти</a>
      }
    </div>
  )
}

export default Card