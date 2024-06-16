import './PatientHome.scss'

import Card from '../../components/card/Card'
import CardScroll from '../../components/cardScroll/CardScroll'
import CardPerson from '../../components/cardPerson/CardPerson'
import { Link } from 'react-router-dom'

function PatientHome() {
  return (
    <>
      <div className='header'>
        <Link to="/">
          <div className='logo'>
            <img src="/logo.svg"/>
            <span>Human Recovery</span>
          </div>
        </Link>
        <nav className='menu'>
          <ul>
            <li>О нас</li>
            <li>Клиентам</li>
            <li>FAQ</li>
            <li>Контакты</li>
            {/* <li>
              <div className='select-wrapper'>
                <select>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
            </li> */}
            <li><Link to="/login">Вход<img src="/person.svg" alt="person"/></Link></li>
            <li><Link to="/register">Регистрация<img src="/login.svg" alt="login"/></Link></li>
          </ul>
        </nav>
      </div>
      <div className="bg-doctor">
        <div className="content content-doctor">
          <div className="card-menu">
            <Card text="Список врачей"/>
            <Card text="Поиск аналога лекарств"/>
            <Card text="Активные направления"/>
            <Card text="Результаты анализов" vertical/>
            <Card text="Платные услуги"/>
            <Card text="Ответы на вопросы"/>
            <Card text="Отзывы"/>
          </div>
          <CardScroll/>
          <div className='card-person-wrapper'>
            <p className="card-title">Выбирайте только лучших врачей</p>
            <div className='card-person-scroll'>
              <img className='card-person-scroll--btn' src="/arrow-up-2-light.svg" alt="arrow"/>
              <CardPerson style="primary"/>
              <CardPerson style="secondary"/>
              <img className='card-person-scroll--btn' src="/arrow-up-2-light.svg" alt="arrow"/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PatientHome
