import styles from "./CarAction.module.css";

function CarAction ({carId, onUpdateCarStatus})
{
	return (
		<>
			<button
				className={styles.button}
				onClick={() => onUpdateCarStatus(carId, "Rented")}
			>
				Rent Out
			</button>

			<button
				className={styles.button}
				onClick={() => onUpdateCarStatus(carId, "Available")}
			>
				Return
			</button>

			<button
				className={styles.button}
				onClick={() => onUpdateCarStatus(carId, "Maintenance")}
			>
				Maintenance
			</button>
		</>
	);
}

export default CarAction;
