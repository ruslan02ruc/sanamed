import './Modal.scss'

const Modal = ({onClose, children}) => {
  console.log();
  
  return (
    <div className="dialog">
      <div className="dialog-container">
        <button className="dialog--btn-close" type="button" onClick={onClose}>Х</button>
        {children}
      </div>
    </div>
  )
}

export default Modal;
