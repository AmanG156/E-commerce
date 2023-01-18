import Cookies from 'js-cookie'
import React from 'react'
import { Navigate,Outlet} from "react-router-dom"
export default function PrivateRoute() {
  let login = Cookies.get("login")
 
  return (
   login ? <Outlet/> : <Navigate to="/Pages/Login"/>
  )
}
