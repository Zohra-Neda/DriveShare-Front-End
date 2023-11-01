import Login from "./Login"
import { Outlet } from "react-router-dom"
import { useSelector } from "react-redux"

const RequireAuth = () => {
  const status = useSelector((state) => state.login.status)
  return (
    <>
      {status ? <Outlet /> : <Login />}
    </>
  )
}

export default RequireAuth
