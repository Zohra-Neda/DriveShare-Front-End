// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useSelector} from 'react-redux'
import image from '../../assets/car.png';
import { selectAllCars,selectLoading } from "../../Redux/cars/carsSlice";
import { useParams, NavLink } from 'react-router-dom';
import "../../assets/styles/details.css"

const Details = () => {
    const cars = useSelector(selectAllCars);
    const isLoading = useSelector(selectLoading);

    const { carId } = useParams()
    const car = cars.filter((car) => car.id === Number(carId))

    if (isLoading) {
        return <div>Loading...</div>;
      }
  return (
    <>
       <div className='car-container'>
        <div key={car[0].id} className='car-details'>
          <div className='car-image'>
            <img src={image} alt={car[0].name} />
          </div>
          <div className='car-info'>
            <h2>{car[0].model}</h2>
            <h1 className='font-bold mb-2 name'>{car[0].name}</h1>
            <p className='mb-2 text-gray-500 text-sm description'>{car[0].description}</p>
            <h2 className='font-bold mb-2'>Price: {car[0].price}$</h2>
            <NavLink to='/reserve' className='reserve-button'>
              Reserve
            </NavLink>
          </div>
        </div>
    </div>
    </>
  )
}

export default Details
