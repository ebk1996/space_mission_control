import styles from "./CarCard.module.css";

function CarCard ({name, status, renters, price, imageUrl, videoUrl, gifUrl})
{
	return (
		<div className={styles.cardContainer}>
			{/* Media Display */}
			<div className={styles.mediaContainer}>
				{videoUrl && (
					<video className={styles.media} controls>
						<source src={videoUrl} type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				)}
				{!videoUrl && (gifUrl || imageUrl) && (
					<img 
						src={gifUrl || imageUrl} 
						alt={name}
						className={styles.media}
					/>
				)}
				{!videoUrl && !gifUrl && !imageUrl && (
					<div className={styles.placeholderMedia}>
						No Image Available
					</div>
				)}
			</div>

			{/* Car Details */}
			<div className={styles.detailsContainer}>
				<h2 className={styles.title}>{name}</h2>
				<p className={styles.detail}>Status: {status}</p>
				<p className={styles.detail}>Daily Rate: ${price}/day</p>
				<p className={styles.detail}>Renter: {renters.length > 0 ? renters.join(", ") : "None"}</p>
			</div>
		</div>
	);
}

export default CarCard;
