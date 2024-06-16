import './TextBlock.scss'

function TextBlock({title, text}) {
  return (
    <div>
      <p className="text-block--title">{title}</p>
      {
        Array.isArray(text) 
        ? (
          <ul className="text-block--text">
            {text.map((v,i)=> <li key={i}>{v}</li>)}
          </ul>
        ) 
        :<p className="text-block--text">{text}</p>
      }
    </div>
  )
}

export default TextBlock