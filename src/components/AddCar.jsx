import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { postCar } from "../Redux/cars/carsSlice"
import {
    selectPosting,
    selectPostingError,
    selectPostingFailed,
} from "../Redux/cars/carsSlice"

import { selectAllCities } from "../Redux/cities/citySlice"

const AddCar = () => {
  const dispatch = useDispatch();

  const posting = useSelector(selectPosting);
  const postingError = useSelector(selectPostingError);
  const postingFailed = useSelector(selectPostingFailed);

  const cities = useSelector(selectAllCities);

  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const car = {
      name,
      image,
      description,
      city_id: city,
    }

    try{
        dispatch(postCar(car));
        setName('');
        setImage('');
        setDescription('');
    }catch(err){
        console.log(err);
    }
  }
  return (
    <div className="car-form">
        <h2>Add your car to our <span>collection</span></h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">
                Car name:<br />
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <label htmlFor="">
                Car image:<br />
                <input
                    type="text"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
            </label>
            <label htmlFor="">
                Car price:<br />
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </label>
            <label htmlFor="">
                Car description<br />
                <textarea
                    name=""
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </label>
            <select value={city} onChange={(e) => setCity(e.target.value)}>
                <option value="">Select City</option>
                {cities.map((city) => (
                    <option key={city.id} value={city.id}>
                        {city.name}
                    </option>
                ))}
            </select>
            <button type="submit">
                { posting ? 'Posting...' : 'Add Car' }
            </button>
            { postingFailed && <p>{postingError}</p>}
        </form>
    </div>
  )
}

export default AddCar