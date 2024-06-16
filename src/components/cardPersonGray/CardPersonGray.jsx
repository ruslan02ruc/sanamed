import { useState } from 'react'
import Button from '../../components/button/Button'
import CalendarForm from '../../components/calendar/Calendar'
import NotificationGreen from '../../components/notification/NotificationGreen'
import TextBlock from '../../components/textBlock/TextBlock'
import './CardPersonGray.scss'

function CardPersonGray(props) {
  const[open, useOpen] = useState(false)

  const openHandle = (value) => {
    useOpen(value)
  }

  return (
    <div className="card-person">
      <div className="card-person__top">
        <img src="/person-1.png" alt="person-1" />
        <div className="card-person__top--info">
          <div className="card-person__top--title">
            <p>Доктор <span>Иванова Анна Петровна</span></p>
            <button className='card-person__top--btn-heart'>
              <img src="/icon/heart.svg" alt="heart" />
            </button>
          </div>
          <ul>
            <li>Заслуженный врач, Профессор</li>
            <li>anna.ivanova@example.com</li>
            <li>+7 777 123 4567</li>
          </ul>
        </div>
      </div>
      <div className="card-person__bottom">
        <p className="card-person__bottom--title">Больше информации</p>
        <button className={`card-person__bottom--btn ${open ? "open" : ""}`} onClick={()=>openHandle(!open)} type='button'><img src="/icon/arrow-up-2-light.svg" alt="alt"/></button>
      </div>
      <div className={`card-person__info ${open ? "open" : ""}`}>
        <TextBlock title="Специализация:" text="Кардиолог, член Европейской Ассоциации Кардиологов" />
        <TextBlock title="Образование::" text={["Высшее медицинское образование: Алматинский Медицинский Университет (Год окончания: 2005)", "Степень доктора медицинских наук"]} />
        <TextBlock title="Опыт работы::" text={["Стажировка в Германии по кардиологии (Год: 2010-2011)", "Работа в крупных медицинских центрах Казахстана (Год: 2006-настоящее время)"]} />
        <TextBlock title="Сертификации и Лицензии::" text={["Сертифицированный специалист по эхокардиографии", "Лицензия на врачебную практику в Республике Казахстан"]} />
        <TextBlock title="Профессиональные Ассоциации::" text={["Член Ассоциации Кардиологов Казахстана", "Член Всемирной Ассоциации Кардиологов"]} />
      </div>
      <div className="card-person--btn">
        <Button text="Записаться на прием"/>
      </div>
    </div>
  )
}

export default CardPersonGray