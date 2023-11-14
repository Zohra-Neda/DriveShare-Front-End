import { useSelector, useDispatch } from "react-redux";
import { getCars, deleteCar } from "../Redux/cars/carsSlice";
import { useEffect } from "react";

const DeleteCar = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  const cars = useSelector((state) => state.cars.data);
  const user = useSelector((state) => state.login.user);
  const myCars = cars.filter((car) => car.user_id === user.id)

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteCar(e.target.id));
  }

  return (
    <div className="flex flex-col delete-section">
      <h1 className="bg-white sm:w-full py-4 top-0">Delete Car</h1>
      <div className="flex flex-col flex-wrap">
        {Cars.map((car) => (
          <div key={car.id} className="p-4 my-4 border border-black flex justify-between">
            <h3 className="text-3xl font-semibold">{car.model} {car.name}</h3>
            <button id={car.id} className="text-xl hover:text-red-500" onClick={handleDelete}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  )
};

export default DeleteCar;
