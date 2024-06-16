import { useState } from 'react';
import ProfileDirectory from '../../components/profileDirectory/ProfileDirectory'
import './Settings.scss'
import Button from '../../components/button/Button';
import { Outlet } from 'react-router-dom';

function Settings() {
  const list = [
    {
      id: 1,
      name: "Учетная Запись",
      to: "account"
    },
    {
      id: 2,
      name: "Уведомления",
      to: "notifications"
    },
    {
      id: 3,
      name: "Приватность",
      to: "privacy"
    },
    {
      id: 4,
      name: "Коммуникация",
      to: "communication"
    },
    {
      id: 5,
      name: "Забота о Себе",
      to: "care-yourself"
    },
    {
      id: 6,
      name: "Семейные Настройки",
      to: "family-settings"
    },
    {
      id: 7,
      name: "Безопасность",
      to: "safety"
    },
  ]

  return (
    <div className="settings">
      <ProfileDirectory list={list}/>
      <Outlet/>
      {/* <div className={`settings-block ${activeTab === 1 ? "active": "passive"}`}>
        <label className="settings--label-text">
          Имя и Фамилия
          <input type="text" value="Иванова Мария Александровна" />
        </label>
        <label className="settings--label-text">
          Электронная Почта
          <input type="email" placeholder="maria.ivanova@example.com"/>
        </label>
        <label className="settings--label-text">
          Пароль
          <input type="password" placeholder="**********"/>
        </label>
        <label className="settings--label-select">
          Язык Интерфейса
          <select>
            <option value="language-1">Русский</option>
            <option value="language-2">Казахский</option>
            <option value="language-3">Английский</option>
          </select>
        </label>
      </div> */}
      {/* <div className={`settings-block ${activeTab === 2 ? "active": "passive"}`}>
        <label className="settings--label-radio">
          Уведомления по Электронной Почте
          <div>
            <label>
              <input type="radio" name="s"/>Включить
            </label>
            <label>
              <input type="radio" name="s"/>Отключить
            </label>
          </div>
        </label>
        <label className="settings--label-radio">
          Уведомления по SMS
          <div>
            <label>
              <input type="radio" name="s"/>Включить
            </label>
            <label>
              <input type="radio" name="s"/>Отключить
            </label>
          </div>
        </label>
        <label className="settings--label-select">
          Предпочтительное Время Уведомлений
          <select>
            <option value="notif-1">Утро</option>
            <option value="notif-2">Вечер</option>
          </select>
        </label>
      </div> */}
      {/* <div className={`settings-block ${activeTab === 3 ? "active": "passive"}`}>
        <label className="settings--label-radio">
          Общий Доступ к Медицинской Информации
          <div>
            <label>
              <input type="radio" name="s"/>Включить
            </label>
            <label>
              <input type="radio" name="s"/>Отключить
            </label>
          </div>
        </label>
        <label className="settings--label-radio">
          Разрешение на Участие в Клинических Исследованиях
          <div>
            <label>
              <input type="radio" name="s"/>Включить
            </label>
            <label>
              <input type="radio" name="s"/>Отключить
            </label>
          </div>
        </label>
        <label className="settings--label-select">
          Уровень Прозрачности Личных Данных
          <select>
            <option value="notif-1">Стандартный</option>
            <option value="notif-2">Стандартный</option>
          </select>
        </label>
      </div>
      <div className={`settings-block ${activeTab === 4 ? "active": "passive"}`}>
        <label className="settings--label-select">
        Предпочтение Врача
          <select>
            <option value="notif-1">Женщины</option>
            <option value="notif-2">Мужчина</option>
          </select>
        </label>
        <label className="settings--label-select">
          Предпочтение Канала Связи с Врачом
          <select>
            <option value="notif-1">Электронная Почта</option>
            <option value="notif-2">Телефон</option>
          </select>
        </label>
      </div> */}
      {/* <div className={`settings-block ${activeTab === 5 ? "active": "passive"}`}>
        <label className="settings--label-radio">
          Напоминания о Приеме Лекарств
          <div>
            <label>
              <input type="radio" name="s"/>Включить
            </label>
            <label>
              <input type="radio" name="s"/>Отключить
            </label>
          </div>
        </label>
        <label className="settings--label-radio">
          Поддержание Физической Активности
          <div>
            <label>
              <input type="radio" name="s"/>Включить
            </label>
            <label>
              <input type="radio" name="s"/>Отключить
            </label>
          </div>
        </label>
        <label className="settings--label-select">
          Диетические Рекомендации
          <select>
            <option value="notif-1">Учитываются</option>
            <option value="notif-2">Не учитываются</option>
          </select>
        </label>
      </div> */}
      {/* <div className={`settings-block ${activeTab === 6 ? "active": "passive"}`}>
        <label className="settings--label-radio">
          Разрешение на Доступ Родственников к Медицинской Истории
          <div>
            <label>
              <input type="radio" name="s"/>Включить
            </label>
            <label>
              <input type="radio" name="s"/>Отключить
            </label>
          </div>
        </label>
        <label className="settings--label-radio">
          Уведомления Родственникам о Состоянии Здоровья
          <div>
            <label>
              <input type="radio" name="s"/>Включить
            </label>
            <label>
              <input type="radio" name="s"/>Отключить
            </label>
          </div>
        </label>
      </div> */}
      {/* <div className={`settings-block ${activeTab === 7 ? "active": "passive"}`}>
        <label className="settings--label-radio">
          Двухфакторная Аутентификация
          <div>
            <label>
              <input type="radio" name="s"/>Включить
            </label>
            <label>
              <input type="radio" name="s"/>Отключить
            </label>
          </div>
        </label>
        <label className="settings--label-radio">
          История Входов
          <div>
            <label>
              <input type="radio" name="s"/>Включить
            </label>
            <label>
              <input type="radio" name="s"/>Отключить
            </label>
          </div>
        </label>
      </div> */}
      <div className="settings--btn">
        <Button text="Сохранить"/>
      </div>
    </div>
  )
}

