import './Notification.scss'

function NotificationGreen() {
  return (
    <div className="notification">
      <div className="notification--wrapper">
        <p><img src="/icon/check.svg" alt="check" />Вы успешно записались на прием к Врачу</p>
        <img src="/icon/arrow-up-2-light-1.svg" alt="arrow-up" />
      </div>
    </div>
  )
}

export default NotificationGreen