import { useEffect } from "react"
import Login from "./Login"
import { Outlet } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { refresh } from "../Redux/login/loginSlice"

const RequireAuth = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refresh())
  }, [dispatch])
  const user = useSelector((state) => state.login.user) || localStorage.getItem('user')
  return (
    <>
      {user ? <Outlet /> : <Login />}
    </>
  )
}

export default RequireAuth
