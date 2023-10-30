import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getReservations } from '../Redux/reservations/reservationsSlice';

function Reservations() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getReservations());
    }, [dispatch]); // Empty dependency array to ensure it runs once.

    const reservations = useSelector(state => state.reservationsSlice);
    
    return (
        <section className="res-container">
            <div><h1>My Reservations</h1></div>
            <div className="res-details">
        {reservations.map((reservation) => (
          <div key={reservation.id}>
            <div className="reservation">
              <div className="res-texts">
                <h5>{reservation.car_id}</h5>
                <p>
                  City:
                  {reservation.city_id}
                </p>
                <p>
                  Star_Date:
                  {reservation.start_date}
                        </p>
                        <p>
                  End_Date:
                  {reservation.end_date}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
        </section>
    );
}

export default Reservations;
