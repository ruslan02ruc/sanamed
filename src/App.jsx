import { Navigate, Route, Routes, useLocation, useRoutes, useSearchParams } from "react-router-dom"
import PatientHome from "./pages/patientHome/PatientHome"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import Support from "./pages/support/Support"
import Notifications from "./pages/notifications/Notifications"
import Settings, { Account, CareYourself, Communication, FamilySettings, NotificationsSetting, Privacy, Safety } from "./pages/settings/Settings"
import WishesPreferences from "./pages/wishesPreferences/WishesPreferences"
import HistoryVisits from "./pages/historyVisits/HistoryVisits"
import Layout from "./Layout"
import Profile from "./pages/profile/Profile"
import Doctors, { DoctorsAll, DoctorsFavorites, MakeAppointment } from "./pages/doctors/Doctors"
import PatientList, { PatientTable } from "./pages/patientList/PatientList"
import RehabilitationPlan, { RehabilitationPlanTable } from "./pages/rehabilitationPlan/RehabilitationPlan"
import DoctorProfile from "./pages/doctorProfile/DoctorProfile"
import Patient, { PatientRehabilitationCard, PatientRehabilitationPlan } from "./pages/patient/Patient"
import { Children } from "react"
import PersonalData from "./components/personalData/PersonalData"
import MedicalHistory from "./components/medicalHistory/MedicalHistory"
import Health from "./components/health/Health"

function App() {
  let routes = useRoutes([
    {path: "/", element: <PatientHome />,},
    {path: "login", element: <Login /> },
    {path: "register", element: <Register /> },
    {
      path: "/",
      element: <Layout isDoctor={false}/>,
      children: [
        {path: "doctor", element: <Doctors />, children: [ 
          {path: "all", element: <DoctorsAll/>},
          {path: "all/:id", element: <MakeAppointment/>},
          {path: "favorites", element: <DoctorsFavorites/>},
          {path: "favorites/:id", element: <MakeAppointment/>},
          {path: "", element: <Navigate to="all"/>}
        ]},
        {path: "history-visits", element: <HistoryVisits />},
        {path: "wishes-preferences", element: <WishesPreferences />},
        {path: "support", element: <Support />},
        {path: "notifications", element: <Notifications />},
        {path: "settings", element: <Settings />, children: [ 
          {path: "account", element: <Account/>},
          {path: "notifications", element: <NotificationsSetting/>},
          {path: "privacy", element: <Privacy/>},
          {path: "communication", element: <Communication/>},
          {path: "care-yourself", element: <CareYourself/>},
          {path: "family-settings", element: <FamilySettings/>},
          {path: "safety", element: <Safety/>},
          {path: "", element: <Navigate to="account"/>}
        ]},
        {path: "profile", element: <Profile />, children: [ 
          {path: "personal-data", element: <PersonalData/>},
          {path: "medical-history", element: <MedicalHistory/>},
          {path: "health", element: <Health/>},
          {path: "history-visits", element: <HistoryVisits/>},
          {path: "", element: <Navigate to="personal-data"/>}
        ]},
      ],
    },
    {
      path: "/",
      element: <Layout isDoctor={true}/>,
      children: [
        {path: "patient-list", element: <PatientList />, children: [ 
          {path: "all", element: <PatientTable/>},
          {path: "patients", element: <PatientTable/>},
          {path: "company", element: <PatientTable/>},
          {path: "", element: <Navigate to="all"/>}
        ]},
        {path: "patient/:id", element: <Patient />, children: [ 
          {path: "rehabilitation-card", element: <PatientRehabilitationCard/>},
          {path: "rehabilitation-plan", element: <PatientRehabilitationPlan/>},
          {path: "status-analysis", element: <PatientRehabilitationPlan/>},
          {path: "attachments", element: <PatientRehabilitationPlan/>},
          {path: "", element: <Navigate to="rehabilitation-card"/>}
        ]},
        {path: "rehabilitation-plan", element: <RehabilitationPlan />, children: [ 
          {path: "all", element: <RehabilitationPlanTable/>},
          {path: "acupuncture", element: <RehabilitationPlanTable/>},
          {path: "massage", element: <RehabilitationPlanTable/>},
          {path: "aerobics", element: <RehabilitationPlanTable/>},
          {path: "", element: <Navigate to="all"/>}
        ]},
        {path: "doctor-profile", element: <DoctorProfile />},
        {path: "notifications", element: <Notifications />},
        {path: "settings", element: <Settings/>, children: [ 
          {path: "account", element: <Account/>},
          {path: "notifications", element: <NotificationsSetting/>},
          {path: "privacy", element: <Privacy/>},
          {path: "communication", element: <Communication/>},
          {path: "care-yourself", element: <CareYourself/>},
          {path: "family-settings", element: <FamilySettings/>},
          {path: "safety", element: <Safety/>},
          {path: "", element: <Navigate to="account"/>}
        ]},
        {path: "profile", element: <Profile/>},
      ],
    },
    {path: "*", element: <PatientHome/>,},
  ]);

  return (
    <div className='container'>
      {routes}
      
      {/* <Routes router={routes}/> */}
      {/* <Routes>
        {
          router.map(({path, element, title}, key) => (<Route path={path} element={element} key={key}/>))
        }
      </Routes> */}

      {/* <Routes>
        <Route path="/" element={<PatientHome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<Layout isDoctor={false}/>}>
          <Route path="doctor" element={<Doctors/>}/>
          <Route path="history-visits" element={<HistoryVisits/>}/>
          <Route path="wishes-preferences" element={<WishesPreferences />} />
          <Route path="support" element={<Support />} />

          <Route path="notifications" element={<Notifications />} />
          <Route path="settings" element={<Settings />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/" element={<Layout isDoctor={true}/>}>
          <Route path="patient-list" element={<PatientList/>}/>
          <Route path="patient" element={<Patient/>}/>
          <Route path="rehabilitation-plan" element={<RehabilitationPlan/>}/>
          <Route path="doctor-profile" element={<DoctorProfile/>}/>

          <Route path="notifications" element={<Notifications />} />
          <Route path="settings" element={<Settings />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<PatientHome />} />
      </Routes> */}
    </div>
  )
}

export default App

/*
  +PatientHome
  +Login
  +Register

  +doctors
    all
      doctor: (Иванова Анна Петровна)
        MakeAppointment (Записаться на прием)
    favorites
      doctor: (Иванова Анна Петровна)
        MakeAppointment (Записаться на прием)

  +history-visits
  +wishes-preferences
  +support
  +notifications

  +settings
    Account
    Notifications
    Privacy
    Communication
    Taking care of Yourself
    Family Settings
    Safety

  +profile
    PersonalData
    MedicalHistory
    Health
    HistoryVisits

  +patients
    All
    Patients
      Patient:
        Rehabilitation-card
        Rehabilitation-plan
        status-analysis
        attachments
    Company
  
  +rehabilitation-plan
    All
    Acupuncture
    Massage
    Aerobics
  
  doctor-profile
    working-hours
    sessions-conducted
    salary-history
*/