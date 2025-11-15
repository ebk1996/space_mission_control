import styles from "./CarCard.module.css";

function CarCard ({name, status, renters})
{
	return (
		<>
			<h2 className={styles.title}>{name}</h2>

			<p className={styles.detail}>Status: {status}</p>
			<p className={styles.detail}>Renter: {renters.length > 0 ? renters.join(", ") : "None"}</p>
		</>
	);
}

export default CarCard;
