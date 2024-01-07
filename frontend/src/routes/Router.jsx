import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Contact from '../pages/Contact'
import DoctorDetails from '../pages/Doctors/DoctorDetails'
import Doctors from '../pages/Doctors/Doctors'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Services from '../pages/Services'
import SignUp from '../pages/SignUp'
import MyAccount from '../Dashboard/user-account/MyAccount'
import Dashboard from '../Dashboard/doctor-account/Dashboard'
import ProtectedRoute from './ProtectedRoute'
import AdminView from '../pages/AdminView'

const Router = () => {
  return (
    
      <Routes>
        <Route path= "/" element = {<Home/>} />
        <Route path= "/home" element = {<Home/>} />
        <Route path= "/doctors" element = {<Doctors/>} />
        <Route path= "/doctors/:id" element = {<DoctorDetails/>} />
        <Route path= "/login" element = {<Login/>} />
        <Route path= "/register" element = {<SignUp/>} />
        <Route path= "/contact" element = {<Contact/>} />
        <Route path= "/services" element = {<Services/>} />
        <Route path= "/adminView" element = {<AdminView />} />
        <Route path= "/users/profile/me" element = {<ProtectedRoute allowedRoles={['patient']}> <MyAccount /> </ProtectedRoute>} />
        <Route path= "/doctors/profile/me" element = {<ProtectedRoute allowedRoles={['doctor']}> <Dashboard /> </ProtectedRoute>} />
     </Routes>
   
  )
}

export default Router
