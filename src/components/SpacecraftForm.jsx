import { useState } from "react";
import styles from "./SpacecraftForm.module.css";

function SpacecraftForm({ onCreateSpacecraft, onClose }) {
	const [name, setName] = useState("");
	const [type, setType] = useState("Probe");
	const [description, setDescription] = useState("");
	const [error, setError] = useState("");

	const spacecraftTypes = [
		"Probe",
		"Rover",
		"Observatory",
		"Space Station",
		"Satellite",
		"Shuttle",
	];

	const handleSubmit = (e) => {
		e.preventDefault();
		setError("");

		if (!name || !description) {
			setError("Please fill in all fields");
			return;
		}

		const newSpacecraft = {
			id: Date.now(),
			name,
			type,
			description,
			status: "Planned",
			createdAt: new Date().toISOString(),
		};

		onCreateSpacecraft(newSpacecraft);
	};

	return (
		<div className={styles.modalOverlay}>
			<div className={styles.modalContent}>
				<div className={styles.modalHeader}>
					<h2>Create New Spacecraft</h2>
					<button className={styles.closeButton} onClick={onClose}>
						×
					</button>
				</div>
				<form onSubmit={handleSubmit} className={styles.spacecraftForm}>
					<div className={styles.formGroup}>
						<label htmlFor="name">Spacecraft Name</label>
						<input
							id="name"
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
							placeholder="e.g., Mars Explorer 1"
						/>
					</div>
					<div className={styles.formGroup}>
						<label htmlFor="type">Type</label>
						<select
							id="type"
							value={type}
							onChange={(e) => setType(e.target.value)}
						>
							{spacecraftTypes.map((t) => (
								<option key={t} value={t}>
									{t}
								</option>
							))}
						</select>
					</div>
					<div className={styles.formGroup}>
						<label htmlFor="description">Description</label>
						<textarea
							id="description"
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							placeholder="Describe the spacecraft mission and capabilities..."
							rows="4"
						/>
					</div>
					{error && <p className={styles.error}>{error}</p>}
					<div className={styles.buttonGroup}>
						<button
							type="button"
							className={styles.cancelButton}
							onClick={onClose}
						>
							Cancel
						</button>
						<button type="submit" className={styles.submitButton}>
							Create Spacecraft
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default SpacecraftForm;
