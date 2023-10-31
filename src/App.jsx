import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

// import HomePage from './routes/Home/HomePage';
import './styles/Reservations.css'
import { getCars } from './Redux/cars/carsSlice';
import { getCities } from './Redux/cities/citySlice';
import Reservations from './components/Reservations';


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
    </main>
  )
}

export default App