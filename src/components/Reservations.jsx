import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getReservations } from '../Redux/reservations/reservationsSlice';
import ReservationsCard from './ReservationsCard';
import '../styles/Reservations.css'


function Reservations() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReservations());
  }, [dispatch]);

  const reservations = useSelector(state => state.reservations.data);

  return (
    <section className="res-container">
      <div><h1>My Reservations</h1></div>
      <div className="res-details">
        {reservations.map((reservation) => (
          <ReservationsCard reservation={reservation} key={reservation.id}/>
        ))}
      </div>
    </section>
  );
}

export default Reservations;
