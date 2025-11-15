import {useState} from "react";

import styles from "./CarManagement.module.css";

import CarCard from "./CarCard.jsx";
import CarAction from "./CarAction.jsx";
import CarFilter from "./CarFilter.jsx";
import AddCarForm from "./AddCarForm.jsx";
import RentalModal from "./RentalModal.jsx";

function CarManagement ({initialCars})
{
	const INITIAL_FILTER = "All";

	const [cars, setCars] = useState(initialCars);
	const [filter, setFilter] = useState(INITIAL_FILTER);
	const [showAddCarForm, setShowAddCarForm] = useState(false);
	const [rentalModalCar, setRentalModalCar] = useState(null);

	function updateCarStatus (id, newStatus)
	{
		setCars(prevCars => prevCars.map(car => car.id === id ? {...car, status: newStatus} : car));
	}

	function addCar (newCar)
	{
		setCars(prevCars => [...prevCars, newCar]);
	}

	function handleRentOut (carId)
	{
		const car = cars.find(c => c.id === carId);
		if (car)
		{
			setRentalModalCar(car);
		}
	}

	function handleRent (carId, renterName, rentalDays, totalPrice)
	{
		setCars(prevCars => prevCars.map(car => 
			car.id === carId 
				? {...car, status: "Rented", renters: [renterName]}
				: car
		));
		alert(`Payment successful! Total: $${totalPrice.toFixed(2)}\nRental confirmed for ${rentalDays} day(s).`);
	}

	const filteredCars = cars.filter(car => filter === "All" || car.status === filter);

	return (
		<div>
			<div className={styles.header}>
				<h1>Car Rental Management</h1>
				<button 
					className={styles.addCarButton}
					onClick={() => setShowAddCarForm(true)}
				>
					+ Add New Car
				</button>
			</div>

			<div className={styles.filterContainer}>
				<CarFilter setFilter={setFilter} />
			</div>

			{
				filteredCars.map(car =>
				                     {
					                     const {id, name, status, renters, price, imageUrl, videoUrl, gifUrl} = car;

					                     return (
						                     <div
							                     key={id}
							                     className={styles.missionContainer}
						                     >
							                     <div className={styles.cardSection}>
								                     <CarCard
									                     name={name}
									                     status={status}
									                     renters={renters}
									                     price={price}
									                     imageUrl={imageUrl}
									                     videoUrl={videoUrl}
									                     gifUrl={gifUrl}
								                     />
							                     </div>

							                     <div className={styles.actionSection}>
								                     <CarAction
									                     carId={id}
									                     onUpdateCarStatus={updateCarStatus}
									                     onRentOut={handleRentOut}
									                     carStatus={status}
								                     />
							                     </div>
						                     </div>
					                     );
				                     })
			}

			{showAddCarForm && (
				<AddCarForm 
					onAddCar={addCar}
					onClose={() => setShowAddCarForm(false)}
				/>
			)}

			{rentalModalCar && (
				<RentalModal
					car={rentalModalCar}
					onRent={handleRent}
					onClose={() => setRentalModalCar(null)}
				/>
			)}
		</div>
	);
}

export default CarManagement;
