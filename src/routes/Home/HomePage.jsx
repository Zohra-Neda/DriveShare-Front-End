import { useSelector } from "react-redux";
import Paginated from "./Paginated";
// import AddCar from "../../components/AddCar";
import {
    selectAllCars,
    selectLoading,
    selectLoadingError,
    selectLoadingFailed
} from "../../Redux/cars/carsSlice";

const HomePage = () => {
    const cars = useSelector(selectAllCars);
    const isLoading = useSelector(selectLoading);
    const loadingError = useSelector(selectLoadingError);
    const loadingFailed = useSelector(selectLoadingFailed);

    return(
        <>
        <section className="home">
            <h1>Latest Cars</h1>
            <p>Please select a Car Model</p>
            <>
                {isLoading && <p>Loading...</p>}
                {<Paginated items={cars} itemsPerPage={3}/>}
                {loadingFailed && <p>{loadingError}</p>}
            </>
        </section>
            {/* <AddCar /> */}
        </>
    )
}

export default HomePage;