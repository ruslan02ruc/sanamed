import { useState } from 'react'
import CalendarForm from '../calendar/Calendar'
import './FormSelectionDate.scss'
import Modal from '../modal/Modal'

function FormSelectionDate() {
  const [isModalActive, setModalActive] = useState(false)

  const handleModalOpen = () => {
    setModalActive(true);
  }
  const handleModalClose = () => {
    setModalActive(false);
  }

  return(
    <>
    <div className="formSelectionDate">
      <div className="formSelectionDate--date" onClick={handleModalOpen}>
        <p>Start date</p>
        <img src="/icon/calendar.svg" alt="Start date" />
      </div>
      <div className="formSelectionDate--arrow">
        <img src="/icon/arrow-right.svg" alt="arrow-right" />
      </div>
      <div className="formSelectionDate--date" onClick={handleModalOpen}>
        <p>End date</p>
        <img src="/icon/calendar.svg" alt="End date" />
      </div>
    </div>
    {
      isModalActive && (
        <Modal onClose={handleModalClose}>
          <CalendarForm/>
        </Modal>
        // <div className={`dialog`} onClose={handleModalClose}>
        //   <div className="dialog-container">
        //     <CalendarForm/>
        //   </div>
        // </div>
      )
    }
    </>
  )
}

export default FormSelectionDate