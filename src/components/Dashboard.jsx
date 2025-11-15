import { useState } from "react";
import styles from "./Dashboard.module.css";
import SpacecraftForm from "./SpacecraftForm";
import EncryptionTool from "./EncryptionTool";

function Dashboard({ user, onLogout, onUpdateUser }) {
	const [showSpacecraftForm, setShowSpacecraftForm] = useState(false);
	const [spacecraft, setSpacecraft] = useState(user.spacecraft || []);

	const handleCreateSpacecraft = (newSpacecraft) => {
		const updatedSpacecraft = [...spacecraft, newSpacecraft];
		setSpacecraft(updatedSpacecraft);

		// Update user in localStorage
		const users = JSON.parse(localStorage.getItem("users") || "[]");
		const updatedUsers = users.map((u) =>
			u.id === user.id ? { ...u, spacecraft: updatedSpacecraft } : u
		);
		localStorage.setItem("users", JSON.stringify(updatedUsers));

		onUpdateUser({ ...user, spacecraft: updatedSpacecraft });
		setShowSpacecraftForm(false);
	};

	const handleDeleteSpacecraft = (id) => {
		if (!confirm("Are you sure you want to delete this spacecraft?")) {
			return;
		}

		const updatedSpacecraft = spacecraft.filter((s) => s.id !== id);
		setSpacecraft(updatedSpacecraft);

		// Update user in localStorage
		const users = JSON.parse(localStorage.getItem("users") || "[]");
		const updatedUsers = users.map((u) =>
			u.id === user.id ? { ...u, spacecraft: updatedSpacecraft } : u
		);
		localStorage.setItem("users", JSON.stringify(updatedUsers));

		onUpdateUser({ ...user, spacecraft: updatedSpacecraft });
	};

	const handleUpdateStatus = (id, newStatus) => {
		const updatedSpacecraft = spacecraft.map((s) =>
			s.id === id ? { ...s, status: newStatus } : s
		);
		setSpacecraft(updatedSpacecraft);

		// Update user in localStorage
		const users = JSON.parse(localStorage.getItem("users") || "[]");
		const updatedUsers = users.map((u) =>
			u.id === user.id ? { ...u, spacecraft: updatedSpacecraft } : u
		);
		localStorage.setItem("users", JSON.stringify(updatedUsers));

		onUpdateUser({ ...user, spacecraft: updatedSpacecraft });
	};

	return (
		<div className={styles.dashboardContainer}>
			<header className={styles.header}>
				<h1>🚀 Space Mission Control</h1>
				<div className={styles.userInfo}>
					<span>Welcome, {user.username}!</span>
					<button onClick={onLogout} className={styles.logoutButton}>
						Logout
					</button>
				</div>
			</header>

			<div className={styles.content}>
				<div className={styles.spacecraftSection}>
					<div className={styles.sectionHeader}>
						<h2>My Spacecraft Fleet</h2>
						<button
							onClick={() => setShowSpacecraftForm(true)}
							className={styles.createButton}
						>
							+ Create New Spacecraft
						</button>
					</div>

					{spacecraft.length === 0 ? (
						<div className={styles.emptyState}>
							<p>No spacecraft yet. Create your first one!</p>
						</div>
					) : (
						<div className={styles.spacecraftGrid}>
							{spacecraft.map((ship) => (
								<div key={ship.id} className={styles.spacecraftCard}>
									<div className={styles.cardHeader}>
										<h3>{ship.name}</h3>
										<span className={`${styles.badge} ${styles[ship.status.toLowerCase()]}`}>
											{ship.status}
										</span>
									</div>
									<p className={styles.type}>Type: {ship.type}</p>
									<p className={styles.description}>{ship.description}</p>
									<div className={styles.cardActions}>
										<select
											value={ship.status}
											onChange={(e) =>
												handleUpdateStatus(ship.id, e.target.value)
											}
											className={styles.statusSelect}
										>
											<option value="Planned">Planned</option>
											<option value="Active">Active</option>
											<option value="Completed">Completed</option>
											<option value="Maintenance">Maintenance</option>
										</select>
										<button
											onClick={() => handleDeleteSpacecraft(ship.id)}
											className={styles.deleteButton}
										>
											Delete
										</button>
									</div>
								</div>
							))}
						</div>
					)}
				</div>

				<EncryptionTool />
			</div>

			{showSpacecraftForm && (
				<SpacecraftForm
					onCreateSpacecraft={handleCreateSpacecraft}
					onClose={() => setShowSpacecraftForm(false)}
				/>
			)}
		</div>
	);
}

export default Dashboard;
