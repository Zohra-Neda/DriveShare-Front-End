import { useSelector, useDispatch } from "react-redux";
import { getCars, deleteCar } from "../Redux/cars/carsSlice";
import { useEffect } from "react";

const DeleteCar = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  const cars = useSelector((state) => state.cars.data);

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteCar(e.target.id));
    // dispatch(getCars());
  }

  return (
    <div className="flex flex-col flex-wrap w-3/5 ">
      <h1 className="bg-white sm:w-full py-4 top-0">Delete Car</h1>
      <div className="flex flex-col flex-wrap">
        {cars.map((car) => (
          <div key={car.id} className="p-4 my-4 border border-black flex justify-between">
            <h3 className="text-3xl font-semibold">{car.id} {car.name}</h3>
            <button id={car.id} className="text-xl hover:text-red-500" onClick={handleDelete}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  )
};

export default DeleteCar;
