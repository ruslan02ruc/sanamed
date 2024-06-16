import Button from '../button/Button'
import './CardPerson.scss'

function cardPerson(props) {
  return (
    <div className={`card-person ${props.style}`}>
        <div className='card-person__left'>
          <img src="/person-1.png" alt="person-1" />
          <p className='card-person--doctor'>Доктор<br/><span>Иванова Анна Петровна</span></p>
          <div>
            <p>Заслуженный врач, Профессор</p>
            <p>anna.ivanova@example.com</p>
            <p>+7 777 123 4567</p>
          </div>
        </div>
        <div className='card-person__right'>
          <div>
            <p>Специализация:</p>
            <p>Кардиолог, член Европейской Ассоциации Кардиологов</p>
          </div>
          <div>
            <p>Образование:</p>
            <ul className='card-person-list'>
              <li><p>Высшее медицинское образование: Алматинский Медицинский Университет (Год окончания: 2005)</p></li>
              <li><p>Степень доктора медицинских наук</p></li>
            </ul>
          </div>
          <div>
            <p>Опыт работы:</p>
            <ul className='card-person-list'>
              <li><p>Стажировка в Германии по кардиологии (Год: 2010-2011)</p></li>
              <li><p>Работа в крупных медицинских центрах Казахстана (Год: 2006-настоящее время)</p></li>
            </ul>
          </div>
          <div>
            <p>Сертификации и Лицензии:</p>
            <ul className='card-person-list'>
              <li><p>Сертифицированный специалист по эхокардиографии</p></li>
              <li><p>Лицензия на врачебную практику в Республике Казахстан</p></li>
            </ul>
          </div>
          <div>
            <p>Профессиональные Ассоциации:</p>
            <ul className='card-person-list'>
              <li><p>Член Ассоциации Кардиологов Казахстана</p></li>
              <li><p>Член Всемирной Ассоциации Кардиологов</p></li>
            </ul>
          </div>
          <Button text="Записаться на прием"/>
        </div>
    </div>
  )
}

export default cardPerson