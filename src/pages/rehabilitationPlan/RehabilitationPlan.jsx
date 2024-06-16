import './RehabilitationPlan.scss'

import { useState } from 'react';
import ProfileDirectory from '../../components/profileDirectory/ProfileDirectory'
import Table from '../../components/table/Table';
import { Outlet } from 'react-router-dom';

function RehabilitationPlan() {
  const list = [
    {
      id: 1,
      name: "Все",
      to: "all"
    },
    {
      id: 2,
      name: "Иглотерапия",
      to: "acupuncture"
    },
    {
      id: 3,
      name: "Массаж",
      to: "massage"
    }, {
      id: 4,
      name: "Аэробика",
      to: "aerobics"
    }
  ]

  return (
    <div className="patient-list">
      <ProfileDirectory list={list}/>
      <Outlet/>
    </div>
  )
}

export default RehabilitationPlan

function RehabilitationPlanTable() {
  return (
    <Table/>
  )
}

export {RehabilitationPlanTable}