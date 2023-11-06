import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectAllCars } from '../Redux/cars/carsSlice';
import { selectAllCities } from '../Redux/cities/citySlice';
import PropTypes from 'prop-types';


function ReservationsCard({reservation}) {
  const cars = useSelector(selectAllCars);
  const cities = useSelector(selectAllCities);
  const car = cars.find(c => c.id === reservation.car_id);
  const city = cities.find(c => c.id === reservation.city_id);
  return (
    <div>
      <div className="reservation">
        <div className="res-texts">
          <h5>{car ? car.name : "Unknown Car"}</h5>
          <p>City: {city ? city.name : "Unknown City"}</p>
          <p>Start Date: {reservation.start_date}</p>
          <p>End Date: {reservation.end_date}</p>
        </div>
      </div>
    </div>
  );
}
ReservationsCard.propTypes = {
    reservation: PropTypes.object.isRequired
}
export default ReservationsCard