export default Settings


function Account() {
  return (
    <div className={`settings-block`}>
      <label className="settings--label-text">
        Имя и Фамилия
        <input type="text" value="Иванова Мария Александровна" />
      </label>
      <label className="settings--label-text">
        Электронная Почта
        <input type="email" placeholder="maria.ivanova@example.com"/>
      </label>
      <label className="settings--label-text">
        Пароль
        <input type="password" placeholder="**********"/>
      </label>
      <label className="settings--label-select">
        Язык Интерфейса
        <select>
          <option value="language-1">Русский</option>
          <option value="language-2">Казахский</option>
          <option value="language-3">Английский</option>
        </select>
      </label>
    </div>
  )
}

function NotificationsSetting() {
  return (
    <div className={`settings-block`}>
      <label className="settings--label-radio">
        Уведомления по Электронной Почте
        <div>
          <label>
            <input type="radio" name="s"/>Включить
          </label>
          <label>
            <input type="radio" name="s"/>Отключить
          </label>
        </div>
      </label>
      <label className="settings--label-radio">
        Уведомления по SMS
        <div>
          <label>
            <input type="radio" name="s"/>Включить
          </label>
          <label>
            <input type="radio" name="s"/>Отключить
          </label>
        </div>
      </label>
      <label className="settings--label-select">
        Предпочтительное Время Уведомлений
        <select>
          <option value="notif-1">Утро</option>
          <option value="notif-2">Вечер</option>
        </select>
      </label>
    </div>
  )
}

function Privacy() {
  return (
    <div className={`settings-block`}>
      <label className="settings--label-radio">
        Общий Доступ к Медицинской Информации
        <div>
          <label>
            <input type="radio" name="s"/>Включить
          </label>
          <label>
            <input type="radio" name="s"/>Отключить
          </label>
        </div>
      </label>
      <label className="settings--label-radio">
        Разрешение на Участие в Клинических Исследованиях
        <div>
          <label>
            <input type="radio" name="s"/>Включить
          </label>
          <label>
            <input type="radio" name="s"/>Отключить
          </label>
        </div>
      </label>
      <label className="settings--label-select">
        Уровень Прозрачности Личных Данных
        <select>
          <option value="notif-1">Стандартный</option>
          <option value="notif-2">Стандартный</option>
        </select>
      </label>
    </div>
  )
}

function Communication() {
  return (
    <div className={`settings-block`}>
      <label className="settings--label-select">
      Предпочтение Врача
        <select>
          <option value="notif-1">Женщины</option>
          <option value="notif-2">Мужчина</option>
        </select>
      </label>
      <label className="settings--label-select">
        Предпочтение Канала Связи с Врачом
        <select>
          <option value="notif-1">Электронная Почта</option>
          <option value="notif-2">Телефон</option>
        </select>
      </label>
    </div>
  )
}

function CareYourself() {
  return (
    <div className={`settings-block`}>
      <label className="settings--label-radio">
        Напоминания о Приеме Лекарств
        <div>
          <label>
            <input type="radio" name="s"/>Включить
          </label>
          <label>
            <input type="radio" name="s"/>Отключить
          </label>
        </div>
      </label>
      <label className="settings--label-radio">
        Поддержание Физической Активности
        <div>
          <label>
            <input type="radio" name="s"/>Включить
          </label>
          <label>
            <input type="radio" name="s"/>Отключить
          </label>
        </div>
      </label>
      <label className="settings--label-select">
        Диетические Рекомендации
        <select>
          <option value="notif-1">Учитываются</option>
          <option value="notif-2">Не учитываются</option>
        </select>
      </label>
    </div>
  )
}

function FamilySettings() {
  return (
    <div className={`settings-block`}>
      <label className="settings--label-radio">
        Разрешение на Доступ Родственников к Медицинской Истории
        <div>
          <label>
            <input type="radio" name="s"/>Включить
          </label>
          <label>
            <input type="radio" name="s"/>Отключить
          </label>
        </div>
      </label>
      <label className="settings--label-radio">
        Уведомления Родственникам о Состоянии Здоровья
        <div>
          <label>
            <input type="radio" name="s"/>Включить
          </label>
          <label>
            <input type="radio" name="s"/>Отключить
          </label>
        </div>
      </label>
    </div>
  )
}

function Safety() {
  return (
    <div className={`settings-block`}>
      <label className="settings--label-radio">
        Двухфакторная Аутентификация
        <div>
          <label>
            <input type="radio" name="s"/>Включить
          </label>
          <label>
            <input type="radio" name="s"/>Отключить
          </label>
        </div>
      </label>
      <label className="settings--label-radio">
        История Входов
        <div>
          <label>
            <input type="radio" name="s"/>Включить
          </label>
          <label>
            <input type="radio" name="s"/>Отключить
          </label>
        </div>
      </label>
    </div>
  )
}

export {Account, NotificationsSetting, Privacy, Communication, CareYourself, FamilySettings, Safety}