import { useState } from "react";
import styles from "./Auth.module.css";

function Register({ onRegister, onSwitchToLogin }) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		setError("");

		if (!username || !password || !confirmPassword) {
			setError("Please fill in all fields");
			return;
		}

		if (password !== confirmPassword) {
			setError("Passwords do not match");
			return;
		}

		if (password.length < 6) {
			setError("Password must be at least 6 characters");
			return;
		}

		// Get stored users
		const users = JSON.parse(localStorage.getItem("users") || "[]");
		
		// Check if username exists
		if (users.find((u) => u.username === username)) {
			setError("Username already exists");
			return;
		}

		// Create new user
		const newUser = {
			id: Date.now(),
			username,
			password,
			spacecraft: [],
		};

		users.push(newUser);
		localStorage.setItem("users", JSON.stringify(users));

		onRegister(newUser);
	};

	return (
		<div className={styles.authContainer}>
			<div className={styles.authBox}>
				<h1>Space Mission Control</h1>
				<h2>Register</h2>
				<form onSubmit={handleSubmit} className={styles.authForm}>
					<div className={styles.formGroup}>
						<label htmlFor="username">Username</label>
						<input
							id="username"
							type="text"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							placeholder="Choose a username"
						/>
					</div>
					<div className={styles.formGroup}>
						<label htmlFor="password">Password</label>
						<input
							id="password"
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Choose a password"
						/>
					</div>
					<div className={styles.formGroup}>
						<label htmlFor="confirmPassword">Confirm Password</label>
						<input
							id="confirmPassword"
							type="password"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
							placeholder="Confirm your password"
						/>
					</div>
					{error && <p className={styles.error}>{error}</p>}
					<button type="submit" className={styles.submitButton}>
						Register
					</button>
				</form>
				<p className={styles.switchText}>
					Already have an account?{" "}
					<button
						onClick={onSwitchToLogin}
						className={styles.linkButton}
					>
						Login
					</button>
				</p>
			</div>
		</div>
	);
}

export default Register;
