import { useSelector, useDispatch } from "react-redux";
import { getCars, selectAllCars } from "../Redux/cars/carsSlice";
import { useEffect } from "react";

const DeleteCar = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  const cars = useSelector((state) => state.cars.data);
  console.log(cars);

  return (
    <div className="lg:w-4/5 lg:ml-[20%] flex flex-col flex-wrap lg:h-screen overflow-scroll">
      <h1 className="bg-white sm:w-full py-4 fixed top-0">Delete Car</h1>
      <div className="flex flex-col flex-wrap">
        {cars.map((car) => (
          <div key={car.id} className="p-4 my-4 border border-black flex justify-between">
            <h3 className="text-3xl font-semibold">{car.name}</h3>
            <button className="text-xl hover:text-red-500">Delete</button>
          </div>
        ))}
      </div>
    </div>
  )
};

export default DeleteCar;
