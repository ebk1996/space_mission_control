import {useState} from "react";

import styles from "./CarManagement.module.css";

import CarCard from "./CarCard.jsx";
import CarAction from "./CarAction.jsx";
import CarFilter from "./CarFilter.jsx";

function CarManagement ({initialCars})
{
	const INITIAL_FILTER = "All";

	const [cars, setCars] = useState(initialCars);
	const [filter, setFilter] = useState(INITIAL_FILTER);

	function updateCarStatus (id, newStatus)
	{
		setCars(prevCars => prevCars.map(car => car.id === id ? {...car, status: newStatus} : car));
	}

	const filteredCars = cars.filter(car => filter === "All" || car.status === filter);

	return (
		<div>
			<h1>Car Rental Management</h1>

			<div className={styles.filterContainer}>
				<CarFilter setFilter={setFilter} />
			</div>

			{
				filteredCars.map(car =>
				                     {
					                     const {id, name, status, renters} = car;

					                     return (
						                     <div
							                     key={id}
							                     className={styles.missionContainer}
						                     >
							                     <div>
								                     <CarCard
									                     name={name}
									                     status={status}
									                     renters={renters}
								                     />
							                     </div>

							                     <div>
								                     <CarAction
									                     carId={id}
									                     onUpdateCarStatus={updateCarStatus}
								                     />
							                     </div>
						                     </div>
					                     );
				                     })
			}
		</div>
	);
}

export default CarManagement;
