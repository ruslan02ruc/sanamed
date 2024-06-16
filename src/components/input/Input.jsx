import './Input.scss'

function Input(props) {
  return (
    <div className="input-gray">
      <input type={props.type === "password" ? "password" : "text"} placeholder={props.placeholder}/>
      {
        props.type == "text" ? <></> : <button type='button' className={props.type}></button>
      }
    </div>
  )
}

export default Input