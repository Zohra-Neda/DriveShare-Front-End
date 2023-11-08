import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getReservations } from '../Redux/reservations/reservationsSlice';
import ReservationsCard from './ReservationsCard';
import '../styles/Reservations.css'


const Reservations = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReservations());
  }, [dispatch]);

  const reservations = useSelector(state => state.reservations.data);

  return (
    <section className="res-container">
      <div><h1>My Reservations</h1></div>
      <div className="res-details">
        {reservations.length ? reservations.map((reservation) => (
          <ReservationsCard reservation={reservation} key={reservation.id}/>
        )) : <h2>No reservations</h2>}
      </div>
    </section>
  );
}

export default Reservations;
