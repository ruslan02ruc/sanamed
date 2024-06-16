import './PersonalData.scss'
import Button from '../button/Button'
import TextBlock from '../textBlock/TextBlock'

function PersonalData() {
  return (
    <div className="personal-data">
      <div className="personal-data__top">
        <div className="personal-data--card">
          <div className='personal-data--card__wrapper'>
            <div className="personal-data--col">
              <img src="/personal-data.svg" alt="personal-data" />
              <p className="personal-data--title">Jane Doe</p>
            </div>
            <div className="personal-data--col">
              <TextBlock title="Пол:" text="Женский"/>
              <TextBlock title="Дата рождения:" text="05.02.72"/>
              <TextBlock title="Адрес:" text="ал. Проточная, 119"/>
            </div>
            <div className="personal-data--col">
              <TextBlock title="Контактная информация:" text="Raisa_Yudina70@mail.ru (902)272-62-81"/>
              <TextBlock title="Дата регистрации:" text="12.12.23"/>
            </div>
          </div>
          <div className="personal-data--btn">
            <Button text="Редактировать"/>
          </div>
        </div>
        <div className="personal-data--insurance">
          <p className='personal-data--title'>Страховая информация</p>
          <div className="personal-data--insurance__wrapper">
            <div className="personal-data--col">
              <TextBlock title="Номер страховки:" text="1234567890"/>
              <TextBlock title="Тип страховки:" text="Медицинская страховка"/>
              <TextBlock title="Данные страховой компании:" text="Здоровье-Плюс"/>
            </div>
            <div className="personal-data--col">
              <TextBlock title="Дата начала действия страховки:" text="01.01.2022"/>
              <TextBlock title="Дата окончания действия страховки:" text="31.12.2022"/>
              <TextBlock title="Страховой полис:" text="9876543210"/>
            </div>
          </div>
        </div>
      </div>
      <div className="personal-data--contacts">
        <p className='personal-data--title'>Важные контакты</p>
        <ul>
          <li>Имена и контактные данные близких родственников или контактных лиц для срочных случаев</li>
        </ul>
        <div className="personal-data--btn">
          <Button text="Добавить"/>
        </div>
      </div>
    </div>
  )
}

export default PersonalData