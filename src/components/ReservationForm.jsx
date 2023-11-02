import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReservations, postReservations } from '../Redux/reservations/reservationsSlice';
import '../styles/reserve.css'


function ReservationForm() {
  const dispatch = useDispatch();
  const cars = useSelector(state => state.cars.data); // Updated state path to access the cars array
  const cities = useSelector(state => state.city.data); // Updated state path to access the cities array

  useEffect(() => {
    dispatch(getReservations());
  }, [dispatch]);

  const [formData, setFormData] = useState({
    fullName: '',
    car_id: '',
    city: '',
    start_date: '',
    end_date: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postReservations(formData));
  }

  const { fullName, car_id, city, start_date, end_date } = formData;

  return (
    <section>
      <div className="reservation-container">
        <h1>Create New Reservation</h1>
        <form
      id="reservation-form"
      className="d-flex flex-column align-items-center g-4"
      onSubmit={handleSubmit}
    >
      <input
        className="form-control mb-3 mt-3"
        type="text"
        value={fullName}
        onChange={handleChange}
            name="fullName"
            disabled
        placeholder="Full Name" // Add a placeholder
      />
      <div className="row g-2 mb-3">
        <div className="col select-wrapper">
          <select
            className="form-select"
            value={car_id}
            onChange={handleChange}
            name="car_id"
          >
            <option value="">Select a car</option>
            {cars?.map((car) => (
              <option key={car.id} value={car.id}>
                {car.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col select-wrapper">
          <select
            className="form-select"
            value={city}
            onChange={handleChange}
            name="city"
          >
            <option value="">Select a city</option>
            {cities?.map((city) => (
              <option key={city.id} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <input
        className="form-control mb-3"
        type="date"
        value={start_date}
        onChange={handleChange}
        name="start_date"
      />
      <input
        className="form-control mb-3"
        type="date"
        value={end_date}
        onChange={handleChange}
        name="end_date"
      />
      <button type="submit" className="btn btn-light text-success">
        Create Reservation
      </button>
    </form>
      </div>
    </section>
  );
}

export default ReservationForm;
