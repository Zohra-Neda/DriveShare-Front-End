// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllCars,selectLoading } from "../../Redux/cars/carsSlice";
import { useParams, useNavigate } from 'react-router-dom';
import { setCarToReserve } from '../../Redux/reservations/reservationsSlice';
import "../../assets/styles/details.css"

const Details = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cars = useSelector(selectAllCars);
  const isLoading = useSelector(selectLoading);

  const { carId } = useParams()
  const car = cars.filter((car) => car.id === Number(carId));

  if (isLoading) {
    return <div>Loading...</div>;
  }
  const handleReserve = () => {
    dispatch(setCarToReserve(car[0]));
    navigate('/reserve');
  }

  return (
    <>
       <div className='car-container'>
        <div key={car[0].id} className='car-details'>
          <div className='car-image'>
            <img src={car[0].image} alt={car[0].name} />
          </div>
          <div className='car-info'>
            <h2>{car[0].model}</h2>
            <h1 className='font-bold mb-2 name'>{car[0].name}</h1>
            <p className='mb-2 text-gray-500 text-sm description'>{car[0].description}</p>
            <h2 className='font-bold mb-2'>Price: {car[0].price}$</h2>
            <button
              onClick={handleReserve}
              type='button'
              className='reserve-button'
            >
              Reserve
            </button>
          </div>
        </div>
    </div>
    </>
  )
}

export default Details
