import { ToastContainer } from 'react-toastify'
import './App.css'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import HomePage from './routes/Home/HomePage';
import './styles/Reservations.css'
import { getCars } from './Redux/cars/carsSlice';
import { getCities } from './Redux/cities/citySlice';
import Reservations from './components/Reservations';
import Details from './routes/Home/Details';
import { Routes,Route } from 'react-router-dom';
import RequireAuth from './components/RequireAuth';


const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCars())
    dispatch(getCities())
  })
  return (
    <main className='main'>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<RequireAuth />} exact >
          <Route path="/" element={<HomePage />} exact />
          <Route path="/reservations" element={<Reservations />} exact />
        </Route>

        <Route path="/details/:carId"element={<Details/>} ></Route>
      </Routes>
    </main>
  )
}

export default App