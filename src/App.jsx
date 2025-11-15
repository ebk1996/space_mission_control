import styles from "./App.module.css";

import CarManagement from "./components/CarManagement.jsx";

function App ()
{
	const INITIAL_CARS = [
		{
			id: 1, 
			name: "Toyota Camry 2024", 
			status: "Available", 
			renters: [],
			price: 45,
			imageUrl: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=300&fit=crop",
			videoUrl: ""
		},
		{
			id: 2, 
			name: "Honda Accord 2023", 
			status: "Rented", 
			renters: ["Alice Johnson"],
			price: 42,
			imageUrl: "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=400&h=300&fit=crop",
			videoUrl: ""
		},
		{
			id: 3, 
			name: "Tesla Model 3 2024", 
			status: "Available", 
			renters: [],
			price: 85,
			imageUrl: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400&h=300&fit=crop",
			videoUrl: ""
		},
		{
			id: 4, 
			name: "Ford F-150 2023", 
			status: "Maintenance", 
			renters: [],
			price: 65,
			imageUrl: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=400&h=300&fit=crop",
			videoUrl: ""
		},
		{
			id: 5, 
			name: "Chevrolet Malibu 2024", 
			status: "Rented", 
			renters: ["Bob Smith"],
			price: 40,
			imageUrl: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop",
			videoUrl: ""
		},
		{
			id: 6, 
			name: "BMW 3 Series 2023", 
			status: "Available", 
			renters: [],
			price: 75,
			imageUrl: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop",
			videoUrl: ""
		},
		{
			id: 7, 
			name: "Audi A4 2024", 
			status: "Maintenance", 
			renters: [],
			price: 70,
			imageUrl: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop",
			videoUrl: ""
		},
		{
			id: 8, 
			name: "Mercedes C-Class 2023", 
			status: "Available", 
			renters: [],
			price: 80,
			imageUrl: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&h=300&fit=crop",
			videoUrl: ""
		},
		{
			id: 9, 
			name: "Nissan Altima 2024", 
			status: "Rented", 
			renters: ["Carol Davis"],
			price: 38,
			imageUrl: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop",
			videoUrl: ""
		},
		{
			id: 10, 
			name: "Hyundai Sonata 2023", 
			status: "Available", 
			renters: [],
			price: 40,
			imageUrl: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=400&h=300&fit=crop",
			videoUrl: ""
		}
	];

	return (
		<div className={styles.mainContainer}>
			<CarManagement initialCars={INITIAL_CARS} />
		</div>
	);
}

export default App;
