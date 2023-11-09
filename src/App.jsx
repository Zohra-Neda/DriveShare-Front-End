import { ToastContainer } from 'react-toastify'
import './App.css'
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
import RequireAuth from './components/RequireAuth';
import Sidebar from './components/Sidebar';
import AddCar from "./components/AddCar";
import DeleteCar from './components/DeleteCar';

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCars())
    dispatch(getCities())
  })
  return (
    <main className='main'>
      <ToastContainer />
      <Sidebar/>
      <Routes>
        <Route path="/" element={<RequireAuth />} exact >
          <Route path="/" element={<HomePage />} exact />
          <Route path="/reservations" element={<Reservations />} exact />
          <Route path="/details/:carId"element={<Details/>} ></Route>
          <Route path="/reserve"element={<ReservationForm/>} ></Route>
          <Route path="/add-car"element={<AddCar/>} ></Route>
          <Route path="/delete-car"element={<DeleteCar />} ></Route>
        </Route>
      </Routes>
      </main>
  )
}

export default App;