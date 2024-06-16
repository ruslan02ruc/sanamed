import './Patient.scss'

import { useState } from 'react';
import ProfileDirectory from '../../components/profileDirectory/ProfileDirectory';
import CardWrapper from '../../components/cardWrapper/CardWrapper';
import Button from '../../components/button/Button';
import { Outlet } from 'react-router-dom';
import { CustomInput, CustomRadio } from '../../components/customInput/CastomInput';

function Patient() {
  const list = [
    {
      id: 1,
      name: "Реабилитационная карта",
      to: "rehabilitation-card"
    },
    {
      id: 2,
      name: "План реабилитации",
      to: "rehabilitation-plan"
    },
    {
      id: 3,
      name: "Аналитика состояния",
      to: "status-analysis"
    },
    {
      id: 4,
      name: "Вложения",
      to: "attachments"
    }
  ]
  return (
    <div className="patient">
      <ProfileDirectory list={list}/>
      <Outlet/>
    </div>
  )
}

export default Patient

function PatientRehabilitationPlan() {
  return (
    <div className={`patient-block`}>
      <CardWrapper title="Основная реабилитация">
        <CustomInput title="Название" placeholder="Данные"/>
        <CustomInput title="Срок реабилитации" placeholder="14 дней"/>
        <CustomInput title="Индикаторы реабилитации" placeholder="14 дней"/>
        <CustomInput title="Дополнительные рекомендации" placeholder="Данные"/>
      </CardWrapper>
      <CardWrapper title="Рекомендация ИИ">
        <CustomInput title="Название" placeholder="Данные"/>
        <CustomInput title="Срок реабилитации" placeholder="14 дней"/>
        <CustomInput title="Индикаторы реабилитации" placeholder="14 дней"/>
        <CustomInput title="Дополнительные рекомендации" placeholder="Данные"/>
        <div>
          <p>Выберите наиболее подходящие рекомендации</p>
          <div className="patient-checkbox-container">
            <label className="patient--checkbox">
              <input type="checkbox" />
              <span>Sem</span>
            </label>
            <label className="patient--checkbox">
              <input type="checkbox" />
              <span>Sociis sit</span>
            </label>
            <label className="patient--checkbox">
              <input type="checkbox" />
              <span>Nulla</span>
            </label>
            <label className="patient--checkbox">
              <input type="checkbox" />
              <span>Est sapien tellus ac</span>
            </label>
            <label className="patient--checkbox">
              <input type="checkbox" />
              <span>Mi laoreet</span>
            </label>
            <label className="patient--checkbox">
              <input type="checkbox" />
              <span>Volutpat elementum vel</span>
            </label>
            <label className="patient--checkbox">
              <input type="checkbox" />
              <span>Adipiscing donec</span>
            </label>
            <label className="patient--checkbox">
              <input type="checkbox" />
              <span>Sapien lectus rutrum</span>
            </label>
            <label className="patient--checkbox">
              <input type="checkbox" />
              <span>Aliquet</span>
            </label>
            <label className="patient--checkbox">
              <input type="checkbox" />
              <span>Nullam velit volutpat diam dolor lectus mauris.</span>
            </label>
            <label className="patient--checkbox">
              <input type="checkbox" />
              <span>Enim quam</span>
            </label>
            <label className="patient--checkbox">
              <input type="checkbox" />
              <span>In urna est</span>
            </label>
            <label className="patient--checkbox">
              <input type="checkbox" />
              <span>In velit mollis ullamcorper lectus</span>
            </label>
            <label className="patient--checkbox">
              <input type="checkbox" />
              <span>Nisl</span>
            </label>
            <label className="patient--checkbox">
              <input type="checkbox" />
              <span>Mattis suspendisse nisl</span>
            </label>
            <label className="patient--checkbox">
              <input type="checkbox" />
              <span>Pretium ut sit eget in egestas.</span>
            </label>
            <label className="patient--checkbox">
              <input type="checkbox" />
              <span>Bibendum diam volutpat aliquam sit scelerisque elementum sit morbi interdum.</span>
            </label>
            <label className="patient--checkbox">
              <input type="checkbox" />
              <span>Feugiat nisi</span>
            </label>
            <label className="patient--checkbox">
              <input type="checkbox" />
              <span>Aliquet ut enim</span>
            </label>
            <label className="patient--checkbox">
              <input type="checkbox" />
              <span>Feugiat in quis bibendum</span>
            </label>
            <label className="patient--checkbox">
              <input type="checkbox" />
              <span>Ac ut pharetra tempus scelerisque</span>
            </label>
          </div>
        </div>
      </CardWrapper>
      <CardWrapper title="Сформированный план">
        <div className="patient-file">
          <p className="patient-file--name">Название.pdf</p>
          <div className="patient-file--size-more">
            <p>11,7 КБ</p>
            <button>
              <img src="/icon/more-horizontal-f.svg" alt="more" />
            </button>
          </div>
        </div>
      </CardWrapper>
      <div className="warning">
        <div className="warning__top">
          <p>Предупреждение</p>
          <button className="warning--btn">
            <img src="/icon/arrow-up-2-light-blue.svg" alt="arrow" />
          </button>
        </div>
        <div className={`warning__content ${open ? "open" : ""}`}>

        </div>
      </div>
      <div className="patient--btn">
        <Button text="Сформировать план"/>
      </div>
    </div>
  )
}

