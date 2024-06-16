import './Button.scss'

function Button({text}) {
  return (
    <button className={`button-blue` }>{text}</button>
  )
}

export default Button