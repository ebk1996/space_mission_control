import { useState } from "react";
import styles from "./Auth.module.css";

function Login({ onLogin, onSwitchToRegister }) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		setError("");

		if (!username || !password) {
			setError("Please fill in all fields");
			return;
		}

		// Get stored users
		const users = JSON.parse(localStorage.getItem("users") || "[]");
		const user = users.find(
			(u) => u.username === username && u.password === password
		);

		if (user) {
			onLogin(user);
		} else {
			setError("Invalid username or password");
		}
	};

	return (
		<div className={styles.authContainer}>
			<div className={styles.authBox}>
				<h1>Space Mission Control</h1>
				<h2>Login</h2>
				<form onSubmit={handleSubmit} className={styles.authForm}>
					<div className={styles.formGroup}>
						<label htmlFor="username">Username</label>
						<input
							id="username"
							type="text"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							placeholder="Enter username"
						/>
					</div>
					<div className={styles.formGroup}>
						<label htmlFor="password">Password</label>
						<input
							id="password"
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Enter password"
						/>
					</div>
					{error && <p className={styles.error}>{error}</p>}
					<button type="submit" className={styles.submitButton}>
						Login
					</button>
				</form>
				<p className={styles.switchText}>
					Don't have an account?{" "}
					<button
						onClick={onSwitchToRegister}
						className={styles.linkButton}
					>
						Register
					</button>
				</p>
			</div>
		</div>
	);
}

export default Login;
