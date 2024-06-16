import { Link, NavLink } from 'react-router-dom'
import './ProfileDirectory.scss'

function ProfileDirectory({list}) {
  return (
    <ul className="profile-directory">
      {
        list.map(item => <li key={item.id}>
          <NavLink to={item.to} activeClassName="active">{item.name}</NavLink>
        </li>)
      }
      <li className="profile-directory--more"></li>
    </ul>
  )
}

export default ProfileDirectory