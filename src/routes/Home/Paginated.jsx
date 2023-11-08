import { useState } from "react";
import PropTypes from 'prop-types';
import car from '../../assets/car.png';
import { NavLink } from "react-router-dom";
const Pagineted = ({ items }) => {
    const [startIndex, setStartIndex] = useState(0);

    const itemsToDisplay = items.slice(startIndex, startIndex + 3);

    const handlePrev = () => {
        if (startIndex > 0) {
        setStartIndex(startIndex - 3);
        }
    };

    const handleNext = () => {
        if (startIndex + 3 < items.length) {
        setStartIndex(startIndex + 3);
        }
    };

    return (
        <>
            <ul className="car-list">
                {itemsToDisplay?.length ? itemsToDisplay?.map((item) => (
                    <NavLink to={`details/${item.id}`} key={item.id}>
                    <li
                        className='car cursor-pointer'
                    >
                        <div className="car-head">
                            <img src={item.image} alt={item.name} />
                            <span
                                className={`${item.available ? 'available' : 'reserved'}`}
                            >
                                {item.available ? 'available' : 'reserved'}
                            </span>
                        </div>
                        <h3>{item.model}</h3>
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                    </li>
                    </NavLink>
                )) : <h2>No items</h2>}
            </ul>

            <button
                onClick={handlePrev}
                disabled={startIndex === 0}
                className="prev-btn"
            >
                &lt;
            </button>
            <button
                onClick={handleNext}
                disabled={startIndex + 3 >= items.length}
                className="next-btn"
            >
                &gt;
            </button>
        </>
    )
}

Pagineted.propTypes = {
    items: PropTypes.array.isRequired,
}

export default Pagineted