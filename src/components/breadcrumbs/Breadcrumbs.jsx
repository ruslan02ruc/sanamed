import { useLocation, useMatches, useNavigate } from 'react-router-dom';
import './Breadcrumbs.scss'

function Breadcrumbs() {
  let location = useLocation();
  const crumbs = location.pathname.split('/').filter(crumb => crumb !== '')

  const breadcrums = [
    { href: "doctor", text: "Врачи" },
    { href: "all", text: "Все" },
    { href: "favorites", text: "Избранные" },
    { href: "history-visits", text: "История посещений" },
    { href: "wishes-preferences", text: "Пожелания и предпочтения" },
    { href: "support", text: "Поддержка" },
    { href: "notifications", text: "Уведомления" },
    { href: "settings", text: "Настройки" },
    { href: "account", text: "Учетная Запись" },
    { href: "privacy", text: "Приватность" },
    { href: "communication", text: "Коммуникация" },
    { href: "care-yourself", text: "Забота о Себе" },
    { href: "family-settings", text: "Семейные Настройки" },
    { href: "safety", text: "Безопасность" },
    { href: "profile", text: "Профиль" },
    { href: "personal-data", text: "Личные данные" },
    { href: "medical-history", text: "Медицинская история" },
    { href: "health", text: "Здоровье" },
    { href: "patient-list", text: "Пациенты" }, // DEV
    { href: "patients", text: "Пациент" }, // DEV
    { href: "company", text: "Компании" },
    { href: "patient", text: "Пациент" }, // DEV
    { href: "rehabilitation-card", text: "Реабилитационная карта" },
    { href: "rehabilitation-plan", text: "План реабилитации" },
    { href: "status-analysis", text: "Аналитика состояния" },
    { href: "attachments", text: "вложения" },
    { href: "acupuncture", text: "Иглотерапия" },
    { href: "massage", text: "Массаж" },
    { href: "aerobics", text: "Аэробика" },
    { href: "doctor-profile", text: "Мой профиль" },
  ]

  const crumbRU = []

  for (const crumb of crumbs) {
    if (breadcrums.find(item => item.href === crumb) !== undefined) {
      crumbRU.push(breadcrums.find(item => item.href === crumb).text)
    } else {
      crumbRU.push(crumb)
    }
  }

  return (
    <div className='breadcrumbs'>
      <a className='breadcrumbs--back' href="#">Назад</a>
      <ul className='breadcrumbs__nav'>
        {
          crumbRU.map((item, key) => <li key={key} className='breadcrumbs__item'><a href="#">{item}</a></li>)
        }
      </ul>
    </div>
  )
}

export default Breadcrumbs