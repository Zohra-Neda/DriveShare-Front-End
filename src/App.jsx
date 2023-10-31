
import './App.css'
import './styles/Reservations.css'
import Reservations from './components/Reservations'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import HomePage from './routes/Home/HomePage';
import { getCars } from './Redux/cars/carsSlice';
import { getCities } from './Redux/cities/citySlice';


const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCars())
    dispatch(getCities())
  })
  return (
    <>
      <Reservations/>
    <main className='main'>
        <HomePage />
    </main>
    </>
  )
}

export default App;
