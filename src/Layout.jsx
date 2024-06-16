import { Outlet } from "react-router-dom"
import LeftMenu from "./components/leftMenu/LeftMenu"
import RightContent from "./components/rightContent/RightContent"
import Table from "./components/table/Table"
import Statistics from "./components/statistics/Statistics"


function Layout({isDoctor}) {
  return (
    <>
      <div style={{display: 'grid', gridTemplateColumns: '240px auto', height: '100vh'}}>
        <LeftMenu isDoctor={isDoctor}/>
        <RightContent>
          <Outlet/>
        </RightContent>
      </div>
    </>
  )
}

export default Layout