import './PatientList.scss'

import { useState } from 'react';
import ProfileDirectory from '../../components/profileDirectory/ProfileDirectory'
import Table from '../../components/table/Table';
import { Outlet } from 'react-router-dom';

function PatientList() {
  const [activeTab, setActiveTab] = useState(1);

  const handleChange = (value) => {
    setActiveTab(value);
  };

  const list = [
    {
      id: 1,
      name: "Все",
      to: "all"
    },
    {
      id: 2,
      name: "Пациенты",
      to: "patients"
    },
    {
      id: 3,
      name: "Компании",
      to: "company"
    }
  ]

  return (
    <div className="patient-list">
      <ProfileDirectory list={list} toggleTab={handleChange} activeTab={activeTab}/>
      <Outlet/>
    </div>
  )
}

export default PatientList

function PatientTable() {
  return (
    <Table/>
  )
}

export {PatientTable}