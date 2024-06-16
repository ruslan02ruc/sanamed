import './Profile.scss'
import ProfileDirectory from '../../components/profileDirectory/ProfileDirectory'
import PersonalData from '../../components/personalData/PersonalData'
import MedicalHistory from '../../components/medicalHistory/MedicalHistory'
import Health from '../../components/health/Health'
import HistoryVisits from '../../components/historyVisits/HistoryVisits'
import { Outlet } from 'react-router-dom'

function Profile() {
  const list = [
    {
      id: 1,
      name: "Личные данные",
      to: "personal-data"
    },
    {
      id: 2,
      name: "Медицинская история",
      to: "medical-history"
    },
    {
      id: 3,
      name: "Здоровье",
      to: "health"
    },
    {
      id: 4,
      name: "История посещений",
      to: "history-visits"
    }
  ]

  return (
    <div>
      <ProfileDirectory list={list}/>
      <Outlet/>
    </div>
  )
}

export default Profile