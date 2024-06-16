import Button from '../../components/button/Button'
import CalendarForm from '../../components/calendar/Calendar'
import PersonalData from '../../components/personalData/PersonalData'
import TextBlock from '../../components/textBlock/TextBlock'
import './DoctorProfile.scss'

function DoctorProfile() {
  return (
    <div className="doctor-profile">
      <div className="doctor-profile__top">
        <div className="doctor-profile__left">
          <div className="doctor-profile--card">
            <div className='doctor-profile--card__wrapper'>
              <div className="doctor-profile--col">
                <img src="/personal-data.svg" alt="personal-data" />
                <p className="doctor-profile--title">Jane Doe</p>
                <div className="doctor-profile--gray-text">
                  <p>ал. Проточная, 119</p>
                  <p>Raisa_Yudina70@mail.ru</p>
                  <p>(902)272-62-81</p>
                </div>
              </div>
              <div className="doctor-profile--col">
                <TextBlock title="Пол:" text="Женский"/>
                <TextBlock title="Дата рождения:" text="Реабилитолог"/>
                <TextBlock title="Специализация:" text="$2000 + бонусы"/>
                <TextBlock title="Роль в компании:" text="12.12.23"/>
              </div>
              <div className="doctor-profile--col">
                <TextBlock title="Оклад:" text="05.02.72"/>
                <TextBlock title="Время работы:" text="Реабилитолог"/>
                <TextBlock title="Дата регистрации:" text="35 ч / сутки"/>
                <TextBlock title="ID:" text="12345678910"/>
              </div>
            </div>
            <div className="doctor-profile--btn">
              <Button text="Редактировать"/>
            </div>
          </div>
          <div className="doctor-profile__mini-bottom">
            <div className="doctor-profile--card mini">
              <p className="doctor-profile--title-blue">Учёт времени за месяц</p>
              <p className="doctor-profile--gray-text">Следите за тем, как вы тратите свои драгоценные часы</p>
              <div className="doctor-profile--block-vert">
                <div>
                  <p>240</p>
                  <p className="doctor-profile--gray-text">Всё время</p>
                </div>
                <div>
                  <p>180</p>
                  <p className="doctor-profile--gray-text">Работал</p>
                </div>
                <div>
                  <p>60</p>
                  <p className="doctor-profile--gray-text">Отдыхал</p>
                </div>
              </div>
            </div>
            <div className="doctor-profile--card mini">
              <p className="doctor-profile--title-blue">Учёт времени за месяц</p>
              <p className="doctor-profile--gray-text">Следите за тем, как вы тратите свои драгоценные часы</p>
              <div className="doctor-profile--block-vert">
                <div>
                  <p>240</p>
                  <p className="doctor-profile--gray-text">Всё время</p>
                </div>
                <div>
                  <p>180</p>
                  <p className="doctor-profile--gray-text">Работал</p>
                </div>
                <div>
                  <p>60</p>
                  <p className="doctor-profile--gray-text">Отдыхал</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="doctor-profile__right">
          <div className="doctor-profile--card">
            <CalendarForm/>
            <hr />
            <TextBlock title="8:00" text="Пациент - Иван Иванов" />
            <TextBlock title="9:00" text="Пациент - Иван Иванов" />
            <div className="doctor-profile--btn">
              <Button text="Редактировать"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorProfile