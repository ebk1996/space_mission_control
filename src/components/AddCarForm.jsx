import {useState} from "react";
import styles from "./AddCarForm.module.css";

function AddCarForm ({onAddCar, onClose})
{
	const [formData, setFormData] = useState({
		name: "",
		price: "",
		imageUrl: "",
		videoUrl: "",
		gifUrl: ""
	});

	function handleChange (e)
	{
		const {name, value} = e.target;
		setFormData(prev => ({...prev, [name]: value}));
	}

	function handleSubmit (e)
	{
		e.preventDefault();
		
		if (!formData.name || !formData.price)
		{
			alert("Please fill in car name and price");
			return;
		}

		const newCar = {
			id: Date.now(),
			name: formData.name,
			status: "Available",
			renters: [],
			price: parseFloat(formData.price),
			imageUrl: formData.imageUrl,
			videoUrl: formData.videoUrl,
			gifUrl: formData.gifUrl
		};

		onAddCar(newCar);
		onClose();
	}

	return (
		<div className={styles.overlay}>
			<div className={styles.modal}>
				<h2>Add New Car</h2>
				<form onSubmit={handleSubmit} className={styles.form}>
					<div className={styles.formGroup}>
						<label>Car Name *</label>
						<input
							type="text"
							name="name"
							value={formData.name}
							onChange={handleChange}
							placeholder="e.g., Toyota Camry 2024"
							required
						/>
					</div>

					<div className={styles.formGroup}>
						<label>Daily Rate ($) *</label>
						<input
							type="number"
							name="price"
							value={formData.price}
							onChange={handleChange}
							placeholder="e.g., 45"
							min="0"
							step="0.01"
							required
						/>
					</div>

					<div className={styles.formGroup}>
						<label>Image URL</label>
						<input
							type="url"
							name="imageUrl"
							value={formData.imageUrl}
							onChange={handleChange}
							placeholder="https://example.com/car-image.jpg"
						/>
					</div>

					<div className={styles.formGroup}>
						<label>GIF URL</label>
						<input
							type="url"
							name="gifUrl"
							value={formData.gifUrl}
							onChange={handleChange}
							placeholder="https://example.com/car-animation.gif"
						/>
					</div>

					<div className={styles.formGroup}>
						<label>Video URL</label>
						<input
							type="url"
							name="videoUrl"
							value={formData.videoUrl}
							onChange={handleChange}
							placeholder="https://example.com/car-video.mp4"
						/>
					</div>

					<div className={styles.buttonGroup}>
						<button type="submit" className={styles.submitButton}>
							Add Car
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

export default AddCarForm;
