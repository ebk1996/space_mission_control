import { useState, useEffect } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";

function App() {
	const [currentUser, setCurrentUser] = useState(null);
	const [view, setView] = useState("login");

	useEffect(() => {
		// Check if user is already logged in
		const savedUser = localStorage.getItem("currentUser");
		if (savedUser) {
			setCurrentUser(JSON.parse(savedUser));
		}
	}, []);

	const handleLogin = (user) => {
		setCurrentUser(user);
		localStorage.setItem("currentUser", JSON.stringify(user));
	};

	const handleRegister = (user) => {
		setCurrentUser(user);
		localStorage.setItem("currentUser", JSON.stringify(user));
	};

	const handleLogout = () => {
		setCurrentUser(null);
		localStorage.removeItem("currentUser");
		setView("login");
	};

	const handleUpdateUser = (updatedUser) => {
		setCurrentUser(updatedUser);
		localStorage.setItem("currentUser", JSON.stringify(updatedUser));
	};

	if (currentUser) {
		return (
			<Dashboard
				user={currentUser}
				onLogout={handleLogout}
				onUpdateUser={handleUpdateUser}
			/>
		);
	}

	if (view === "login") {
		return (
			<Login
				onLogin={handleLogin}
				onSwitchToRegister={() => setView("register")}
			/>
		);
	}

	return (
		<Register
			onRegister={handleRegister}
			onSwitchToLogin={() => setView("login")}
		/>
	);
}

export default App;
