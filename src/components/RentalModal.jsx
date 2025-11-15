import {useState} from "react";
import styles from "./RentalModal.module.css";

function RentalModal ({car, onRent, onClose})
{
	const [renterName, setRenterName] = useState("");
	const [rentalDays, setRentalDays] = useState(1);

	const SERVICE_FEE_PERCENTAGE = 0.06; // 6%
	const basePrice = car.price * rentalDays;
	const serviceFee = basePrice * SERVICE_FEE_PERCENTAGE;
	const totalPrice = basePrice + serviceFee;

	function handleSubmit (e)
	{
		e.preventDefault();
		
		if (!renterName.trim())
		{
			alert("Please enter renter name");
			return;
		}

		onRent(car.id, renterName, rentalDays, totalPrice);
		onClose();
	}

	return (
		<div className={styles.overlay}>
			<div className={styles.modal}>
				<h2>Rent {car.name}</h2>
				
				<form onSubmit={handleSubmit} className={styles.form}>
					<div className={styles.carInfo}>
						<p><strong>Daily Rate:</strong> ${car.price.toFixed(2)}/day</p>
						<p><strong>Status:</strong> {car.status}</p>
					</div>

					<div className={styles.formGroup}>
						<label>Renter Name *</label>
						<input
							type="text"
							value={renterName}
							onChange={(e) => setRenterName(e.target.value)}
							placeholder="Enter your name"
							required
						/>
					</div>

					<div className={styles.formGroup}>
						<label>Number of Days *</label>
						<input
							type="number"
							value={rentalDays}
							onChange={(e) => setRentalDays(Math.max(1, parseInt(e.target.value) || 1))}
							min="1"
							required
						/>
					</div>

					<div className={styles.priceBreakdown}>
						<h3>Payment Breakdown</h3>
						<div className={styles.priceRow}>
							<span>Base Rate ({rentalDays} day{rentalDays > 1 ? 's' : ''}):</span>
							<span>${basePrice.toFixed(2)}</span>
						</div>
						<div className={styles.priceRow}>
							<span>Service Fee (6%):</span>
							<span>${serviceFee.toFixed(2)}</span>
						</div>
						<div className={styles.priceRow + ' ' + styles.total}>
							<span><strong>Total:</strong></span>
							<span><strong>${totalPrice.toFixed(2)}</strong></span>
						</div>
					</div>

					<div className={styles.buttonGroup}>
						<button type="submit" className={styles.rentButton}>
							Confirm & Pay
						</button>
						<button type="button" onClick={onClose} className={styles.cancelButton}>
							Cancel
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default RentalModal;
