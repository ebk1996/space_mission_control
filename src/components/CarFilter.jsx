import styles from "./CarFilter.module.css";

function CarFilter ({setFilter})
{
	const STATUSES = ["All", "Available", "Rented", "Maintenance"];

	return (
		<>
			{
				STATUSES.map((status, index) => (
					<button
						key={index}
						onClick={() => setFilter(status)}
						className={styles.button}
					>
						{status}
					</button>
				))
			}
		</>
	);
}

export default CarFilter;
