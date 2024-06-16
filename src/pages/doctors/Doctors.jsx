import { useState } from 'react';
import CardPersonGray from '../../components/cardPersonGray/CardPersonGray'
import './Doctors.scss'
import ProfileDirectory from '../../components/profileDirectory/ProfileDirectory';
import CalendarForm from '../../components/calendar/Calendar';
import { Outlet } from 'react-router-dom';

function Doctors() {
  const list = [
    {
      id: 1,
      name: "Все",
      to: "all"
    },
    {
      id: 2,
      name: "Избранные",
      to: "favorites"
    },
  ]

  return (
    <div>
      <ProfileDirectory list={list}/>
      <Outlet/>
    </div>
  )
}

export default Doctors


function DoctorsAll() {
  return (
    <div className="doctors">
      <CardPersonGray/>
      <CardPersonGray/>
      <CardPersonGray/>
      <CardPersonGray/>
    </div>
  )
}

function DoctorsFavorites() {
  return (
    <div className="doctors">
      <CardPersonGray/>
      <CardPersonGray/>
      <CardPersonGray/>
      <CardPersonGray/>
    </div>
  )
}

function MakeAppointment() {
  return (
    <div className="doctors">
      <CardPersonGray/>
      <div className="calendar">
        <CalendarForm/>
        <div className="calendar-time">
          <div className="calendar-time__col">
            <p>Свободное время врача</p>
            <div className="calendar-time--btn">
              <button>08 : 00</button>
              <button>08 : 30</button>
              <button>09 : 30</button>
              <button>10 : 30</button>
              <button>11 : 00</button>
              <button>14 : 00</button>
            </div>
          </div>
          <div className="calendar-time__col">
            <p>Комментарии</p>
            <input className="calendar-time--input" type="text" placeholder="Начните набирать текст сообщения ..." />
          </div>
        </div>
      </div>
    </div>
  )
}

export {DoctorsAll, DoctorsFavorites, MakeAppointment}