function PatientRehabilitationCard() {
  return (
    <div className="patient-block-card">
      <div className="patient-block-card__left">
        <CardWrapper title="Общие данные">
          <CustomInput title="1. ИИН" placeholder="012345678910"/>
          <CustomInput title="2. ФИО" placeholder="Иванов Иван Иванович"/>
          <CustomInput title="3. Дата рождения" placeholder="12.12.1998"/>
          <CustomRadio title="4. Пол" radio={["Мужской", "Женский"]} inputName="pol"/>
          <CustomInput title="5. Возраст" placeholder="25 лет"/>
          <CustomInput title="6. Национальность" placeholder="казах"/>
          <CustomRadio title="7. Житель" radio={["города", "села"]} inputName="resident"/>
          <CustomInput title="8. Адрес проживания" placeholder="Гаражная ул., 188, Голицыно 178820"/>
          <CustomInput title="9. Место работы / учебы / детского учреждения" placeholder="ФГУП ШатойСистемсГрупп"/>
          <CustomInput title="9.1. Должность / образование" placeholder="Управляющий"/>
          <CustomInput title="12. Тип возмещения" placeholder="Полное возмещение расходов"/>
          <CustomInput title="13. Социальный статусе" placeholder="Трудоспособный"/>
          <CustomRadio title="14. Пациент направлен" radio={["Да", "Нет"]} inputName="patientReferred"/>
          <CustomInput title="15. Тип госпитализации Код госпитализации" placeholder="Плановая госпитализация, 123456"/>
          <CustomInput title="Запись врача приемного покоя" placeholder="Врач Иванов А.Б., 03.01.2024, 10:30"/>
          <div className="patient-block--btn">
            <Button text="Запросить"/>
          </div>
        </CardWrapper>
        <CardWrapper title="Клинический диагноз:">
          <CustomInput title="16. Основное заболевание" placeholder="Инфаркт миокарда, Средний"/>
          <CustomInput title="17. Осложнения" placeholder="Инфаркт миокарда, Средний"/>
          <CustomInput title="18. Сопутствующее заболевания" placeholder="Инфаркт миокарда, Средний"/>
          <CustomInput title="19. Основной диагноз" placeholder="Код МКБ-10  |  Наименование заболевания"/>
          <CustomInput title="" placeholder="Код МК-59  |  Наименование операции"/>
          <CustomInput title="20. Уточняющий диагноз" placeholder="Код МКБ-10  |  Наименование заболевания"/>
          <div className="patient-block--btn">
            <Button text="Редактировать"/>
          </div>
        </CardWrapper>
        <CardWrapper title="Клинический диагноз:">
          <CustomInput title="Ф.И.О. (при его наличии) родственника" placeholder="Елена Иванова"/>
          <CustomInput title="Кем приходится" placeholder="Мать"/>
          <CustomInput title="Телефон" placeholder="+7 (123) 456-7890"/>
          <div className="patient-block--btn">
            <Button text="Добавить"/>
            <Button text="Сохранить"/>
          </div>
        </CardWrapper>
      </div>
      <div className="patient-block-card__right">
        <ul className="right-menu__list">
          <li className="active">Паспорт</li>
          {/* <li>Жалобы</li>
          <li>Анамнез заболевания</li>
          <li>Анамнез жизни</li> */}
          {/* <li>Status praesens</li>
          <li>Опорно двигательная систем</li>
          <li>Система органов дыхания</li>
          <li>Система органов кровообращения</li>
          <li>Система органов пищеварения</li>
          <li>Органы пищеварения брюшной полости</li>
          <li>Мочеполовая система</li>
          <li>Эндокринная система</li>
          <li>Нервная система и органы чувств</li> */}
          <div className="right-menu__dropdown-list active">
            <p>Методы исследования нарушений</p>
            <ul>
              <li>GMFM</li>
              <li>Шкала Бартела</li>
              <li>Шкала ВАШ</li>
              <li>Шкала Рэнкина</li>
            </ul>
          </div>
        </ul>
      </div>
    </div>
  )
}

export {PatientRehabilitationPlan, PatientRehabilitationCard}