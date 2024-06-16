import './LeftMenu.scss'
import { Link, NavLink } from "react-router-dom";

function LeftMenu({isDoctor}) {
  const listPatient = [
    {
      id: 1,
      to: "/doctor",
      src: "/icon/home.svg",
      name: "Врачи"
    },
    {
      id: 2,
      to: "/history-visits",
      src: "/icon/folders.svg",
      name: "История посещений"
    },
    {
      id: 3,
      to: "/wishes-preferences",
      src: "/icon/tags.svg",
      name: "Пожелания и предпочтения"
    },
    {
      id: 4,
      to: "/support",
      src: "/icon/users.svg",
      name: "Поддержка"
    },
  ]

  const listDoctor = [
    {
      id: 1,
      to: "/patient-list",
      src: "/icon/home.svg",
      name: "Пациенты"
    },
    {
      id: 2,
      to: "/rehabilitation-plan",
      src: "/icon/pictures.svg",
      name: "План реабилитации"
    },
    {
      id: 3,
      to: "/diagnoses",
      src: "/icon/folders.svg",
      name: "Диагнозы"
    },
    {
      id: 4,
      to: "/npa",
      src: "/icon/tags.svg",
      name: "НПА"
    },
    {
      id: 5,
      to: "/list-literature",
      src: "/icon/users.svg",
      name: "Список лит-ры"
    },
  ]

  return (
    <div className='left-menu'>
      <Link to="/">
        <div className='logo'>
          <img src="/logo.svg"/>
          <span>Human Recovery</span>
        </div>
      </Link>
      <div className="left-menu__nav">
        {
          isDoctor ? (
            listDoctor.map(item => (
              <NavLink key={item.id} to={item.to} activeClassName="active" className="left-menu__nav--item"><img src={item.src} alt="icon"/>{item.name}</NavLink>
            ))
          ) : (
            listPatient.map(item => (
              <NavLink key={item.id} to={item.to} activeClassName="active" className="left-menu__nav--item"><img src={item.src} alt="icon"/>{item.name}</NavLink>
            ))
          )
        }
        <button className='left-menu__nav--item logout'><img src="/login.svg" alt="icon" />Врачи</button>
      </div>
    </div>
  )
}

export default LeftMenu