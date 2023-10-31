import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

// import HomePage from './routes/Home/HomePage';
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
  return (
    <main className='main'>
      {/* <HomePage /> */}
      <Reservations/>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/details/:carId"element={<Details/>} ></Route>
      </Routes>
    </main>
  )
}

export default App