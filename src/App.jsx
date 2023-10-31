import 'bootstrap/dist/css/bootstrap.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import HomePage from './routes/Home/HomePage';
import { getCars } from './Redux/cars/carsSlice';
import { getCities } from './Redux/cities/citySlice';
import Reservations from './components/Reservations';
import ReservationForm from './components/ReservationForm';
import Details from './routes/Home/Details';
import { Routes,Route } from 'react-router-dom';


const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCars())
    dispatch(getCities())
  })
  return (
      <Routes>
        <Route path='/reservations' element={<Reservations/>} />
        <Route path='/reserve' element={ <ReservationForm/> }  />
        <Route path="/" element={<HomePage />} exact />
        <Route path="/details/:carId" element={<Details/>} ></Route>
      </Routes>
  )
}

export default App