import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { getReservations, postReservations } from '../Redux/reservations/reservationsSlice';

function ReservationForm() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getReservations());
    }, [dispatch]); // Empty dependency array to ensure it runs once.

  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postReservations(name))
  }
    
    return (
         <form
      id="reservation-form"
      className="d-flex flex-column align-items-center g-4"
    >
      <input
        className="form-control mb-3"
        type="text"
        value={fullName}
        disabled
      />
      <div className="row g-2 mb-3">
        {!carSelected && (
          <div className="col select-wrapper">
            <select
              className="form-select"
              value={formData.service_id}
              onChange={handleChange}
              name="service_id"
            >
              <option value="">Select a service</option>
              {cars.map((car) => (
                <option key={car.id} value={car.id}>
                  {car.name}
                </option>
              ))}
            </select>
          </div>
        )}
        <div className="col select-wrapper">
          <select
            className="form-select"
            value={formData.city}
            onChange={handleChange}
            name="city"
          >
            <option value="">Select a location</option>
            {locations.map((location) => (
              <option key={location.id} value={location.name}>
                {location.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <input
        className="form-control mb-3"
        type="date"
        value={formData.date}
        onChange={handleChange}
        name="date"
      />
      <button type="submit" onClick={handleSubmit} className="btn btn-light text-success">
        Create Reservation
      </button>
    </form>
    );
}

export default ReservationForm;
