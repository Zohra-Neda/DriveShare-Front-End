import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import HomePage from './routes/Home/HomePage';
import './styles/Reservations.css'
import { getCars } from './Redux/cars/carsSlice';
import { getCities } from './Redux/cities/citySlice';
import Reservations from './components/Reservations';
import Details from './routes/Home/Details';
import { Routes,Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import AddCar from "./components/AddCar";


const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCars())
    dispatch(getCities())
  })
  return (
    <main className='main'>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/details/:carId"element={<Details/>} ></Route>
        <Route path="/reservations"element={<Reservations/>} ></Route>
        <Route path="/add-car"element={<AddCar/>} ></Route>
      </Routes>
    </main>
  )
}

export default App