import { ToastContainer } from 'react-toastify'
import './App.css'
import Login from './Components/Login'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import HomePage from './routes/Home/HomePage';
import './styles/Reservations.css'
import { getCars } from './Redux/cars/carsSlice';
import { getCities } from './Redux/cities/citySlice';
import Reservations from './components/Reservations';
import Details from './routes/Home/Details';
import { Routes,Route } from 'react-router-dom';


const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCars())
    dispatch(getCities())
  })

  if (!localStorage.getItem('user')) {
    return (
      <>
        <ToastContainer />
        <Login />
      </>
    )
  }

  return (
    <main className='main'>
      <HomePage />
      <Reservations/>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/details/:carId"element={<Details/>} ></Route>
      </Routes>
    </main>
  )
}

export default App