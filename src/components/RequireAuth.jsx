import Login from "./Login"
import { Outlet } from "react-router-dom"
import { useSelector } from "react-redux"

const RequireAuth = () => {
  const status = useSelector((state) => state.login.status)
  const user = useSelector((state) => state.login.user) || localStorage.getItem('user')
  return (
    <>
      {user || status ? <Outlet /> : <Login />}
    </>
  )
}

export default RequireAuth
