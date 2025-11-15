import styles from "./CarAction.module.css";

function CarAction ({carId, onUpdateCarStatus, onRentOut, carStatus})
{
	return (
		<>
			<button
				className={styles.button}
				onClick={() => onRentOut(carId)}
				disabled={carStatus !== "Available"}
			>
				Rent Out
			</button>

			<button
				className={styles.button}
				onClick={() => onUpdateCarStatus(carId, "Available")}
				disabled={carStatus === "Available"}
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
