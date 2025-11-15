import styles from "./App.module.css";

import CarManagement from "./components/CarManagement.jsx";

function App ()
{
	const INITIAL_CARS = [
		{id: 1, name: "Toyota Camry 2024", status: "Available", renters: []},
		{id: 2, name: "Honda Accord 2023", status: "Rented", renters: ["Alice Johnson"]},
		{id: 3, name: "Tesla Model 3 2024", status: "Available", renters: []},
		{id: 4, name: "Ford F-150 2023", status: "Maintenance", renters: []},
		{id: 5, name: "Chevrolet Malibu 2024", status: "Rented", renters: ["Bob Smith"]},
		{id: 6, name: "BMW 3 Series 2023", status: "Available", renters: []},
		{id: 7, name: "Audi A4 2024", status: "Maintenance", renters: []},
		{id: 8, name: "Mercedes C-Class 2023", status: "Available", renters: []},
		{id: 9, name: "Nissan Altima 2024", status: "Rented", renters: ["Carol Davis"]},
		{id: 10, name: "Hyundai Sonata 2023", status: "Available", renters: []}
	];

	return (
		<div className={styles.mainContainer}>
			<CarManagement initialCars={INITIAL_CARS} />
		</div>
	);
}

export default App;
