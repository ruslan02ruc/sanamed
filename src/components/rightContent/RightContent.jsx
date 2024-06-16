import './RightContent.scss'
import { NavLink } from "react-router-dom";
import Input from "../input/Input"
import Breadcrumbs from '../breadcrumbs/Breadcrumbs'

function RightContent({children}) {
  return (
    <div className="right-content">
      <div className="right-content__menu">
        <Input placeholder="Search for..." type="search"/>
        <div className='right-content__list'>
          <NavLink to="/notifications" activeClassName="active" className="right-content__item bell">
            <img src="/icon/bell.svg" alt="icon"/>
            <span>9</span>
          </NavLink>
          <NavLink to="/settings/account" activeClassName="active" className='right-content__item settings'>
            <img src="/icon/settings.svg" alt="icon"/>
          </NavLink>
          <NavLink to="/profile/personal-data" activeClassName="active" className='right-content__item profile'>
            <img src="/User Thumb.png" alt="icon"/>
            <div>
              <p>Айтимов Мади</p>
              <p>Пациент</p>
            </div>
          </NavLink>
        </div>
      </div>
      <Breadcrumbs/>
      {children}
    </div>
  )
}

export default RightContent